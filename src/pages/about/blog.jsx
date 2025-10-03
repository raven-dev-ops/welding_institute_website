import Layout from "@layout/Layout";

export default function Blog() {
  return (
    <Layout
      pageTitle="CIWT Educational Blog"
      header={"blog"}
      subtitle={"Crider's Institute of Welding Technology"}
      cta={{}}
      heroSize="sm"
      showVideo={false}
      bgImage="/images/stock_photos/RSshutterstock_127958084-2880w.jpg"
    >
      <div className="max-w-3xl mx-auto px-4 py-16">
        {" "}
        {/* No apostrophes here */}
        <h1 className="text-3xl font-bold mb-4"></h1>
        <p className="text-lg text-gray-700 mb-6">
          Stay tuned for articles, tips, and stories from our instructors and
          graduates.
        </p>
        <p className="text-base text-gray-600">
          Our blog will cover industry insights, welding techniques, student
          success stories, and more. Check back soon!
        </p>
      </div>{" "}
      {/* No apostrophes here */}
    </Layout>
  );
}
