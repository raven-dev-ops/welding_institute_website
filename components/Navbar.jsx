import Link from "next/link";
import Image from "next/image";

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
  { name: "Request Tour", href: "/request-tour/tour-form" },
  { name: "Reviews", href: "/reviews/reviews" },
  {
    name: "About Us",
    children: [
      { name: "Blog", href: "/about/blog" },
      { name: "FAQ", href: "/about/faq" },
    ],
  },
  { name: "Contact Us", href: "/contact-us/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex flex-col items-center w-full">
        {/* Logo */}
        <Link href="/" className="pt-6 pb-4">
          <Image
            src="/images/ciwt_logo/logo-b9339ab0-1920w.png"
            alt="CIWT Logo"
            width={165}
            height={120}
            priority
          />
        </Link>

        {/* Nav Links Bar */}
        <div className="w-full bg-white">
          <ul className="flex flex-wrap justify-center gap-x-[80px] gap-y-4 py-6">
            {navLinks.map((link) => {
              const isDropdown = link.children && link.children.length > 0;

              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href || "#"}
                    className="font-medium text-ciwt-dark hover:text-ciwt-blue transition-colors duration-200 no-underline flex items-center"
                  >
                    {link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                        isDropdown
                          ? "group-hover:rotate-0 rotate-180"
                          : "rotate-180"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>

                  {isDropdown && (
                    <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white py-4 rounded shadow-lg z-50">
                      {link.children.map((child) => (
                        <li
                          key={child.name}
                          className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                        >
                          <Link href={child.href} className="no-underline">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
