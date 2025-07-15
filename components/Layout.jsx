import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageTitle={pageTitle} />
      <main className="flex-1 pt-[112px] pb-8 bg-white">
        <div className="px-4 prose prose-neutral mx-auto max-w-2xl w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
