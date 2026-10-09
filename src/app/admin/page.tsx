import React from 'react';
import { db } from '@/lib/db';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Very basic auth check for demo purposes
// In a real app, use NextAuth or similar
function getEnquiries() {
  if (!db) return [];
  try {
    return db.prepare('SELECT * FROM enquiries ORDER BY createdAt DESC').all();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default function AdminPage() {
  const enquiries = getEnquiries() as any[];

  return (
    <div className="py-12 bg-muted/20 min-h-[80vh]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Demo Admin Panel (No Auth required for this demo)</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Admission Enquiries</CardTitle>
            <CardDescription>A list of enquiries submitted via the Admissions page.</CardDescription>
          </CardHeader>
          <CardContent>
            {enquiries.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No enquiries found. Submit one on the admissions page!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Parent Name</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enquiries.map((enq) => (
                      <TableRow key={enq.id}>
                        <TableCell className="whitespace-nowrap">
                          {new Date(enq.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-medium">{enq.parentName}</TableCell>
                        <TableCell>{enq.studentName}</TableCell>
                        <TableCell>
                          <div>{enq.phone}</div>
                          {enq.email && <div className="text-sm text-muted-foreground">{enq.email}</div>}
                        </TableCell>
                        <TableCell>{enq.grade}</TableCell>
                        <TableCell className="max-w-[300px] truncate">
                          {enq.message || '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
