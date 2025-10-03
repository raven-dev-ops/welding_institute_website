import React from "react";
import Typography from "./Typography";
import Icon from "./Icon";
import { ChevronDown } from "lucide-react";

const Accordion = ({ data, styles = "" }) => {
  return (
    <div class={`w-full  mx-auto flex flex-col  ${styles}`}>
      {data.map((course) => {
        console.log({ course });
        return (
          <details className="group flex justify-between mb-[10px] flex-col">
            <summary className="flex items-center justify-between cursor-pointer  list-none bg-[#f2f2f2] py-[18px] px-[20px] grow-1">
              <div className="text-[16px]">
                <Typography level="h3">{course.name}</Typography>
              </div>
              <div className="rounded-full p-[8px] bg-black mr-[8px]">
                <div className="w-[20px] h-[20px] transition-transform duration-300 ease-in-out flex flex-col cursor-pointer">
                  <ChevronDown color="#fff" />
                </div>
              </div>
            </summary>
            <div className="py-[18px] px-[20px] text-black flex flex-col gap-5 text-[14px]">
              {course.description.paragraphs.map((p) => {
                if (p.includes("[li]")) {
                  const [_, ...listItems] = p.split("[li]");

                  console.log({ listItems });

                  return (
                    <ul className="list-disc list-inside indent-[40px]">
                      {listItems.map((item) => {
                        return (
                          <li>
                            <Typography level="p">{item}</Typography>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                return <Typography level="p">{p}</Typography>;
              })}
              <br />
              <br />

              {course.description.objectives && (
                <>
                  <Typography level="p">Course Objectives:</Typography>
                  <ol className="list-decimal list-inside indent-[40px]">
                    {course.description.objectives.map((o) => {
                      return (
                        <li>
                          <Typography level="p">{o}</Typography>
                        </li>
                      );
                    })}
                  </ol>
                </>
              )}
            </div>
          </details>
        );
      })}
    </div>
  );
};

export default Accordion;
