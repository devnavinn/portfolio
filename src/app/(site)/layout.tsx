import MainNav from "@/components/main-nav";
import Header from "@/components/header";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto print:max-w-none">
      <div className="min-h-screen flex">
        <div className="print:hidden">
          <MainNav />
        </div>
        <main className="grow overflow-hidden px-6 print:px-0">
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col print:max-w-none max-md:mb-8">
            <div className="print:hidden">
              <Header />
            </div>
            {children}
          </div>
        </main>
      </div>
      <WhatsAppFloat />
    </div>
  );
}
