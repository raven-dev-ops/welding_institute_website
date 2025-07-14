import Layout from '@components/Layout';

export default function MasterWelding() {
  return (
    <Layout pageTitle="CIWT | Master Welder Program">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <h1 className="text-4xl font-bold mb-4">Master Welding Program</h1>
        <p className="text-lg text-gray-700">
          Become a Master Welder in Four to Six Months With Our Classes
        </p>
        <p className="text-base text-gray-700">
          Start your new career in welding with Crider's Institute of Welding Technology and our welding programs.
          During our 16 to 24-week courses, you'll develop the necessary skills to become a certified welder.
          We look forward to helping you advance your career and become a great asset to any company you choose.
          As the leading provider of welding classes in Columbia, MO and throughout the Kansas City metropolitan area,
          Crider's Institute of Welding Technology is the wisest place to begin or advance your career in welding.
          We look forward to revealing all the possibilities and potential within you! Let's get started today.
        </p>

        <h2 className="text-2xl font-bold">Programs Offered</h2>
        <p>
          <strong>Master Pipe Welding Program:</strong> 600 hours of classroom and hands-on training with two certification tests.
          Tuition is $21,000 including tools, gear, materials, supplies, and books. 25 hours per week for 24 weeks.
        </p>
        <p>
          <strong>Structural and Alloy Welding Program:</strong> For students not studying pipe welding.
          400 hours of training with two certification tests. Tuition is $15,750, including all tools, gear, and materials.
          25 hours per week for 16 weeks.
        </p>

        <h2 className="text-2xl font-bold">Class Schedule</h2>
        <p>
          Classes run Monday through Friday:
          <br />
          1st Shift: 7:00 AM - 12:00 PM &nbsp; | &nbsp;
          2nd Shift: 12:00 PM - 5:00 PM &nbsp; | &nbsp;
          3rd Shift: 5:00 PM - 10:00 PM
        </p>

        <h2 className="text-2xl font-bold">Curriculum Outline</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>OFAC-101 - Oxy-fuel and Arc Cutting - 16 hours</li>
          <li>SMAW-101 - Shielded Metal Arc Welding (Basic) - 60 hours</li>
          <li>SMAW-201 - Shielded Metal Arc Welding (Advanced) - 70 hours</li>
          <li>GTAW-102 - Gas Tungsten Arc Welding (Basic) - 60 hours</li>
          <li>PIPE-201 - Pipe Welding - 220 hours</li>
          <li>GTAW-201 - Gas Tungsten Arc Welding (Advanced) - 60 hours</li>
          <li>GMAW-101 - Gas Metal Arc Welding - 42 hours</li>
          <li>FCAW-101 - Flux Core Arc Welding - 30 hours</li>
          <li>FLBR-101 - Fabrication Layout & Blueprint Reading - 42 hours</li>
        </ul>

        <h2 className="text-2xl font-bold">Course Descriptions & Objectives</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Oxy-fuel and Arc Cutting</h3>
            <p><strong>16 Hours</strong> — Learn setup, shutdown, and operation for oxy-fuel, carbon arc, and plasma cutting equipment.</p>
            <ul className="list-disc ml-6">
              <li>Perform safety inspections and proper cutting operations on steel, aluminum, and stainless.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Fabrication Layout & Blueprint Reading</h3>
            <p><strong>42 Hours</strong> — Layout, measurement, projection reading, and weld symbol interpretation.</p>
            <ul className="list-disc ml-6">
              <li>Perform bends, align flanges, and interpret blueprints accurately.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Shielded Metal Arc Welding (Basic & Advanced)</h3>
            <p><strong>Basic: 60 Hours</strong> | <strong>Advanced: 70 Hours</strong> — Safety, electrodes, polarities, groove welds, bend tests.</p>
            <ul className="list-disc ml-6">
              <li>Perform fillet and groove welds in all positions to AWS standards.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Gas Tungsten Arc Welding (Basic & Advanced)</h3>
            <p><strong>Basic: 60 Hours</strong> | <strong>Advanced: 60 Hours</strong> — Power sources, electrodes, groove welds, stainless and aluminum techniques.</p>
            <ul className="list-disc ml-6">
              <li>Apply proper purging and safe GTAW techniques on thin gauge metals.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Gas Metal Arc Welding</h3>
            <p><strong>42 Hours</strong> — Power sources, polarities, modes of filler metal transfer, equipment setup.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Flux Core Arc Welding</h3>
            <p><strong>30 Hours</strong> — Safety, fillet and groove welds with carbon steel plates.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Pipe Welding</h3>
            <p><strong>220 Hours</strong> — SMAW & GTAW for pipes, ASME & API standards, groove pipe welding in all positions.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Other Programs</h2>
        <p><strong>Welding for the Hobbyist:</strong> 8 hours, $285 tuition — Click here for more information.</p>

        <h2 className="text-2xl font-bold">Employment Assistance & Housing</h2>
        <p>
          Our classroom work includes training on job search, resume writing, and interviewing.
          We maintain relationships with local employers and assist students in finding employment throughout their welding career.
          We’re also happy to help students find housing within commuting distance.
        </p>
      </div>
    </Layout>
  );
}
