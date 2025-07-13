import Link from 'next/link';

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
      { name: 'Request Tour', href: '/request-tour/tour-form' },,
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
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="font-bold">Crider’s Institute</div>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`nav-item ${link.children ? 'dropdown relative group' : ''}`}
          >
            {link.children ? (
              <button
                type="button"
                className="font-medium hover:text-blue-600"
              >
                {link.name}
              </button>
            ) : (
              <Link
                href={link.href}
                className="font-medium hover:text-blue-600"
              >
                {link.name}
              </Link>
            )}

            {link.children && (
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md">
                {link.children.map((child) => (
                  <li key={child.name} className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                    <Link href={child.href}>{child.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
