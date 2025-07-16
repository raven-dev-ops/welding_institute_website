import Layout from '@components/Layout';

export default function Policies() {
  return (
    <Layout pageTitle="CIWT Policies & Code of Conduct">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At Crider&apos;s Institute of Welding Technology, we&apos;ve been training welders for successful careers since 2015.
          Call us today to schedule a free tour of our facilities — and ask about our payment options and flexible scheduling!
        </p>

        {/* Policies */}
        <div className="space-y-8">
          {/* Dress Code */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Dress Code</h2>
            <p className="text-gray-700">
              Students are required to dress appropriately for the welding profession.
              No tennis or open-toed shoes are allowed. 100% cotton long pants (preferably jeans),
              long sleeve heavy 100% cotton shirts, and leather boots are required. No polyester clothing.
              Safety glasses must be worn in the lab at all times.
            </p>
            <p className="text-gray-700 mt-2">
              Failure to adhere will result in dismissal from class until corrected.
              Missed work due to non-compliance cannot be made up.
            </p>
          </section>

          {/* Grading */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Grading</h2>
            <p className="text-gray-700 mb-2">
              Grades are based on 80% hands-on performance and 20% written tests.
              Scale:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>90-100%: A</li>
              <li>80-89%: B</li>
              <li>70-79%: C</li>
              <li>60-69%: D</li>
              <li>59% and below: F</li>
              <li>Welding Work: Pass / Fail</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Students with grades below 70% will be placed on probation for 30 days.
              Continued poor performance may impact certification and job placement.
            </p>
          </section>

          {/* Attendance Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Attendance Policy</h2>
            <p className="text-gray-700">
              Attendance is mandatory in both classroom and lab work. An 80% attendance rate is required.
              Falling below will place students on probation for 30 days. Continued issues may result in dismissal.
              Four tardies equal one absence.
            </p>
          </section>

          {/* Leave of Absence */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Leave of Absence</h2>
            <p className="text-gray-700">
              One leave of absence up to 180 days is allowed. Arrangements must be made with the administrator.
              Failure to return on time results in dismissal without refund.
            </p>
          </section>

          {/* Facility */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Facility</h2>
            <p className="text-gray-700">
              Our 6,000 sq. ft. facility includes a welding lab with 12 booths, classroom, offices, and break room.
              Equipment includes Arc Welders, GMAW/FCAW machines, cutting torches, pipe beveling machines, plasma cutter, ironworker, and more.
            </p>
          </section>

          {/* Student Conduct */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Student Conduct Policy</h2>
            <p className="text-gray-700">
              Respect for others is required at all times. Harassment, possession or use of illicit drugs or alcohol is strictly prohibited.
              Drug tests may be administered. Lab rules must be followed — violations may result in dismissal.
            </p>
          </section>

          {/* Grievance Procedure */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Grievance Procedure</h2>
            <p className="text-gray-700 mb-2">
              Students can submit grievances in writing to their instructor. Unresolved issues may be appealed to the owner
              or to the Missouri Department of Higher Education.
            </p>
          </section>

          {/* Withdrawal Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Withdrawal Policy</h2>
            <p className="text-gray-700 mb-2">
              Students may cancel within three days of signing. Refunds decrease weekly up to 10 weeks.
              After the tenth week, no refund is issued. No refunds for used books or tools.
              Hobby course students may cancel within three days for a full refund.
            </p>
          </section>

          {/* Transcript Issuance */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Transcript Issuance</h2>
            <p className="text-gray-700">
              One official transcript is free upon written request. Additional copies are $10 each.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
