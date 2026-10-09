"use client"

import React from 'react';
import { useI18n } from '@/i18n/DictionaryContext';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">{t.nav.contact}</h1>
          <div className="h-1 w-20 bg-school-yellow mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for any queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-t-4 border-t-school-navy">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-school-navy/10 p-3 rounded-full text-school-navy">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    S.S. Public School<br />
                    Dhobwal, Baniyapur<br />
                    Saran, Bihar, India<br />
                    (near S.B.I. Bank)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-school-yellow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-school-yellow/20 p-3 rounded-full text-school-yellow">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm">
                    +91 87892 98788<br />
                    +91 92411 00290
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-school-maroon">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-school-maroon/10 p-3 rounded-full text-school-maroon">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 8:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden h-full min-h-[400px]">
              <iframe
                title="S.S. Public School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14361.341517457497!2d84.7787498!3d25.8584742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992b95b4cbdf79b%3A0x6b4f738a5b2fc136!2sBaniyapur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
