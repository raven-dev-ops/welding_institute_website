import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageTitle={pageTitle} />
      <main className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4 px-0 md:px-0 pt-[112px] pb-8">
        {/* Left empty column */}
        <div className="hidden md:block md:col-span-3"></div>

        {/* Center column for main content */}
        <div className="col-span-1 md:col-span-6 px-4 md:px-0 prose prose-neutral max-w-2xl w-full mx-auto">
          {children}
        </div>

        {/* Right empty column */}
        <div className="hidden md:block md:col-span-3"></div>
      </main>
      <Footer />
    </div>
  );
}
