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
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto py-4 flex flex-col items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/ciwt_logo/logo-b9339ab0-1920w.png"
            width={220}
            height={60}
            alt="Logo"
            className="mb-4"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-8">
          {navLinks.map((link) => {
            const isDropdown = link.children?.length;

            return (
              <li
                key={link.name}
                className="relative group py-2 hover:text-ciwt-blue"
              >
                <Link href={link.href || "#"} className="font-medium text-ciwt-dark">
                  {link.name}
                </Link>

                {isDropdown && (
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white border rounded shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.name} className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                        <Link href={child.href}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}