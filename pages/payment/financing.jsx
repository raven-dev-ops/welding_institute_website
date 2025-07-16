import Layout from '@components/Layout';

export default function Financing() {
  return (
    <Layout pageTitle="CIWT Financing Assistance Programs">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Convenient Payment Options for Your Welding Courses</h1>

        <p className="text-lg text-gray-700 mb-6">
          Cost shouldn&apos;t keep you from training for a lucrative career. That&apos;s why Crider&apos;s Institute of Welding Technology provides you with various payment options to help you afford our welding programs. Call us today for more information on our available payment options and take the first step toward your new career.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Payment Options Include:</h2>
 
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li className="mb-3">
            <strong>SkillUp</strong> – This is offered throughout the state of Missouri and is focused on helping students on government assistance programs complete their job training.
          </li>
          <li className="mb-3">
            <strong>Veterans Administration</strong> – Military service members can receive assistance through the VA’s Education and Career Counseling program. Veterans and dependents can get personalized counseling and support in career training, learn to more effectively use their benefits, and achieve their goals.
          </li>
          <li className="mb-3">
            <strong>Vocational Rehabilitation</strong> – This is a state-run program focused on guidance and counseling regarding job seeking, job placement, and vocational training for people with disabilities.
          </li>
          <li>
            <strong>GI Bill</strong> – This program can help pay for some or all job training costs for military veterans.
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-8">
          <strong>Free Tours:</strong> Call us today for more information<br /> {/* no apostrophe to escape */}
          <span className="block mt-2 font-semibold">(816) 992-4046</span>
        </p>

        <div className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
          <p className="mb-2">
            “I had an awesome experience with their Master Welding Program. Stan Crider is a great teacher and a good friend. I highly recommend CIWT to anyone who wants to weld. 500 hours of hands-on training (lots of one-on-one) and tests for three welding certifications!”
          </p>
          <p className="font-semibold">- Nicholas Bishop | Google Review</p> {/* no apostrophe to escape */}
        </div>
      </div>
    </Layout>
  );
}
