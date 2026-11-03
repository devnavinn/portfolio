import MainNav from "@/components/main-nav";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import ChatWidget from "@/components/chat-widget";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 print:max-w-none print:px-0">
        {children}
      </main>
      <Footer />
      <MainNav />
      <WhatsAppFloat />
      <ChatWidget />
    </div>
  );
}
