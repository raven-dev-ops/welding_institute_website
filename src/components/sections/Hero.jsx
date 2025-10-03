import React from "react";
import CTAButton from "../CTAButton";

const Hero = ({
  header,
  children,
  subtitle,
  cta = { display: "", href: "#" },
  bgImage,
  parallax,
  styles,
}) => {
  return (
    <section>
      <div
        className={`${
          parallax ? "bg-fixed" : ""
        } flex justify-center relative bg-center bg-no-repeat bg-cover  pb-[40px] px-[10px] float-none top-0 left-0 w-auto h-auto max-w-full text-center text-white before:opacity-50 before:bg-black before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[' ']  after:clear-both ${styles}`}
        style={{
          backgroundImage: `url(${
            bgImage || "/images/ciwt_photos/2-1920w.jpg"
          })`,
        }}
      >
        <div className="flex max-w-[960px] relative my-0 mx-auto w-full ">
          <div className="p-0 m-0 bg-transparent flex-col w-full justify-center flex">
            <div className="transition-opacity duration-1000 ease-in-out text-center max-w-[750px] w-full mx-auto">
              {header && (
                <h1 className="text-[50px] font-[staatliches] uppercase text-center">
                  <span className="text-[50px]">{header}</span>
                </h1>
              )}
            </div>
            {subtitle && (
              <h3 className="mt-[12px]  font-[Roboto_Condensed] font-medium block mb-[8px] leading-[150%] transition-opacity duration-1000 ease-in-out py-[2px] max-w-full min-w-[25px] text-center mx-auto  text-[20px]">
                {subtitle}
              </h3>
            )}
            {cta.display && (
              <div className="pt-0 w-[100%] font-[Roboto_Condensed] text-center flex justify-center">
                <CTAButton variant="text" size="xl" href={cta.href}>
                  {cta.display}
                </CTAButton>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
