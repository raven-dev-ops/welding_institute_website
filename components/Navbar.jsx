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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl">
      <div className="flex flex-col items-center w-full">
        {/* Logo: remove extra padding, use block for clean top edge */}
        <Link href="/" className="block">
          <Image
            src="/images/ciwt_logo/logo-b9339ab0-1920w.png"
            alt="CIWT Logo"
            width={185}
            height={140}
            priority
          />
        </Link>
        {/* Navbar Links */}
        <div className="w-full bg-white shadow">
          <ul className="flex flex-wrap justify-center gap-x-[56px] gap-y-2 py-4 list-none">
            {navLinks.map((link) => {
              const isDropdown = link.children && link.children.length > 0;
              return (
                <li key={link.name} className="relative group">
                  {isDropdown ? (
                    <span className="font-bold text-lg text-ciwt-dark hover:text-ciwt-blue transition-colors duration-200 flex items-center no-underline cursor-pointer whitespace-nowrap">
                      {link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4 transform transition-transform duration-200 rotate-180 group-hover:rotate-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-bold text-lg text-ciwt-dark hover:text-ciwt-blue transition-colors duration-200 no-underline flex items-center whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  )}

                  {isDropdown && (
                    <ul
                      className={`
                        absolute left-1/2 transform -translate-x-1/2 mt-2 w-max
                        bg-white shadow-2xl rounded-2xl
                        group-hover:opacity-100 group-hover:translate-y-0
                        opacity-0 pointer-events-none group-hover:pointer-events-auto
                        group-hover:visible invisible
                        transition-all duration-300 ease-out
                        z-50
                        py-0.5 px-2
                        list-none
                      `}
                      style={{ backgroundColor: "#fff" }}
                    >
                      {link.children.map((child, idx) => (
                        <li
                          key={child.name}
                          className={`
                            px-2 py-1 text-lg font-bold text-ciwt-dark 
                            hover:bg-blue-50 hover:text-ciwt-blue
                            transition-colors duration-150 cursor-pointer whitespace-nowrap
                            ${idx < link.children.length - 1 ? 'border-b border-gray-100' : ''}
                            list-none
                          `}
                        >
                          <Link href={child.href} className="no-underline block w-full h-full">
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
