import React from "react";

const Carousel = () => {
  const reviews = [
    {
      quote:
        "I took welding classes from Stan Crider several years ago and he was a big part of my apprenticeship at KCPL. He has the best teaching skills; very patient and has a kind heart. Stan Crider is one of the best Journeyman Welders that we have in KC.",
      author:
        "Karen E, Journeyman Blacksmith Welder / Respiratory Therapist (8/17/2023)",
    },
    {
      quote:
        "Hobby training was educational and informative. The staff was outstanding, thank you!",
      author: "Andres M (6/18/2023)",
    },
    {
      quote:
        "The instructors were really helpful. All the training and learning got me a union job right off the bat after graduation! Highly recommend.",
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

  return (
    <div>
      {/* Reviews Carousel */}
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          What Our Students Say
        </h2>
        <Slider {...sliderSettings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-4">
              <div className="border border-gray-200 rounded-lg p-8 shadow-xl bg-white flex flex-col justify-between h-full">
                <p className="text-gray-800 mb-4 text-lg italic leading-relaxed flex-grow">
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
    </div>
  );
};
export default Carousel;
