import Navbar from '@components/Navbar';

export default function Header({ pageTitle }) {
  return (
    <header className="bg-gray-100 text-gray-800">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 text-center">
        <h1 className="text-2xl font-bold text-white">
          {pageTitle || "Crider's Institute of Welding Technology"}
        </h1>
        <p className="text-sm text-gray-600">
          Est. 2015 | Free Tours | Veteran Approved | AWS Certified | Master Classes
        </p>
        <a href="tel:8169924046" className="text-lg font-semibold mt-1 text-ciwt-dark">
          📞 (816) 992-4046
        </a>
      </div>

      {/* Navbar always visible under header */}
      <nav className="">
        <Navbar />
      </nav>
    </header>
  );
}
