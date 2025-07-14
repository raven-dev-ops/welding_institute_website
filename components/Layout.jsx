import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children, pageTitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Pass pageTitle down so Header shows correct title */}
      <Header pageTitle={pageTitle} />
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
