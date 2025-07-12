import Layout from '@components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Stan Crider - Owner</h2>
          <p className="text-gray-700 mb-4">
            Mr. Crider has more than 45 years of experience in various aspects of the welding industry.
            He has been teaching in private schools and public colleges for more than 25 years.
            His career includes inspection, welder testing, and work as a technician and welder in the aircraft and power production industry.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Education</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tulsa Junior College, Tulsa OK (1978)</li>
            <li>Oklahoma State University, Stillwater OK (1987)</li>
            <li>Pittsburg State University, Pittsburg KS (1990)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Technical Training & Certifications</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>AWS Certified Welding Inspector & Educator</li>
            <li>Certified in SMAW, GTAW, GMAW, FCAW</li>
            <li>Certified to AWS D1.1, ASME Section IX, Military Aluminum, Aircraft Materials, and more</li>
            <li>Professional training in Radiography, Film Interpretation, Welding Management, and more</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Professional Experience</h3>
          <p className="text-gray-700">
            Stan has worked as a welding technician for aircraft and power plants, journeyman pipefitter, blueprint reading instructor, inspector, high vacuum welder, and more.
            He has developed welding programs and curriculum for both colleges and private industry.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Awards</h3>
          <p className="text-gray-700">
            McDonnell Douglas Outstanding Performance, 1994 AWS District 16 Educator Award, and Kansas City Section Education Award.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About Crider&apos;s Institute of Welding Technology</h2>
          <p className="text-gray-700 mb-2">
            Established in 2015 — Locally Owned | Free Tours | Competitive Class Rates
          </p>
          <p className="text-gray-700 mb-2">
            (816) 992-4046 | ciwt.mo@gmail.com
          </p>
          <p className="text-gray-700 mb-2">
            We offer SMAW, GTAW, GMAW, FCAW welding training, unlimited welding coupons, flexible schedules, tuition assistance, and experienced faculty.
            We proudly maintain a 12:1 student-to-instructor ratio.
          </p>
          <p className="text-gray-700">
            Community supporter of local Boy Scouts. Certified Welding Educator & Inspector for the American Welding Society.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
          <p className="text-gray-700 mb-1">Mon - Fri: 7:00 am - 10:00 pm</p>
          <p className="text-gray-700 mb-1">Sat & Sun: Closed</p>
          <p className="text-gray-700">Call us today to schedule a free tour!</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Accepted Payment Types</h3>
          <p className="text-gray-700 mb-1">American Express, Cash, Check, Discover, MasterCard, Visa</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Languages</h3>
          <p className="text-gray-700">English</p>
        </section>
      </div>
    </Layout>
  );
}
