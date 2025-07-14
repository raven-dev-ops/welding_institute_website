import Layout from '@components/Layout';

export default function Blog() {
  return (
    <Layout pageTitle="CIWT Educational Blog">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4"></h1>
        <p className="text-lg text-gray-700 mb-6">
          Stay tuned for articles, tips, and stories from our instructors and graduates.
        </p>
        <p className="text-base text-gray-600">
          Our blog will cover industry insights, welding techniques, student success stories, and more. Check back soon!
        </p>
      </div>
    </Layout>
  );
}
