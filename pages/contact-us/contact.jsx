import Layout from '@components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Meet Stan Crider - Owner</h2>
          <p className="text-gray-700 mb-2">
            With over 45 years of experience in the welding industry, Stan brings unmatched expertise to every student. 
            He’s an AWS Certified Welding Inspector & Educator and has taught in private schools and public colleges for more than 25 years.
          </p>
          <p className="text-gray-700">
            Stan’s career includes inspection, testing, blueprint reading, curriculum development, and real-world welding for aircraft, power plants, refineries, and more.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About Crider&apos;s Institute</h2>
          <p className="text-gray-700 mb-2">
            Locally owned since 2015 — competitive class rates, free tours, and a reputation for hands-on, career-focused training.
          </p>
          <p className="text-gray-700 mb-2">
            Phone: (816) 992-4046 &nbsp;|&nbsp; Email: ciwt.mo@gmail.com
          </p>
          <p className="text-gray-700">
            Community supporter & proud member of the American Welding Society.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Visit & Business Hours</h2>
          <p className="text-gray-700 mb-1">300 NW Jefferson, Grain Valley, MO 64029</p>
          <p className="text-gray-700 mb-1">Mon - Fri: 7:00 am - 10:00 pm</p>
          <p className="text-gray-700 mb-1">Sat - Sun: Closed</p>
          <p className="text-gray-700">Call us today to schedule a free tour!</p>
        </section>
      </div>
    </Layout>
  );
}
