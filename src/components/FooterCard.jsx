import React from "react";
import { Roboto_Condensed, Staatliches } from "next/font/google";
import Link from "next/link";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const staat = Staatliches({
  subsets: ["latin"],
  weight: ["400"],
});

const FooterCard = ({ Icon, header, content, links }) => {
  return (
    <div className={`${robotoCondensed.className} pt-0 px-[6px] text-[17px]`}>
      <div className="m-auto py-[15px] px-[10px] min-w-0 text-center justify-center flex">
        <div className="flex-column max-w-[960px] justify-center items-center">
          <div className="flex mx-auto text-center justify-center">
            <Icon color="blue" />
          </div>
          <div className="mt-[10px] mx-auto flex-column">
            <h3
              className={`${staat.className} uppercase text-[18px] font-[#000] font-[400]`}
            >
              {header}
            </h3>
            <div className="flex justify-center">{content()}</div>
          </div>
          <div className="mx-auto">
            {links.map((link, idx) => (
              <div key={link.href || `link-${idx}`}>
                <Link
                  target="_blank"
                  href={link.href}
                  className="text-[#cf0407] underline"
                >
                  {link.display}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
