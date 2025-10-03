"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Welding Courses",
    children: [
      { name: "Master Welding Programs", href: "/welding/master" },
      { name: "Hobby Welding", href: "/welding/hobby" },
    ],
  },
  {
    name: "Admissions",
    children: [
      { name: "How to Choose a Welding School", href: "/admissions/choosing" },
      { name: "Admissions Information", href: "/admissions/information" },
      { name: "Policies and Conduct", href: "/admissions/policies" },
    ],
  },
  {
    name: "Payment",
    children: [
      { name: "Payment and Financing Options", href: "/payment/financing" },
      { name: "Online Deposits", href: "/payment/deposits" },
    ],
  },
  { name: "Request a Tour", href: "/request-tour/tour-form" },
  { name: "Reviews", href: "/reviews/reviews", highlight: true },
  {
    name: "About",
    children: [
      { name: "Blog", href: "/about/blog" },
      { name: "FAQ", href: "/about/faq" },
    ],
  },
  { name: "Contact", href: "/contact-us/contact" },
];

export default function Navbar() {
  return (
    <div className="pt-[4px] pb-[2px] px-[40px] bg-white w-full max-w-none">
      <div
        id="nav-list-wrapper"
        className="flex max-w-[960px] m-auto w-full text-[17px]"
      >
        <div className="w-full">
          <nav className="min-w-[9em] w-full justify-center items-stretch py-[6.5px] mx-0 flex leading-[150%]">
            <ul
              className="flex justify-center flex-wrap list-inside p-0 m-0"
              role="menubar"
            >
              {navLinks.map((link, i) => {
                return (
                  <li
                    key={link.name}
                    className="flex text-[17px] justify-start relative  list-inside list-none font-medium font-[Staatliches]"
                    role="menuitem"
                  >
                    {link.children ? (
                      <div id="dropdown" className="relative group">
                        <Link
                          className={`text-black px-[12px] flex items-center hover:text-[#0011a7] cursor-pointer ${
                            link.highlight ? "text-[#0011a7]" : "text-black"
                          }`}
                          href={link.href || ""}
                        >
                          <span>{link.name}</span>
                          <span className="pl-[10px]">
                            <div className="group-hover:rotate-180 transition-all duration-300 ease-out">
                              <ChevronDown size={16} />
                            </div>
                          </span>
                        </Link>
                        <div className="absolute opacity-0 z-100 translate-y-[-10px] group-hover:block group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out ">
                          <ul className="flex flex-col justify-start absolute left-[30px] top-[100%]  bg-white  list-inside divide-y-1 divide-[#333] ">
                            {link.children.map((item) => (
                              <li className="flex flex-col relative w-[100%]">
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="py-[15px] pl-[15px] pr-[30px] flex justify-start items-center cursor-pointer min-w-[25px] w-[100%]"
                                >
                                  <span className="tracking-[.03em] whitespace-nowrap">
                                    {item.name}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link
                        className="text-black px-[12px] cursor-pointer hover:text-[#0011a7]"
                        href={link.href || ""}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
