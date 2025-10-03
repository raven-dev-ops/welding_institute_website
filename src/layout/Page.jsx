import React from "react";
import { Typography, Accordion, CTAButton } from "@components";

const Page = ({
  sections = [],
  withCallout,
  review = {
    comment: "",
    author: "John Doe",
  },
}) => {
  return (
    <div className="px-[40px] py-[30px]">
      <div className="flex flex-row max-w-[960px] w-full m-auto items-start">
        {/* Content */}
        <div className={`${withCallout ? "basis-2/3" : "w-full"}`}>
          {/* Dynamic sections */}
          {sections.map((section) => {
            return (
              <div className="max-w-full mx-auto flex flex-col gap-5">
                <div>
                  <Typography level="h2">{section.header}</Typography>
                  <div
                    className={`py-[2px] ${
                      withCallout ? "max-w-[586px]" : "max-w-full"
                    } my-[8px] leading-[1.5] flex flex-col gap-[30px] `}
                  >
                    {section.p.map((paragraph) => {
                      if (paragraph.type === "accordion") {
                        return (
                          <div
                            className={`${
                              withCallout ? "max-w-[586px]" : "max-w-full"
                            } py-[2px] max-w-[586px] my-[8px] leading-[1.5] flex flex-col gap-[30px] `}
                          >
                            <Accordion data={paragraph.content} />
                          </div>
                        );
                      }
                      if (paragraph.type === "list") {
                        return (
                          <ul className="list-disc list-inside pl-[30px] indent-6.5">
                            {courses.map((course) => {
                              return (
                                <li>
                                  <Typography level="p">
                                    {course.name}
                                  </Typography>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }
                      return (
                        <Typography level="p">{paragraph.text}</Typography>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Callout - always stays the sam */}
        {withCallout ? (
          <div className="basis-1/3 pl-[1.5%]">
            <div className="h-[250px] mt-[8px] text-start">
              <div className="bg-[rgba(16,23,78,1)] border-solid pt-[20px] pb-[10px] ">
                <center>
                  <div className="w-[239px] h-[80px]">
                    <img
                      src="/images/web_art/map-pin.svg"
                      height="80px"
                      width="80px"
                    />
                  </div>
                  <div className="text-[36px] font-[Staatliches] leading-[28px] mt-[10px] my-[1em] text-[#fff]">
                    Free tours
                  </div>
                  <Typography level="p">
                    <span className="text-white my-[1em]">
                      Call us today for more information
                    </span>
                  </Typography>
                  <div className="my-[1em]">
                    <CTAButton href="tel:8169924046" size="md" variant="text">
                      <div>(816) 992-4046</div>
                    </CTAButton>
                  </div>
                </center>
              </div>
              <div className="bg-cta pt-[20px] pb-[10px] px-[20px]">
                <center>
                  <div className="w-[80px] h-[55px]">
                    <img
                      src="/images/web_art/message.svg"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="mt-[25px] text-[16px] italic text-white my-[1em]">
                    {review.comment}
                  </div>
                  <div className="text-[14px] italic text-white my-[1em]">
                    - {review.author}
                  </div>
                </center>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Page;
