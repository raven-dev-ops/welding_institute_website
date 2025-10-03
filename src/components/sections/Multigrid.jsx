import React from "react";
import { Section } from ".";
import { Icon } from "lucide-react";
import Image from "next/image";

const Multigrid = ({ cells, header, backgroundImage = "" }) => {
  const highlightHeader = header.split("*");
  console.log({ highlightHeader });

  return (
    <section className="font-[Roboto_Condensed] mb-8">
      <div
        className="py-[30px] px-[40px] w-full max-w-none m-0 before:opacity-50 bg-transparent"
        style={{
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: "cover",
        }}
      >
        {/* heading */}
        <div className="w-full max-w-none flex justify-center">
          <div display="flex max-w-[960px] mx-auto w-full justify-center">
            <h3 className="w-full mt-[8px] mx-auto mb-0 h-auto py-[2px] font-[Staatliches] font-medium text-[28px]">
              {highlightHeader.map((section) => {
                const isHighlight =
                  !section.startsWith(" ") && !section.endsWith(" ");
                if (!isHighlight) return <span>{section}</span>;
                return (
                  <font>
                    <span>
                      <font className="text-[#0011a7]">{section}</font>
                    </span>
                  </font>
                );
              })}
            </h3>
          </div>
        </div>
        {/* gird */}
        <div className="grid grid-cols-3 grid-rows-2 row- max-w-[960px] m-auto h-[375px]">
          {cells.map((cell) => {
            const split = cell.caption.split("*");
            console.log({ split });
            return (
              <div className="flex flex-col justify-center items-center">
                {/* icon */}
                <div className="max-w-[100%] mx-auto">
                  <Image src={cell.icon} height={79} width={79} />
                </div>
                {/* caption */}
                <div className="whitespace-break-spaces w-[calc(100%-5px)] h-auto max-w-[171px] py-[2px] px-0 min-w-[25px] block text-center mx-auto text-[17px]">
                  {split[1]}
                  <div>{split[2].trim()}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Multigrid;
