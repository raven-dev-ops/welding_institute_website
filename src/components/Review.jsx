import React from "react";
import Ratings from "./Ratings";
import Link from "next/link";

const Review = ({ rating = 5, comment, timestamp, name = "Anonymous" }) => {
  return (
    <div className="flex font-[Roboto_Condensed] text-[17px]">
      <div className="w-full text-[#404040] mb-[1em] pb-[1.2em] border-b-[1px] border-[#eee] text-left">
        {/* name */}
        <div className="font-bold text-[#fff] text-[1.2em] mb-[.2em]">
          {name}
        </div>
        {/* stars */}
        <div>
          <Ratings rating={rating} starsOnly />
        </div>
        {/* comment */}
        <div className="text-white mt-[.2em] mx-0 mb-[.7em]">
          <p className="line-clamp-2 break-words hyphens-auto">{comment}</p>
          <Link href="/reviews" className="underline">
            read more
          </Link>
        </div>
        {/* meta */}
        <div className="text-[.9em]">
          <span className="text-[#fff]">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
