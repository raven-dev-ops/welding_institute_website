import Link from 'next/link';
import Layout from '@components/Layout';

export default function Home() {
// Real student reviews
const reviews = [
  {
    quote:
      "I took welding classes from Stan Crider several years ago and he was a big part of my apprenticeship at KCPL. He has the best teaching skills; very patient and has a kind heart. Stan Crider is one of the best Journeyman Welders that we have in KC. I’m very happy for you and your family 😊 until we meet again.",
    author: "Karen E, Journeyman Blacksmith Welder / Respiratory Therapist (8/17/2023)"
  },
  {
    quote: "Hobby training was educational and informative. The staff was outstanding, thank you!",
    author: "Andres M (6/18/2023)"
  },
  {
    quote: "The instructors were really helpful, they always went over any and all things we had questions on! All the training and learning got me a union job right off the bat after graduation! Highly recommend this institution.",
    author: "Jacob M (3/27/2023)"
  },
  {
    quote: "Definitely a great school. All the instructors truly amazing there does everything to make sure you succeed. They give you the welding technique and are willing to put in the leg work.",
    author: "Angelica M (3/25/2023)"
  },
  {
    quote: "What an amazing school. I've been here for about 2 1/2 months and the instructors here are always ready to help with whatever you need. Hands on learning, excellent job opportunities and fantastic learning experiences that I haven't gotten anywhere else.",
    author: "Adriana W (3/13/2023)"
  },
  {
    quote: "My husband and I recently attended the Hobby Class. Stan is so knowledgeable and his crew is great. They explained the different techniques very well and they were there to help and guide all students in each step. Great hands on experience.",
    author: "Linda R B (10/16/2022)"
  },
  {
    quote: "Stan let me come in and brush up 2 times for a weld test for my first job after I completed the Master Welding course. Stand up guy and always welcome to help.",
    author: "Jack D (8/2/2022)"
  },
  {
    quote: "I recently graduated from Crider's five month program with a certification in 6G with a tig root. Going to this school was a great choice. I would definitely recommend Crider's to anyone who is considering learning to weld.",
    author: "Joshua M (7/15/2022)"
  },
  {
    quote: "Attended a hobby welding workshop. Stan tailored my time for what I was interested in and made sure I felt challenged all day. Highly recommend!!",
    author: "Scott B (4/20/2022)"
  },
  {
    quote: "Crider’s is a great place to either start your career, or go to the next step in your career. Crider’s doesn’t stop helping you after you graduate, Stan takes the extra step to help you find a good job.",
    author: "Dylan D (2/7/2022)"
  }
];

  return (
    <Layout pageTitle="Home - Crider’s Institute of Welding">
      {/* Meet Stan Section */}
      <section className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Stan Crider</h2>
        <p className="text-lg text-gray-700">
          Stan Crider, Owner and Lead Instructor at Crider’s Institute of Welding Technology, brings over 45 years of experience 
          in nearly every aspect of the welding industry and more than 25 years teaching in private schools and public colleges. 
          He’s an AWS Certified Welding Inspector & Educator whose career includes work as an inspector, welder tester, technician, 
          and welder in aircraft, power production, refineries, and more. With a long list of industry certifications, professional 
          training, and awards, Stan’s passion is giving students the real-world skills, personalized guidance, and confidence 
          they need for a rewarding career in welding. Today, he shares this invaluable experience with every student at Crider’s, 
          maintaining the highest standards of training, safety, and success.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Detailed Info Section */}
        <div className="text-base text-gray-700 space-y-6 mb-12">
          <h2 className="text-2xl font-bold mb-2">Enroll in Our Master Welding and Hobby Welding Programs</h2>
          <p>
            At Crider&apos;s Institute of Welding Technology, we can train you to be a top-notch certified welder,
            enabling you to have a marketable skill, a rewarding career, and the self-worth and satisfaction of knowing your training is the best in the industry.
            You can receive your certification in as little as 4 months with our 16-week course or receive advanced pipe welding certification with our 24-week course.
            We have flexible schedule options and tuition assistance available.
          </p>
          <p>
            Conveniently located in Grain Valley, MO, CIWT provides 20 percent classroom and 80 percent hands-on learning to certify our students in pipe,
            stainless steel, and aluminum welding. We never have more than a 12:1 student-to-instructor ratio.
            This allows for one-on-one training with our experienced and caring staff.
            This is just one of the many features that make Crider&apos;s Institute of Welding Technology the finest place for welder training in Kansas City, MO and the surrounding areas.
            We&apos;re committed to creating and maintaining an environment that&apos;s conducive to learning, growing, and always improving.
            At Crider&apos;s Institute of Welding Technology, we take your success seriously.
          </p>
          <p>
            Whether you&apos;re a high school graduate, a military veteran, or just looking for a new career,
            we can help you get the welding training you need.
            Becoming a certified welder with CIWT can open up job opportunities in various industries such as automotive, shipbuilding, pipeline, aircraft, and more.
            Call us today for a free quote! Welding training can open the door to a world of possibilities you never could&apos;ve imagined before.
            As the provider of welder training Columbia, MO and the surrounding areas prefer,
            Crider&apos;s Institute of Welding Technology is the wisest place to begin your next chapter.
          </p>
        </div>

        {/* Programs Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Master Welder Program */}
          <div className="border p-6 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Master Welders Program</h2>
            <p className="text-gray-700 mb-4">
              Become a master certified welder in as little as 16 weeks with our welding programs.
              Our knowledgeable, caring, and helpful instructors will give you the guidance you need
              to advance your skills and begin your career as a successful welder.
            </p>
            <Link
              href="/welding/master"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Hobby Welding Classes */}
          <div className="border p-6 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Hobby Welding Classes</h2>
            <p className="text-gray-700 mb-4">
              We also have classes for hobby welders who just want to learn welding without it being their career.
            </p>
            <Link
              href="/welding/hobby"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Fancy Google Reviews Carousel */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6 text-center">What Our Students Say</h2>
          {/* You'll need to import and configure a Slider component (e.g., react-slick) */}
          {/* <Slider {...sliderSettings}> */}
            {reviews.map((review, idx) => (
              <div key={idx} className="px-4">
                <div className="border rounded-lg p-6 shadow-md bg-white">
                  <p className="text-gray-700 mb-4 text-lg italic">“{review.quote}”</p>
                  <p className="text-sm font-semibold text-gray-600">— {review.author}</p>
                </div>
              </div>
            ))}
          {/* </Slider> */}
        </div>
      </div>
    </Layout>
  );
}
