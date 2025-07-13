import Link from 'next/link';
import Layout from '@components/Layout';
import Slider from 'react-slick';

// Note: Make sure you import these slick styles in _app.js
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const reviews = [
    {
      quote:
        "I had an awesome experience with their Master Welding Program. Stan Crider is a great teacher and a good friend. Highly recommend CIWT to anyone who wants to weld!",
      author: "Nicholas Bishop, Google Review",
    },
    {
      quote:
        "Fantastic hands-on training and flexible schedule. Best welding school in KC!",
      author: "Jane D., Google Review",
    },
    {
      quote:
        "The instructors care about your success. I'm now working as a certified welder thanks to CIWT!",
      author: "John S., Google Review",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
  };

  return (
    <Layout pageTitle="Home - Crider’s Institute of Welding">
      {/* Meet Stan Section */}
      <section className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Stan Crider</h2>
        <p className="text-lg text-gray-700 mb-4">
          With over 45 years of welding experience and 25+ years teaching, Stan brings real-world knowledge to every
          student. He’s an AWS Certified Welding Inspector & Educator, ready to help you build the skills for a
          rewarding career.
        </p>
        <p className="text-base text-gray-600">
          Stan has worked in aircraft, power plants, refineries, and more — and now he’s ready to share his expertise
          at Crider’s Institute of Welding Technology.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-base text-gray-700 space-y-6 mb-12">
          <h2 className="text-2xl font-bold mb-2">
            Enroll in Our Master Welding and Hobby Welding Programs
          </h2>
          <p>
            At Crider&apos;s Institute of Welding Technology, we can train you to be a top-notch certified welder,
            enabling you to have a marketable skill, a rewarding career, and the self-worth and satisfaction of knowing
            your training is the best in the industry. You can receive your certification in as little as 4 months with
            our 16-week course or receive advanced pipe welding certification with our 24-week course. We have flexible
            schedule options and tuition assistance available.
          </p>
          <p>
            Conveniently located in Grain Valley, MO, CIWT provides 20 percent classroom and 80 percent hands-on
            learning to certify our students in pipe, stainless steel, and aluminum welding. We never have more than a
            12:1 student-to-instructor ratio. This allows for one-on-one training with our experienced and caring staff.
            This is just one of the many features that make Crider&apos;s Institute of Welding Technology the finest
            place for welder training in Kansas City, MO and the surrounding areas. We&apos;re committed to creating and
            maintaining an environment that&apos;s conducive to learning, growing, and always improving. At Crider&apos;s
            Institute of Welding Technology, we take your success seriously.
          </p>
          <p>
            Whether you&apos;re a high school graduate, a military veteran, or just looking for a new career, we can help
            you get the welding training you need. Becoming a certified welder with CIWT can open up job opportunities
            in various industries such as automotive, shipbuilding, pipeline, aircraft, and more. Call us today for a
            free quote! Welding training can open the door to a world of possibilities you never could&apos;ve imagined
            before. As the provider of welder training Columbia, MO and the surrounding areas prefer, Crider&apos;s
            Institute of Welding Technology is the wisest place to begin your next chapter.
          </p>
        </div>

        {/* Programs Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Master Welder Program */}
          <div className="border p-6 rounded shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Master Welders Program</h2>
            <p className="text-gray-700 mb-4">
              Become a master certified welder in as little as 16 weeks with our welding programs. Our knowledgeable,
              caring, and helpful instructors will give you the guidance you need to advance your skills and begin your
              career as a successful welder.
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
          <Slider {...sliderSettings}>
            {reviews.map((review, idx) => (
              <div key={idx} className="px-4">
                <div className="border rounded-lg p-6 shadow-md bg-white">
                  <p className="text-gray-700 mb-4 text-lg italic">“{review.quote}”</p>
                  <p className="text-sm font-semibold text-gray-600">— {review.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
}
