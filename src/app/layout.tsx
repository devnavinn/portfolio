import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import MainNav from "@/components/main-nav";
import Header from "@/components/header";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "Navin Kumar",
  description:
    "Agile Software Developer I play read , write and travel for fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-5xl mx-auto print:max-w-none">
              <div className="min-h-screen flex">
                <div className="print:hidden">
                  <MainNav />
                </div>
                <main className="grow overflow-hidden px-6 print:px-0">
                  <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col print:max-w-none">
                    <div className="print:hidden">
                      <Header />
                    </div>
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
