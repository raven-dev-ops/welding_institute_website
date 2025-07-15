import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageTitle={pageTitle} />
      <main className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4 px-0 md:px-0 pt-0 pb-8">
        {/* Left empty column */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* Center content with site-wide prose */}
        <div className="col-span-1 md:col-span-8 px-4 md:px-0 prose prose-neutral max-w-none">
          {children}
        </div>

        {/* Right empty column */}
        <div className="hidden md:block md:col-span-2"></div>
      </main>
      <Footer />
    </div>
  );
}
