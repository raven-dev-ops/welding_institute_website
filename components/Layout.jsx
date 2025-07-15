import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageTitle={pageTitle} />
      <main className="flex-1 pt-[112px] pb-8 bg-white">
        <div className="mx-auto px-4 w-full max-w-2xl prose prose-neutral">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
