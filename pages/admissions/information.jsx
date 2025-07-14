import Layout from '@components/Layout';

export default function Information() {
  return (
    <Layout pageTitle="CIWT Enrollment Guide">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Admissions Information</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Admission Requirements and Costs</h2>
          <p className="text-gray-700 mb-4">
            Prospective students may call or come to Crider&apos;s Institute of Welding Technology
            at any time to take a tour of the facility and speak to the administrator and faculty.
            If you are unable to visit the school, a catalog and registration form can be sent to you by mail.
            We look forward to helping you explore your potential.
          </p>
          <p className="text-gray-700 mb-4">
            As the leading welding school in Kansas City, MO and the surrounding areas,
            Crider&apos;s Institute of Welding Technology can be the beginning of something wonderful for you.
            Come check us out and see what&apos;s possible!
          </p>
          <p className="text-gray-700 mb-4">
            The student must complete a registration form and submit it with a $250.00 tuition deposit,
            which will be applied to tuition. After receiving the registration form,
            a school official will contact the student with a start date.
            A completed and signed admission form and all fees and tuition will be required on or before the start date.
            If you have any additional questions about admission to our institution,
            please don&apos;t hesitate to contact us by phone or email.
          </p>
          <p className="text-gray-700">
            At Crider&apos;s Institute of Welding Technology, we aim to provide as much support and clarity as possible.
            We look forward to walking with you and working alongside you on your journey.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Applicant Requirements</h2>
          <p className="text-gray-700 mb-4">
            Applicants must be at least 17 years old, have a high school diploma,
            GED or other high school equivalency, or permission from the head instructor.
            Good eyesight is required, using corrective lenses if necessary.
            Previous welding experience is not required.
          </p>
          <p className="text-gray-700 mb-4">
            A 17-year-old applicant must have a parent, guardian, or guarantor co-sign the admission form.
            Applicants with handicaps must be approved by the head instructor.
            The school will do everything possible to accommodate handicapped students.
          </p>
          <p className="text-gray-700">
            Students are trained and recommended to employers without regard to race, creed, gender,
            gender identity, sexual orientation, religion, or national origin.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Requirements for Graduation</h2>
          <p className="text-gray-700 mb-4">
            To graduate, a student must have a passing grade and meet attendance requirements.
            On completion of the Master Welding Program, the student will receive a certificate of completion
            and have the opportunity to take two American Welding Society certification tests.
            The certification tests are included in the program and administered at the school.
          </p>
          <p className="text-gray-700">
            Have any questions about our program or welding school in Kansas City, MO?
            Give us a call at <strong>(816) 992-4046</strong> or fill out our online Request a Tour form today for more information.
          </p>
        </section>
      </div>
    </Layout>
  );
}
