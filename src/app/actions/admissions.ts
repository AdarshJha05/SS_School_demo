"use server"

import { db } from '@/lib/db';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const enquirySchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  studentName: z.string().min(2, "Student name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  grade: z.string().min(1, "Please select a grade"),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Spam detected").optional()
});

export async function submitEnquiry(prevState: any, formData: FormData) {
  try {
    const rawData = {
      parentName: formData.get('parentName'),
      studentName: formData.get('studentName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      grade: formData.get('grade'),
      message: formData.get('message'),
      honeypot: formData.get('honeypot'),
    };

    const validatedData = enquirySchema.parse(rawData);
    
    // Honeypot check
    if (validatedData.honeypot) {
      return { success: true, message: "Thank you for your enquiry. We will contact you soon." };
    }

    if (!db) {
      // Fallback if sqlite failed to load (e.g. some deployment environments)
      console.log('DB not available, saving to memory only:', validatedData);
      return { success: true, message: "Enquiry submitted successfully! (Demo mode)" };
    }

    const stmt = db.prepare(`
      INSERT INTO enquiries (parentName, studentName, phone, email, grade, message)
      VALUES (@parentName, @studentName, @phone, @email, @grade, @message)
    `);

    stmt.run({
      parentName: validatedData.parentName,
      studentName: validatedData.studentName,
      phone: validatedData.phone,
      email: validatedData.email || null,
      grade: validatedData.grade,
      message: validatedData.message || null,
    });

    revalidatePath('/admin');

    return { 
      success: true, 
      message: "Thank you for your enquiry! Our admissions team will contact you shortly." 
    };
  } catch (error) {
    console.error("Enquiry submission error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors, message: "Please fix the errors in the form." };
    }
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}
