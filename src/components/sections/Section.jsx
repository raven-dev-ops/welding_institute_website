import React from "react";

const Section = ({
  header,
  children,
  backgroundImage,
  paragraphs,
  cols = 1,
  styles,
  fullWidth,
}) => {
  const width = `${100 / cols}%`;

  const fullWidthStyles = fullWidth
    ? `w-full mx-0`
    : ` max-w-[940px] my-[8px] mx-auto`;
  return (
    <section className={`font-[Roboto_Condensed] ${styles}`}>
      <div
        className={`${
          fullWidth ? "px-0" : "px-[40px] py-[30px]"
        } w-full max-w-none m-0 before:opacity-50 bg-transparent`}
        style={{
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundImage,
          backgroundSize: "cover",
        }}
      >
        {header && (
          <h2 className="block my-[8px] mx-auto py-[2px] text-center font-[Staatliches] font-medium text-[28px]">
            {header}
          </h2>
        )}
        <div
          id="section-content"
          className={`flex gap-1 text-center ${fullWidthStyles} py-[2px] px-0 min-w-[25px] min-h-auto text-[17px] font-[Roboto_Condensed]`}
        >
          <div
            className={`${
              fullWidth ? "w-full " : "max-w-[960px] gap-[25px]"
            } flex ${cols > 1 ? "flex-row" : "flex-col"}`}
          >
            {paragraphs
              ? paragraphs.map((p) => {
                  return (
                    <p className={`text-center w-[${width}] flex-1`}>{p}</p>
                  );
                })
              : children}
          </div>
        </div>
        <div id="spacer" className="mt-[10px]"></div>
      </div>
    </section>
  );
};

export default Section;
