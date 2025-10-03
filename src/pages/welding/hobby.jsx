import Layout from "@layout/Layout";
import Page from "@layout/Page";

export default function Hobby() {
  const hobbySections = [
    {
      header: "Find Your New Vocation With Us",
      p: [
        {
          type: "text",
          text: "If you're looking for a welding school in Columbia, MO or any of the surrounding areas, look no further than Crider's Institute of Welding Technology. We are the most reputable and distinguished welding school in Springfield, MO and throughout the region. When you visit us or enroll in a course, you'll quickly learn why that's the case. Our goal is to train students to be certified welders which will enable them to have a marketable skill, a rewarding career and the self-worth and satisfaction of knowing the training is the best and the most up-to-date possible.",
        },
      ],
    },
    {
      header: "Personalized Attention and Unbeatable Experience",
      p: [
        {
          type: "text",
          text: "CIWT is conveniently located in Grain Valley, Missouri, just 15 minutes east of Kansas City. Here, students will advance at their own pace with the potential of becoming certified in pipe, stainless and aluminum welding. With 20% classroom and 80% hands-on learning skills from our highly qualified instructors, certification is possible in as little as five months.",
        },
        {
          type: "text",
          text: "Don't get lost in the crowd of one of the huge training centers. Bigger is not necessarily better. At CIWT, we will never have more than a 12:1 student-to-instructor ratio. This allows for plenty of one on one training with our experienced, caring staff who are passionate about helping you achieve all your personal, professional, and educational goals.",
        },
        {
          type: "text",
          text: "With the skills and knowledge gained at CIWT, job opportunities are possible all over the country and the world in a variety of industries; automotive, shipbuilding, pipeline, aircraft and many, many more. Our students are diverse and have one goal in common: to be more, to be better, and to be successful.",
        },
      ],
    },
    {
      header: "We Teach All Students Regardless of Experience Level",
      p: [
        {
          type: "text",
          text: "Enrollees may be recently graduated from high school, returning from the military, wanting to upgrade their earning potential or looking for a new career. I know you will be able to fit right in here at CIWT. You have already started the process by looking at our information. When you put forth the effort to learn, we can make sure you reach your full potential. As the premier welding school in Springfield, MO and the nearby areas, Crider's Institute of Welding Technology is the absolute finest place to begin building your career. Come unlock your potential with our esteemed instructors and outstanding curriculum.",
        },
        {
          type: "text",
          text: "A bright future awaits from Crider's Institute of Welding Technology.",
        },
      ],
    },
  ];

  const review = {
    comment:
      "As a recent graduate of CIWT, I am absolutely pleased with my experience. The instructors were knowledgeable, caring, and very helpful. They provided us with the best equipment and tools, along with the resources we needed after graduation to start up our career. I would highly recommend Crider’s to anyone interested in the welding industry.",
    author: "Joshua Stockman | Google Review",
  };

  return (
    <Layout
      pageTitle="CIWT Hobby Welding Courses"
      header="Hobby Welding Classes in Kansas CIty, MO"
      bgImage="/images/ciwt_photos/3-1920w.jpg"
      styles="bg-center"
    >
      <Page sections={hobbySections} review={review}></Page>
    </Layout>
  );
}
