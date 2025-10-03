import Layout from "@layout/Layout";
import Page from "@layout/Page";

export default function Financing() {
  const sections = [
    {
      header: "Convenient Payment Options for Your Welding Courses",
      p: [
        {
          type: "text",
          text: "Cost shouldn't keep you from training for a lucrative career. That's why Crider's Institute of Welding Technology provides you with various payment options to help you afford our welding programs. Call us today for more information on our available payment options and take the first step toward your new career.",
        },
      ],
    },
    {
      header: "Our Payment Options Include",
      p: [
        {
          type: "text",
          text: "SkillUp - This is offered throughout the state of Missouri and is focused on helping students on government assistance programs complete their job training.",
        },
        {
          type: "text",
          text: "Veterans Administration - Military service members can receive assistance through the VA's Education and Career Counseling program. Veterans and dependents can get personalized counseling and support in career training, learn to more effectively use their benefits, and achieve their goals.",
        },
        {
          type: "text",
          text: "Vocational Rehabilitation - This is a state-run program focused on guidance and counseling regarding job seeking, job placement, and vocational training for people with disabilities.",
        },
        {
          type: "text",
          text: "GI Bill - This program can help pay for some or all job training costs for military veterans.",
        },
      ],
    },
  ];

  return (
    <Layout
      pageTitle="CIWT Financing Assistance Programs"
      header="Our Payment and Financing Options"
      bgImage="/images/ciwt_photos/9-2880w.jpg"
    >
      <Page
        sections={sections}
        review={{
          comment:
            "I had an awesome experience with their Master Welding Program. Stan Crider is a great teacher and a good friend. I highly recommend CIWT to anyone who wants to weld. 500 hours of hands-on training (lots of one-on-one) and tests for three welding certifications!",
          author: "Nicholas Bishop | Google Review",
        }}
      ></Page>
    </Layout>
  );
}
