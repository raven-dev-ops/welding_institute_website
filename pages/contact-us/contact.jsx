import Layout from '@components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Have questions or need more information? We’re here to help!
        </p>

        <p className="text-base text-gray-600 mb-2">
          📍 <strong>Address:</strong> 1234 Welding Ave, Your City, ST 12345
        </p>
        <p className="text-base text-gray-600 mb-2">
          📞 <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="text-base text-gray-600 mb-6">
          ✉️ <strong>Email:</strong> info@cridersinstitute.com
        </p>

        <p className="text-base text-gray-600">
          Or visit us during office hours to speak with our admissions team. We look forward to meeting you!
        </p>
      </div>
    </Layout>
  );
}
