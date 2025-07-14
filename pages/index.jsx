import Slider from "react-slick";
import Link from "next/link";
import Layout from "@components/Layout";
import InfoBlock from "@components/InfoBlock";

export default function Home() {
  const reviews = [
    {
      quote:
        "I took welding classes from Stan Crider several years ago and he was a big part of my apprenticeship at KCPL. He has the best teaching skills; very patient and has a kind heart. Stan Crider is one of the best Journeyman Welders that we have in KC.",
      author: "Karen E, Journeyman Blacksmith Welder / Respiratory Therapist (8/17/2023)",
    },
    {
      quote: "Hobby training was educational and informative. The staff was outstanding, thank you!",
      author: "Andres M (6/18/2023)",
    },
    {
      quote: "The instructors were really helpful. All the training and learning got me a union job right off the bat after graduation! Highly recommend.",
      author: "Jacob M (3/27/2023)",
    },
    // Add more reviews if desired...
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    fade: false,
  };

  return (
    <Layout pageTitle="Crider’s Institute of Welding Technology">
      {/* Hero Banner */}
      <section className="hero-section bg-hero flex flex-col items-center justify-center min-h-[320px] text-white rounded-2xl mb-12 shadow-xl relative overflow-hidden">
        <div className="bg-black bg-opacity-60 rounded-2xl px-8 py-12 text-center z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome to Crider Institute of Welding Technology</h1>
          <p className="text-xl">
            Launching successful welding careers since 1990
          </p>
        </div>
      </section>

      {/* Meet Stan Section */}
      <InfoBlock
        imageSrc="/images/ciwt_photos/1-1920w.jpg"
        imageAlt="Stan Crider, Lead Welding Instructor"
        title="Meet Stan Crider"
      >
        Stan Crider, Owner and Lead Instructor at Crider’s Institute of Welding Technology,
        brings over 45 years of experience in nearly every aspect of the welding industry and
        more than 25 years teaching in private schools and public colleges. He’s an AWS Certified
        Welding Inspector & Educator whose career includes work in aircraft, power plants, and more.
        Stan’s passion is helping students build real-world skills and confidence for a rewarding career.
      </InfoBlock>

      {/* Enrollment Info */}
      <InfoBlock
        imageSrc="/images/stock_photos/RSshutterstock_116281810-1920w.jpg"
        imageAlt="Hands-on welding in class"
        title="Master & Hobby Welding Programs"
        reverse
      >
        At Crider&apos;s Institute of Welding Technology, you can become a certified welder in
        as little as 4 months with our 16-week program or gain advanced pipe welding
        certification with our 24-week option. Flexible schedules and tuition assistance available!<br /><br />
        Our training is 80% hands-on. Our 12:1 student-to-instructor
        ratio ensures personalized training with our experienced team. This is what makes CIWT
        the top choice for welding training in Kansas City and beyond.<br /><br />
        Whether you’re a recent high school grad, military veteran, or changing careers,
        our welding program opens doors to opportunities in automotive, shipbuilding,
        aircraft, and more.
      </InfoBlock>

      {/* Programs Section */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
            <img
              src="/images/ciwt_photos/3-1920w.jpg"
              alt="Master welding student in workshop"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Master Welders Program</h3>
            <p className="text-gray-700 mb-4 text-center">
              Become a master certified welder in as little as 16 weeks.
              Get the guidance you need to advance your skills and start your career.
            </p>
            <Link
              href="/welding/master"
              className="inline-block bg-[color:var(--ciwt-blue)] text-white px-4 py-2 rounded hover:bg-[color:var(--ciwt-gold)] hover:text-black transition"
            >
              Learn More
            </Link>
          </div>

          <div className="border p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
            <img
              src="/images/stock_photos/RSshutterstock_138897641-1920w.jpg"
              alt="Hobby welding class"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Hobby Welding Classes</h3>
            <p className="text-gray-700 mb-4 text-center">
              Learn welding for fun or small projects. Perfect for hobbyists — no experience needed!
            </p>
            <Link
              href="/welding/hobby"
              className="inline-block bg-[color:var(--ciwt-blue)] text-white px-4 py-2 rounded hover:bg-[color:var(--ciwt-gold)] hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto mt-20 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">What Our Students Say</h2>
          <Slider {...sliderSettings}>
            {reviews.map((review, idx) => (
              <div key={idx} className="px-4">
                <div className="border border-gray-200 rounded-lg p-8 shadow-xl bg-white">
                  <p className="text-gray-800 mb-4 text-lg italic leading-relaxed">
                    “{review.quote}”
                  </p>
                  <p className="text-sm font-semibold text-gray-600 text-right">
                    — {review.author}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
}
