import Navbar from "@components/Navbar";

export default function Header({ pageTitle }) {
  return (
    <>
      {/* ✅ FIXED Navbar sits at the absolute top */}
      <Navbar />

      {/* ✅ Top Info Bar below, will slide under the navbar */}
      <header className="bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4 py-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {pageTitle || "Crider's Institute of Welding Technology"}
          </h1>
          <p className="text-sm text-gray-600">
            Est. 2015 | Free Tours | Veteran Approved | AWS Certified | Master Classes
          </p>
          <a href="tel:8169924046" className="text-lg font-semibold mt-1 text-ciwt-dark">
            📞 (816) 992-4046
          </a>
        </div>
      </header>
    </>
  );
}
