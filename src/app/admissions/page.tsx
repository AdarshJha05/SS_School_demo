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
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, ClipboardList, UserCheck, FileText } from 'lucide-react';

export default function AdmissionsPage() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, null);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
      formRef.current?.reset();
    } else if (state?.success === false) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const steps = [
    { title: "Enquiry", desc: "Fill the online form", icon: ClipboardList },
    { title: "Interaction", desc: "Meet the principal", icon: UserCheck },
    { title: "Documents", desc: "Submit paperwork", icon: FileText },
    { title: "Admission", desc: "Fee payment & joining", icon: CheckCircle2 }
  ];

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">Admissions</h1>
          <div className="h-1 w-20 bg-school-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the S.S. Public School family. We are currently accepting applications for the upcoming academic session.
          </p>
        </div>

        {/* Admission Process Stepper */}
        <div className="mb-20">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">Admission Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10 -translate-y-1/2"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-background border-4 border-school-yellow flex items-center justify-center mb-4 text-school-navy shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enquiry Form */}
          <Card className="shadow-lg border-t-4 border-t-school-maroon">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Admission Enquiry</CardTitle>
              <CardDescription>Fill out this form and our admissions team will get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                {/* Honeypot */}
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent's Name *</Label>
                    <Input id="parentName" name="parentName" required />
                    {state?.errors?.parentName && <p className="text-sm text-destructive">{state.errors.parentName[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student's Name *</Label>
                    <Input id="studentName" name="studentName" required />
                    {state?.errors?.studentName && <p className="text-sm text-destructive">{state.errors.studentName[0]}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number *</Label>
                    <Input id="phone" name="phone" placeholder="10-digit number" required />
                    {state?.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" />
                    {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Admission for Grade *</Label>
                  <Select name="grade" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Nursery">Nursery</SelectItem>
                      <SelectItem value="LKG">LKG</SelectItem>
                      <SelectItem value="UKG">UKG</SelectItem>
                      {[1,2,3,4,5,6,7,8,9].map(num => (
                        <SelectItem key={num} value={`Class ${num}`}>Class {num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {state?.errors?.grade && <p className="text-sm text-destructive">{state.errors.grade[0]}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message / Query</Label>
                  <Textarea id="message" name="message" rows={4} />
                </div>

                <Button type="submit" className="w-full bg-school-navy text-white hover:bg-school-navy/90" disabled={isPending}>
                  {isPending ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ & Fee Structure (Demo) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full bg-card rounded-lg border px-4 shadow-sm">
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
                    Birth Certificate, Aadhaar cards of child and parents, 4 passport size photos, and previous school's TC (for Class 2 and above).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Card className="bg-school-yellow/10 border-school-yellow/30">
              <CardHeader>
                <CardTitle className="text-lg">Fee Structure (Demo Data)</CardTitle>
                <CardDescription>Indicative fees for the current session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="font-medium">Pre-Primary (Nursery - UKG)</span>
                    <span>₹1,500 / month</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="font-medium">Primary (Class 1 - 5)</span>
                    <span>₹1,800 / month</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="font-medium">Middle (Class 6 - 8)</span>
                    <span>₹2,200 / month</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="font-medium">Secondary (Class 9 - 10)</span>
                    <span>₹2,500 / month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">* Annual charges and transport fees are extra. This is placeholder data.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
