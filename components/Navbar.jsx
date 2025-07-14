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
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-center items-center bg-white relative z-50"> {/* Navbar background, padding, and centering */}

      {/* Nav Links */}
      <ul className="flex space-x-6"> {/* Horizontal flex container for navigation links */}
        {navLinks.map((link) => {
          const isDropdown = link.children && link.children.length > 0;

          return (
            <li
              key={link.name}
              className={`nav-item ${isDropdown ? 'relative group' : ''}`} /* Add relative positioning and group class for dropdown hover */
            >
              {isDropdown ? (
                <button type="button" className="font-medium text-ciwt-dark hover:text-ciwt-blue"> {/* Button for dropdown parent */}
                  {link.name}
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="font-medium text-ciwt-dark hover:text-ciwt-blue" /* Link for simple navigation items */
                >
                  {link.name}
                </Link>
              )}

              {isDropdown && (
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md"> {/* Dropdown menu styling */}
                  {link.children.map((child) => (
                    <li key={child.name} className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                      <Link href={child.href}>{child.name}</Link> {/* Dropdown link styling */}
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
