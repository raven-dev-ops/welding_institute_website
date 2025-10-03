import Navbar from "./Navbar";
import Link from "next/link";
import { Icon, Logo, Ratings, CTAButton } from "@components";

export default function Header() {
  return (
    <div className="fixed z-[101] min-w-[768px] w-full">
      <div
        id="header-wrapper"
        className="shadow-[#afaeae40_0px_3px_11px_0px] z-1 h-auto bg-white"
      >
        <div
          id="header-content"
          className="pt-[20px] pb-[2px] w-full max-w-none py-[5px] px-[40px] font-[Roboto_Condensed]"
        >
          <div className="w-full flex max-w-[960px] relative my-0 mx-auto">
            {/* Ratings */}
            <div className="flex-1 w-[33%]">
              <Ratings rating={4.1} />
              <div className=" text-[17px] font-['Roboto Condensed'] transition-opacity duration-1000 transition-normal ease-in-out delay-0 w-full h-auto max-w-full mt-[18px] mx-auto mb-[8px] py-[2px] px-0 min-w-[25px]">
                Serving Kansas City, MO and Kansas City, KS
              </div>
            </div>
            {/* Logo */}
            <div className="flex-1 m-auto flex justify-center items-center text-[17px] w-[33%] py-0 px-[7.2px]">
              <Logo />
            </div>
            {/* CTAs */}
            <div
              class="flex-1 w-[33%] flex-col justify-center items-end flex"
              id="column-3"
            >
              {/* CTA Button */}
              <div id="button-wrapper" className="flex justify-end w-full">
                <div classMame="mt-6" id="button">
                  <CTAButton
                    href="/request-tour/tour-form"
                    variant="contained"
                    size="lg"
                  >
                    Request a Tour
                  </CTAButton>
                </div>
              </div>
              <div className="flex w-full items-center">
                <div className="flex-2 flex justify-end items-center">
                  <Icon icon="phone" color="#cf0407" />
                </div>
                <div className="w-[33%] flex-1" id="phone-number">
                  <CTAButton
                    variant="text"
                    href="tel:"
                    color="black"
                    size="sm"
                    noPadding
                    align="left"
                  >
                    (816) 992-4046
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
          {/* <div
              className="pt-0 pl-0 relative flex-1 w-[33%] flex-col align-top"
              id="column"
            >
              <div className="pt-0 mt-[23px] w-auto min-w-0 leading-[150%] relative top-0 left-0 flex-col">
                <div
                  className="flex flex-col max-w-[960px] relative my-0 mx-auto w-fulltext-start before:content-[''] before:display-table after:clear-both after:content-[' '] after:display-table"
                  id="button-wrapper"
                >
                  <div id="button-container" className="pt-0 align-top">
                    <CTAButton
                      href="/request-tour/tour-form"
                      variant="contained"
                      size="lg"
                    >
                      Request a Tour
                    </CTAButton>
                  </div>
                  <div
                    id="phone-number"
                    className=" w-auto min-w-0 mt-[-6px] my-0 mb-0 max-w-full"
                  >
                    <div className="flex max-w-[960px] relative w-full my-0 mx-auto">
                      <div className="pt-0 pr-0 flex-2 w-[66%]">
                        <Icon icon="phone" color="#cf0407" />
                      </div>
                    </div>
                    <div className="pt-0 pr-0 flex-1 w-[33%]">
                      <div className="w-[118px] h-auto mt-[-8px] mr-0 mb-0 ml-auto text-start block max-w-full">
                        <Link
                          href="tel:8169924046"
                          className="w-[160px] h-[30px] border-0 text-left my-[10px] mx-auto clear-both cursor-pointer "
                        ></Link>
                      </div>
                      (816) 992-4046
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
      <Navbar />
    </div>
  );
}
