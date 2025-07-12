import Layout from '@components/Layout';

export default function Reviews() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Student Reviews</h1>
        <p className="text-lg text-gray-700 mb-8">
          Our Google Reviews and testimonials will be displayed here soon.
          We’re excited to share what our students say about training at Crider’s Institute of Welding!
        </p>
        <p className="text-sm text-gray-500">
          Check back soon for real stories from our graduates and industry partners.
        </p>
      </div>
    </Layout>
  );
}
