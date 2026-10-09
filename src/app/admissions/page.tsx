"use client"

import React, { useActionState, useEffect, useRef } from 'react';
import { submitEnquiry } from '@/app/actions/admissions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ClipboardList, UserCheck, FileText, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function AdmissionsPage() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  const steps = [
    { title: "Enquiry", desc: "Fill the online form", icon: ClipboardList },
    { title: "Interaction", desc: "Meet the principal", icon: UserCheck },
    { title: "Documents", desc: "Submit paperwork", icon: FileText },
    { title: "Admission", desc: "Fee payment & joining", icon: CheckCircle2 }
  ];

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-foreground">Admissions</h1>
          <div className="h-1 w-20 bg-school-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the S.S. Public School family. We are currently accepting applications for Session 2026-27.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Admission Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-muted -z-10"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-background border-4 border-school-yellow flex items-center justify-center mb-4 text-school-navy shadow-lg">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-base">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'CBSE Affiliated', icon: '🎓' },
            { label: 'Nursery – Class 10', icon: '📚' },
            { label: 'Safe Transport', icon: '🚌' },
            { label: 'Experienced Faculty', icon: '👨‍🏫' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center bg-school-yellow/10 border border-school-yellow/30 rounded-xl p-4">
              <span className="text-2xl mb-2">{item.icon}</span>
              <span className="text-sm font-semibold text-school-navy dark:text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enquiry Form */}
          <Card className="shadow-lg border-t-4 border-t-school-maroon">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Admission Enquiry</CardTitle>
              <CardDescription>Fill out this form and our admissions team will get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              {state?.success && (
                <div className="mb-4 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 dark:text-green-200 font-medium">{state.message}</p>
                    <Link href="/admissions/thank-you" className="text-sm text-green-700 dark:text-green-300 underline mt-1 inline-block">
                      View next steps →
                    </Link>
                  </div>
                </div>
              )}
              {state?.success === false && (
                <div className="mb-4 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-red-800 dark:text-red-200">{state.message}</p>
                </div>
              )}
              <form ref={formRef} action={formAction} className="space-y-5">
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent&apos;s Name *</Label>
                    <Input id="parentName" name="parentName" autoComplete="name" required />
                    {state?.errors?.parentName && <p className="text-sm text-destructive">{state.errors.parentName[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student&apos;s Name *</Label>
                    <Input id="studentName" name="studentName" autoComplete="off" required />
                    {state?.errors?.studentName && <p className="text-sm text-destructive">{state.errors.studentName[0]}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number *</Label>
                    <Input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit number" required />
                    {state?.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" />
                    {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Admission for Grade *</Label>
                  <Select name="grade" required>
                    <SelectTrigger id="grade">
                      <SelectValue placeholder="Select a grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Nursery">Nursery</SelectItem>
                      <SelectItem value="LKG">LKG</SelectItem>
                      <SelectItem value="UKG">UKG</SelectItem>
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <SelectItem key={num} value={`Class ${num}`}>Class {num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {state?.errors?.grade && <p className="text-sm text-destructive">{state.errors.grade[0]}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message / Query</Label>
                  <Textarea id="message" name="message" rows={3} />
                </div>

                <Button type="submit" className="w-full bg-school-navy text-white hover:bg-school-navy/90 h-11" disabled={isPending}>
                  {isPending ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ & Fee Structure */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
              {/* @ts-expect-error */}
              <Accordion type="single" collapsible={true} className="w-full bg-card rounded-lg border px-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the age criteria for Nursery?</AccordionTrigger>
                  <AccordionContent>
                    A child must be 3 years old by 31st March of the academic year for Nursery admission.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is transport facility available?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide GPS-enabled safe transport covering Dhobwal, Baniyapur and surrounding areas within a 15km radius.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What documents are required?</AccordionTrigger>
                  <AccordionContent>
                    Birth Certificate, Aadhaar cards of child and parents, 4 passport size photos, and previous school&apos;s TC (for Class 2 and above).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>When do admissions open?</AccordionTrigger>
                  <AccordionContent>
                    Admissions for the new academic session (April–March) typically open in January. Early applications are encouraged.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Card className="bg-school-yellow/10 border-school-yellow/30">
              <CardHeader>
                <CardTitle className="text-lg">Fee Structure <span className="text-xs font-normal text-muted-foreground ml-2">(Demo Data)</span></CardTitle>
                <CardDescription>Indicative fees for Session 2026-27. Please contact the school for exact figures.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Pre-Primary (Nursery – UKG)', fee: '₹1,500 / month' },
                    { label: 'Primary (Class 1 – 5)', fee: '₹1,800 / month' },
                    { label: 'Middle (Class 6 – 8)', fee: '₹2,200 / month' },
                    { label: 'Secondary (Class 9 – 10)', fee: '₹2,500 / month' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between border-b border-border/50 pb-2 last:border-0">
                      <span className="font-medium">{row.label}</span>
                      <span>{row.fee}</span>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground mt-4 italic">* Annual charges and transport fees are extra. This is placeholder demo data.</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <div className="bg-school-navy dark:bg-school-navy/50 rounded-xl p-6 text-white text-center">
              <h3 className="font-heading font-bold text-xl mb-2">Need Help?</h3>
              <p className="text-white/80 mb-4 text-sm">Our admissions team is available Mon–Sat, 9 AM to 4 PM</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+918789298788" className={buttonVariants({ className: 'bg-school-yellow text-school-navy hover:bg-school-yellow/90 font-bold' })}>
                  📞 +91 87892 98788
                </a>
                <a href="tel:+919241100290" className={buttonVariants({ variant: 'outline', className: 'border-white/30 text-white hover:bg-white/10' })}>
                  📞 +91 92411 00290
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
