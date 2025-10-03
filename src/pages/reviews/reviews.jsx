import { Layout, Page } from "@layout";

export default function Reviews() {
  return (
    <Layout
      pageTitle="CIWT Google & Student Reviews"
      header="Crider's Institute of Welding Technology Customer ReviewS"
      showVideo={false}
    >
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4"></h1>
        <p className="text-lg text-gray-700 mb-8">
          Here&apos;s what our students say about training at Crider&apos;s
          Institute of Welding Technology!
        </p>

        {/* ✅ Google Reviews Widget Embed */}
        <div className="elfsight-app-YOUR_APP_ID_HERE"></div>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>

        <p className="text-sm text-gray-500 mt-8">
          Want to see more? Visit our{" "}
          <a
            href="https://www.google.com/maps/place/Crider's+Institute+of+Welding+Technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Google Maps page
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}
