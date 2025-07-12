export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Crider&apos;s Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}