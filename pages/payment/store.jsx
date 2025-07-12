import Layout from '@components/Layout';

export default function StorePage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Student Store</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the Crider’s Institute Student Store! Soon you’ll be able to browse and purchase official gear, tools, and other welding essentials right here.
        </p>
        <p className="text-base text-gray-600">
          Our online shop will launch soon — check back for updates or contact us for early product inquiries.
        </p>
      </div>
    </Layout>
  );
}
