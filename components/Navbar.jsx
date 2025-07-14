import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Navigation structure
const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Welding Courses',
    children: [
      { name: 'Master', href: '/welding/master' },
      { name: 'Hobby', href: '/welding/hobby' },
    ],
  },
  {
    name: 'Admissions',
    children: [
      { name: 'Choosing', href: '/admissions/choosing' },
      { name: 'Information', href: '/admissions/information' },
      { name: 'Policies', href: '/admissions/policies' },
    ],
  },
  {
    name: 'Payment',
    children: [
      { name: 'Financing', href: '/payment/financing' },
      { name: 'Online Deposits', href: '/payment/deposits' },
    ],
  },
  {
    name: 'Request Tour',
    children: [
      { name: 'Request Tour', href: '/request-tour/tour-form' },
    ],
  },
  {
    name: 'Reviews',
    children: [
      { name: 'Reviews', href: '/reviews/reviews' },
    ],
  },
  {
    name: 'About Us',
    children: [
      { name: 'Blog', href: '/about/blog' },
      { name: 'FAQ', href: '/about/faq' },
    ],
  },
  {
    name: 'Contact Us',
    children: [
      { name: 'Contact', href: '/contact-us/contact' },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open on mobile

  // Function to toggle a dropdown (only for mobile)
  const handleDropdownToggle = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center bg-white relative z-50">
      <Link href="/">
        <Image
          src="/images/ciwt_logo/logo-b9339ab0-228w.png"
          alt="CIWT Logo"
          width={100}
          height={50}
          priority
        />
      </Link>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <svg width={30} height={30} fill="none" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="#1329E5" />
          <rect y="11" width="24" height="2" rx="1" fill="#1329E5" />
          <rect y="18" width="24" height="2" rx="1" fill="#1329E5" />
        </svg>
      </button>

      {/* Nav Links */}
      <ul
        className={`
          ${isMobileMenuOpen ? "flex flex-col bg-white py-4 shadow-md absolute top-full left-0 w-full" : "hidden"}
          md:flex md:flex-row md:static md:bg-transparent md:shadow-none md:w-auto
          space-y-2 md:space-y-0 md:space-x-6 transition-all duration-300 ease-in-out
        `}
      >
        {navLinks.map((link) => {
          const isDropdown = link.children && link.children.length > 0;
          const isOpen = openDropdown === link.name;

          return (
            <li
              key={link.name}
              className={`nav-item ${isDropdown ? "relative group" : ""}`}
            >
              {isDropdown ? (
                <>
                  {/* Dropdown button (click on mobile, hover on desktop) */}
                  <button
                    type="button"
                    className="font-medium text-ciwt-dark hover:text-ciwt-blue flex items-center"
                    onClick={() => {
                      if (isMobileMenuOpen) handleDropdownToggle(link.name);
                    }}
                  >
                    {link.name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isOpen && isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  <ul
                    className={`
                      ${isMobileMenuOpen
                        ? isOpen
                          ? "block"
                          : "hidden"
                        : "hidden group-hover:block"}
                      ${isMobileMenuOpen
                        ? "relative mt-2 space-y-1 px-2 bg-white"
                        : "absolute left-0 mt-2 bg-white border rounded shadow-md"}
                    `}
                  >
                    {link.children.map((child) => (
                      <li
                        key={child.name}
                        className={`whitespace-nowrap ${
                          isMobileMenuOpen
                            ? "py-1"
                            : "px-4 py-2 hover:bg-gray-100"
                        }`}
                      >
                        <Link href={child.href}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="font-medium text-ciwt-dark hover:text-ciwt-blue"
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
