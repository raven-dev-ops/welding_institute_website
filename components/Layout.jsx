import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageTitle={pageTitle} />
      <main className="flex-1 pt-[112px] pb-8 bg-white">
        {/*
          We don't constrain children here directly,
          so you have full flexibility on each page 
        */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
