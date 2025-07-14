import Navbar from '@components/Navbar';

export default function Header({ pageTitle }) {
  return (
    <header className="bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 text-center">
        <h1 className="text-xl font-bold">
          {pageTitle || "Crider's Institute of Welding Technology"}
        </h1>
        <p className="text-sm">
          Est. 2015 | Free Tours | Veteran Approved | AWS Certified | Masterclasses
        </p>
        <p className="text-lg font-semibold mt-1">
          📞 (816) 992-4046
        </p>
      </div>

      {/* Navbar always visible under header */}
      <nav className="border-t border-gray-700">
        <Navbar />
      </nav>
    </header>
  );
}
