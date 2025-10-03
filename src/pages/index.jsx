import { CTAButton, Review } from "@components";
import { Hero, Multigrid, Multirow, Section } from "@sections";
import Layout from "src/layout/Layout";
import useData from "../hooks/useData";
import Link from "next/link";

export default function Home() {
  const { staff, welding, enroll, showcase, reviews, info } = useData([
    "welding",
    "enroll",
    "showcase",
    "staff",
    "reviews",
    "info",
  ]);
  return (
    <Layout
      pageTitle="Crider’s Institute of Welding Technology"
      showVideo={false}
      styles={"pt-[300px] text-center"}
    >
      <Section header={enroll.header} paragraphs={enroll.content} />
      <Multirow
        sections={welding.rows}
        background="images/web_art/bg1-1920w.png"
      />
      <Multigrid
        cells={showcase.cells}
        header="Why *Crider's Institute of Welding Technology* is the leader in welder training
"
      ></Multigrid>
      <Multirow
        sections={staff.rows}
        sideBySide
        background="images/web_art/bg1-1920w.png"
      ></Multirow>

      <Section
        cols={4}
        styles="bg-[#10174e] flex items-start pb-[40px]"
        fullWidth
      >
        <div className="basis-1/6  shrink-0" aria-hidden></div>
        <div className="basis-2/6 shrink-0 min-w-0">
          <div className=" text-left  pt-[22px] pb-[60px] h-full px-[9px]">
            <div className=" w-[105px] h-[105px] my-0 mr-[275px] ml-[-18px] max-w-[calc(100%-18px)] p-0 min-w-[25px] text-center">
              <img
                src="/images/web_art/textbubble.svg"
                height="100%"
                width="100%"
              />
            </div>
            <h3 className="text-[50px] block w-[316px] relative h0auto max-w-full py-[2px] px-0 min-w-[25px] mt-[-16px] mx-0 mb-[8px]">
              <div className="text-[36px] text-white font-[Staatliches]">
                <span>Here's What our satisfied customers are saying...</span>
              </div>
            </h3>
          </div>
        </div>
        <div className="basis-2/6 shrink-0 min-w-0 mt-[2.7em]">
          {reviews.rows.map((review) => {
            return <Review {...review} />;
          })}
          <div classNamrr="mt-4 flex">
            <div className="w-[65%]">
              <CTAButton href="/reviews" variant="contained" size="md">
                Read More Reviews
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="basis-1/6 shrink-0" aria-hidden></div>
      </Section>
      <Hero
        bgImage="images/ciwt_photos/10-1920w.jpg"
        styles="py-[60px]"
        parallax
      >
        <div className="basis-1/3 shrink-0 flex flex-col h-[312px] w-full py-[35px] items-center">
          <div className="text-center text-white font-[Roboto_Condensed] font-medium">
            <div className="font-medium leading-[40px] mx-auto text-[24px] text-center z-2">
              <span>Learn More About</span>
            </div>
            <div className="text-[40px] font-bold leading-[40px]">
              <span>CIWT</span>
            </div>
          </div>
          <div className="mt-[30px] w-[110px] h-[110px]">
            <img
              src="https://cdn.hibuwebsites.com/ddb8d584984c41d78393946877d4c6fb/dms3rep/multi/play-icon2.svg"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </Hero>

      <Section
        cols={1}
        styles="bg-[#5ba601] flex items-center w-full max-w-none py-[40px] px-[50px] bg-fixed bg-cover before:opacity-[.48] before:bg-#000"
        fullWidth
      >
        <div className="flex flex-row m-auto max-w-[960] w-full justify-around">
          <div className="flex flex-col items-center justify-center basis-1/2 shrink-0">
            <div className="text-center h-full flex flex-col m-auto">
              <h3 className="text-center w-full mt-[40px] mx-auto mb-[8px] text-[36px] block  relative h-auto max-w-full py-[2px] px-0 min-w-[25px]">
                <div className="text-[28px] text-white font-[Staatliches]">
                  <span>Call us today for a free tour!</span>
                </div>
              </h3>
              <div className="max-w-[302px] my-[8px] mx-auto w-[calc(100%-81px)] text-[17px] text-white">
                <p className="text-center">
                  <span>Request your free tour </span>
                  <a href="/request-form" target="_blank">
                    online
                  </a>
                  <span>
                    {" "}
                    or by calling Crider's Institute of Welding Technology
                  </span>
                  <span> at </span>
                  <span className="font-bold">
                    <a href={info.tel.href}>{info.tel.display}</a>{" "}
                  </span>
                  <span>today!</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  basis-1/2 shrink-0">
            <div className="text-center h-full flex flex-col">
              <div className="flex w-full"></div>
              <Link href="/request-form">
                <div>
                  <div className="rounded-full h-[212px] text-center flex justify-center items-center w-[212px] bg-orange-400 border-2 border-white text-white font-[Staatliches]">
                    <h3 className="text-[25px]">Request A Tour </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
