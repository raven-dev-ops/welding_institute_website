import Link from "next/link";
import Image from "next/image";

// Navigation structure
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
  {
    name: "Request Tour",
    children: [{ name: "Request Tour", href: "/request-tour/tour-form" }],
  },
  {
    name: "Reviews",
    children: [{ name: "Reviews", href: "/reviews/reviews" }],
  },
  {
    name: "About Us",
    children: [
      { name: "Blog", href: "/about/blog" },
      { name: "FAQ", href: "/about/faq" },
    ],
  },
  {
    name: "Contact Us",
    children: [{ name: "Contact", href: "/contact-us/contact" }],
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 py-4 flex justify-center items-center bg-white shadow-md z-50">
      {/* Navbar background, padding, centering, fixed position, full width, and shadow */}

      {/* Nav Links */}
      <ul className="flex space-x-6">
        {navLinks.map((link) => {
          const isDropdown = link.children && link.children.length > 0;

          return (
            <li
              key={link.name}
              className={`nav-item ${isDropdown ? "relative group" : ""}`}
            >
              {isDropdown ? (
                <button
                  type="button"
                  className="font-medium text-ciwt-dark hover:text-ciwt-blue flex items-center"
                >
                  {link.name}
                  {/* Down arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
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
              ) : (
                <Link
                  href={link.href}
                  className="font-medium text-ciwt-dark hover:text-ciwt-blue"
                >
                  {link.name}
                </Link>
              )}

              {isDropdown && (
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md">
                  {link.children.map((child) => (
                    <li
                      key={child.name}
                      className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      <Link href={child.href}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
