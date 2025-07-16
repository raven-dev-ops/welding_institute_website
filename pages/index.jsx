import Layout from "@components/Layout";
import InfoBlock from "@components/InfoBlock";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

// Example reviews
const reviews = [
  {
    quote:
      "I took welding classes from Stan Crider several years ago and he was a big part of my apprenticeship at KCPL. He has the best teaching skills; very patient and has a kind heart. Stan Crider is one of the best Journeyman Welders that we have in KC.",
    author:
      "Karen E, Journeyman Blacksmith Welder / Respiratory Therapist (8/17/2023)",
  },
  {
    quote: "Hobby training was educational and informative. The staff was outstanding, thank you!",
    author: "Andres M (6/18/2023)", // No apostrophe here
  },
  {
    quote: "The instructors were really helpful. All the training and learning got me a union job right off the bat after graduation! Highly recommend.",
    author: "Jacob M (3/27/2023)",
  },
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

export default function Home() {
  return (
    <Layout pageTitle="Crider’s Institute of Welding Technology">
      {/* Hero Banner */} {/* No apostrophe here */}
      <section
        className="flex flex-col items-center justify-center min-h-[450px] text-white rounded-2xl mb-12 shadow-xl relative overflow-hidden"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: "linear-gradient(120deg, var(--ciwt-blue) 80%, var(--ciwt-gold) 100%)",
        }}
      >
        <Image
          src="/images/ciwt_photos/1-1920w.jpg"
          alt="Welding workshop"
          fill
          className="object-cover absolute inset-0 z-0"
        />
        <div className="bg-black bg-opacity-60 rounded-2xl px-4 md:px-24 py-12 text-center z-10 relative max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">
            Welder Training in Kansas City, MO and the Surrounding Areas
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white font-bold">
            Locally Owned Since 2015 | Free Tours | Competitive Class Rate
          </p>
        </div>
      </section>

      {/* Info Blocks Zig-Zag */}
      <div className="max-w-5xl mx-auto px-4">
        <InfoBlock
          imageSrc="/images/ciwt_photos/2-1920w.jpg" // No apostrophe here
          imageAlt="Stan Crider, Lead Welding Instructor" // No apostrophe here
          title="Meet Stan Crider" // No apostrophe here
        >
          <div className="prose prose-neutral max-w-none"> {/* No apostrophe here */}
            <p>
              Stan Crider, Owner and Lead Instructor at Crider’s Institute of Welding Technology, brings over 45 years of experience in nearly every aspect of the welding industry and more than 25 years teaching in private schools and public colleges.
            </p>
            <p>
              He’s an AWS Certified Welding Inspector & Educator whose career includes work in aircraft, power plants, and more. Stan’s passion is helping students build real-world skills and confidence for a rewarding career.
            </p>
          </div>
        </InfoBlock>

        <InfoBlock
          imageSrc="/images/ciwt_photos/3-1920w.jpg"
          imageAlt="Hands-on welding in class" // No apostrophe here
          title="Master & Hobby Welding Programs"
          reverse
        >
          <div className="prose prose-neutral max-w-none">
            <p> {/* No apostrophe here */}
              At Crider's Institute of Welding Technology, you can become a certified welder in as little as 4 months with our 16-week program or gain advanced pipe welding certification with our 24-week option. Flexible schedules and tuition assistance available!
            </p>
            <p>
              Our training is 80% hands-on. Our 12:1 student-to-instructor ratio ensures personalized training with our experienced team. This is what makes CIWT the top choice for welding training in Kansas City and beyond.
            </p>
            <p>
              Whether you’re a recent high school grad, military veteran, or changing careers, our welding program opens doors to opportunities in automotive, shipbuilding, aircraft, and more.
            </p>
          </div>
        </InfoBlock>

        {/* Two Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 pb-20">
          {/* Card 1 */}
          <div className="p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
            <Image
              src="/images/ciwt_photos/3-1920w.jpg" // No apostrophe here
              alt="Master welding student in workshop" // No apostrophe here
              width={600} // No apostrophe here
              height={400} // No apostrophe here
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
              Master Welders Program
            </h3>
            <p className="text-gray-800 mb-4 text-center text-lg leading-relaxed">
              Become a master certified welder in as little as 16 weeks.
              Get the guidance you need to advance your skills and start your career.
            </p>
            <Link
              href="/welding/master"
              className="inline-block bg-primary text-white font-semibold rounded-md px-4 py-2 hover:bg-secondary transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-lg shadow-md bg-white flex flex-col items-center">
            <Image
              src="/images/stock_photos/RSshutterstock_138897641-1920w.jpg" // No apostrophe here
              alt="Hobby welding class" // No apostrophe here
              width={600} // No apostrophe here
              height={400} // No apostrophe here
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
              Hobby Welding Classes
            </h3>
            <p className="text-gray-800 mb-4 text-center text-lg leading-relaxed">
              Learn welding for fun or small projects. Perfect for hobbyists — no experience needed!
            </p>
            <Link
              href="/welding/hobby"
              className="inline-block bg-primary text-white font-semibold rounded-md px-4 py-2 hover:bg-secondary transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          What Our Students Say
        </h2>
        <Slider {...sliderSettings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-4">
              <div className="border border-gray-200 rounded-lg p-8 shadow-xl bg-white flex flex-col justify-between h-full">
                <p className="text-gray-800 mb-4 text-lg italic leading-relaxed flex-grow"> {/* No apostrophe here */}
                  &quot;{review.quote}&quot;
                </p>
                <p className="text-sm font-semibold text-gray-600 text-right mt-auto">
                  — {review.author}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
}
