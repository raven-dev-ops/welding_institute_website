import { CTAButton } from "@components";
import React from "react";

const Mulitrow = ({ sections, background, sideBySide }) => {
  return (
    <div>
      {sections.map(({ imageUrl, content, header, links }, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={header}
            className={`font-[Roboto_Condensed] flex w-full items-stretch ${
              isEven ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              className={`${
                sideBySide ? "basis-1/2" : "basis-[58%]"
              } shrink-0 grow-0 bg-top bg-cover bg-no-repeat`}
              style={{
                backgroundImage: `url("${imageUrl}")`,
              }}
            ></div>
            <div
              className={`${
                sideBySide ? "basis-1/2" : "basis-[42%]"
              } shrink-0 grow-0 bg-center bg-cover bg-no-repeat opacity-100 py-[60px] px-[40px] inset-shadow-[0_12px_11px_-9px_rgba(0,0,0,.25)]`}
              style={{
                backgroundImage: `url("${background}")`,
              }}
            >
              <h2 className="text-[28px] text-black font-[Staatliches] w-full mx-auto mt-0 py-[2px] visible px-0 min-w-[25px] text-left font-medium leading-[150%] mb-[8px]">
                {header}
              </h2>
              <div className="transition-opacity gap-4 flex flex-col duration-1000 ease-in-out max-w-[90%] text-[17px] w-full font-[500] my-[8px] me-[2.25px] mr-0 p-0 text-lg text-gray-700">
                {content.map((text) => {
                  const splitText = text.split("*");
                  console.log({ splitText });
                  return splitText.length === 1 ? (
                    <p>{splitText[0]}</p>
                  ) : (
                    <span className="text-left">
                      <b className="text-black font-bold">{splitText[1]}</b>
                      <p>{splitText[2]}</p>
                    </span>
                  );
                })}
              </div>
              <div className="w-[240px] block h-[42px] text-center mt-[20px] mr-auto mb-[10px] ml-0">
                {links.map((link, i) => {
                  return (
                    <CTAButton
                      key={`${link.href}-${i}`}
                      href={link.href}
                      size="md"
                      variant="contained"
                    >
                      {link.display}
                    </CTAButton>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mulitrow;
