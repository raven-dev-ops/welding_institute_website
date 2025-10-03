import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const Ratings = ({ rating, starsOnly }) => {
  const stars = Array.from({ length: Math.floor(rating) }, (_, i) => i + 1);
  return (
    <div className="mt-[25px] mb-0 mx-0 p-0 text-start w-auto max-w-full min-w-0 h-auto leading-[150%]">
      <div
        className="flex items-center min-w-[25px] justify-between  d"
        id="reviews-header"
      >
        <Link href="/reviews">
          <div
            id="rating"
            className="text-[30px] text-[#ffc834] font-bold flex items-center justify-start flex-row mr-[8px]"
          >
            <span className={`${starsOnly ? "hidden" : ""}`}>4.1</span>
            <div className="text-[30px] ml-[.2em]">
              <div id="stars" className="flex whitespace-nowrap justify-start">
                {stars.map((_, index) => {
                  return <Star key={index} fill="#ffc834" />;
                })}
              </div>
            </div>
          </div>
        </Link>

        <div className={`${starsOnly ? "hidden" : ""}`}>
          <Link href="/reviews" className="text-black text-[14px] underline ">
            (85 Ratings & Reviews)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
