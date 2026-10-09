import type { Metadata } from "next";
import { poppins, inter, notoSansDevanagari } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/i18n/DictionaryContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { MobileBottomBar } from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  title: "S.S. Public School | Learning with Values, Growing with Confidence",
  description: "Official demo website for S.S. Public School, Dhobwal, Baniyapur, Saran, Bihar. CBSE Affiliated up to Class 10.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} ${notoSansDevanagari.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <Navbar />
            <main className="flex-1 pb-14 md:pb-0">
              {children}
            </main>
            <Footer />
            <FloatingActions />
            <MobileBottomBar />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
