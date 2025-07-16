import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Welding Courses",
    children: [
      { name: "Master", href: "/welding/master" },
      { name: "Hobby", href: "/welding/hobby" },
    ],
  },
  {
    name: "Admissions",
    children: [
      { name: "Choosing", href: "/admissions/choosing" },
      { name: "Information", href: "/admissions/information" },
      { name: "Policies", href: "/admissions/policies" },
    ],
  },
  {
    name: "Payment",
    children: [
      { name: "Financing", href: "/payment/financing" },
      { name: "Online Deposits", href: "/payment/deposits" },
    ],
  },
  { name: "Request a Tour", href: "/request-tour/tour-form" },
  { name: "Reviews", href: "/reviews/reviews" },
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
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="bg-white shadow z-50">
      {/* Top Info Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-1 border-b">
        <div className="flex items-center gap-3 text-sm text-black">
          <span className="font-bold text-yellow-500 text-lg">4.1</span>
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <Link href="/reviews" className="text-blue-700 underline ml-2">(85 Ratings & Reviews)</Link>
        </div>
        <div>
          <Link href="/">
            <Image src="/images/ciwt_logo/logo-b9339ab0-1920w.png" alt="CIWT Logo" width={110} height={80} priority />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/request-tour/tour-form">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold text-xs shadow">Request a Tour</button>
          </Link>
          <span className="flex items-center text-black font-semibold text-sm">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44A2 2 0 009 18h9a2 2 0 002-2v-7a2 2 0 00-2-2h-8l-2-4H3" />
            </svg>
            (816) 992-4046
          </span>
        </div>
      </div>
      {/* Main Nav */}
      <nav className="bg-white font-extrabold uppercase text-[15px] tracking-wide shadow-sm">
        <ul className="flex flex-wrap justify-center gap-8 py-3">
          {navLinks.map((link, idx) => (
            <li key={link.name} className="relative group">
              {link.children ? (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-black hover:text-blue-700"
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  >
                    {link.name}
                    <svg className="w-4 h-4 ml-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <ul
                    className={`
                      absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-white shadow-2xl rounded-2xl
                      z-30 py-1 px-2
                      ${openDropdown === idx ? "opacity-100 visible pointer-events-auto translate-y-0" : "opacity-0 invisible pointer-events-none -translate-y-2"}
                      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0
                      transition-all duration-200
                    `}
                  >
                    {link.children.map((child) => (
                      <li key={child.name} className="px-4 py-2 text-base text-black hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap rounded transition-colors">
                        <Link href={child.href}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={link.href} className="text-black hover:text-blue-700 transition-colors">{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
