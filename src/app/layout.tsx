import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import MainNav from "@/components/main-nav";
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
            <div className="max-w-7xl mx-auto">
              <div className="min-h-screen flex">
                <MainNav />
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
