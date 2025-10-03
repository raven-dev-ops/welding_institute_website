import Layout from "@layout/Layout";
import Page from "@layout/Page";

export default function Information() {
  const sections = [
    {
      header: "Admission Requirements and Costs",
      p: [
        {
          type: "text",
          text: "Prospective students may call or come to Crider's Institute of Welding Technology at any time to take a tour of the facility and speak to the administrator and faculty. If you are unable to visit the school, a catalog and registration form will be sent to you in the mail. We look forward to helping you explore your potential. As the leading welding school in Kansas City, MO and the surrounding areas, Crider's Institute of Welding Technology can be the beginning of something wonderful for you. Come check us out and see what's possible!",
        },
        {
          type: "text",
          text: "The student must complete a registration form and submit it with a $250.00 tuition deposit which will be applied to tuition. After receiving the registration form, a school official will contact the student with a start date. A completed and signed admission form and all fees and tuition will be required on or before the start date. If you have any additional questions about admission to our institution, please don't hesitate to contact us by phone or email. At Crider's Institute of Welding Technology, we aim to provide as much support and clarity as possible. We look forward to walking with you and working alongside you on your journey.",
        },
        {
          type: "text",
          text: "Applicants must be at least 17 years of age, have a high school diploma, GED or other high school equivalency or permission of the head instructor, and have good eyesight, using corrective lenses if necessary. Previous welding training or experience is not required. A 17-year-old applicant must have a parent, guardian, or guarantor co-sign the admission form. Applicants with handicaps must be approved by the head instructor. The school will do everything possible to accommodate the handicapped student. Students are trained and recommended to employers without regard to race, creed, gender, gender identity, sexual orientation, religion, or national origin.",
        },
      ],
    },
    {
      header: "Requirements for Graduation",
      p: [
        {
          type: "text",
          text: "To graduate, a student must have a passing grade and meet attendance requirements. On completion of the Master Welding Program the student will receive a certificate of completion and have the opportunity to take two American Welding Society certification tests. The certification tests are included in the program and administered at the school.",
        },
        {
          type: "text",
          text: "Have any questions about our program or welding school in Kansas City, MO? Give us a call at (816) 992-4046 or fill out our online Request a Tour form today for more information.",
        },
      ],
    },
  ];
  const review = {
    comment:
      "I was at a crossroads in my life and career, and I decided to do something I used to really enjoy when I was younger (now I'm 47), which is weld. I did some research and picked Crider Institute in Grain Valley. It's been an eye opening experience, way more detailed and in-depth than I imagined, and way more rewarding. I've had several job interviews and I'm going to pick the right job for me. Thank you Stan.",
    author: "Eric Reven | Google Reviews",
  };
  return (
    <Layout
      pageTitle="CIWT Enrollment Guide"
      header="Admissions Information for Welding School in Kansas City, MO"
      bgImage="/images/ciwt_photos/4-2880w.jpg"
    >
      <Page sections={sections} review={review}></Page>
    </Layout>
  );
}
