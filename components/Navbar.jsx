import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);

  // Only show dropdowns on hover for desktop, click for mobile
  const handleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <header className="w-full shadow">
      {/* Top bar */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-2 border-b">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-bold text-yellow-500 text-lg">4.1</span>
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <Link href="/reviews" className="text-blue-700 underline ml-2">
            (85 Ratings & Reviews)
          </Link>
          <span className="hidden md:inline text-gray-700 ml-4">
            Serving Kansas City, MO and Kansas City, KS
          </span>
        </div>
        <div className="my-2 md:my-0">
          <Link href="/">
            <Image
              src="/images/ciwt_logo/logo-b9339ab0-1920w.png"
              alt="CIWT Logo"
              width={110}
              height={80}
              className="mx-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <Link href="/request-tour/tour-form">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold shadow text-sm">
              Request a Tour
            </button>
          </Link>
          <span className="flex items-center text-red-600 font-bold">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44A2 2 0 009 18h9a2 2 0 002-2v-7a2 2 0 00-2-2h-8l-2-4H3" />
            </svg>
            (816) 992-4046
          </span>
        </div>
      </div>
      {/* Main Nav */}
      <nav className="bg-white font-bold uppercase text-[15px] shadow-sm">
        <ul className="flex flex-wrap justify-center gap-6 py-3">
          {navLinks.map((link, idx) => {
            const isActive =
              router.pathname === link.href ||
              (link.href !== "/" && router.pathname.startsWith(link.href));
            const hasDropdown = link.children && link.children.length > 0;

            return (
              <li
                key={link.name}
                className="relative group"
                // Desktop: show dropdown on hover, Mobile: show on click
                onMouseEnter={() => window.innerWidth > 768 && hasDropdown && setOpenDropdown(idx)}
                onMouseLeave={() => window.innerWidth > 768 && hasDropdown && setOpenDropdown(null)}
              >
                {hasDropdown ? (
                  <>
                    <button
                      className={
                        "flex items-center gap-1 " +
                        (isActive
                          ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                          : "text-black hover:text-blue-700")
                      }
                      onClick={() => handleDropdown(idx)}
                      type="button"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    <ul
                      className={`
                        absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-white shadow-2xl rounded-2xl
                        z-30 py-1 px-2 list-none
                        transition-all duration-200
                        ${openDropdown === idx ? "opacity-100 visible pointer-events-auto translate-y-0" : "opacity-0 invisible pointer-events-none -translate-y-2"}
                        group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0
                      `}
                    >
                      {link.children.map((child) => (
                        <li
                          key={child.name}
                          className="px-2 py-1 text-lg font-bold text-ciwt-dark hover:bg-blue-50 hover:text-ciwt-blue rounded-md transition-colors duration-150 whitespace-nowrap"
                        >
                          <Link href={child.href}>{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                        : "text-black hover:text-blue-700"
                    }
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
