import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Welding Courses',
    href: '/welding/master',
    children: [
      { name: 'Master', href: '/welding/master' },
      { name: 'Hobby', href: '/welding/hobby' },
    ],
  },
  {
    name: 'Admissions',
    href: '/admissions/choosing',
    children: [
      { name: 'Choosing', href: '/admissions/choosing' },
      { name: 'Information', href: '/admissions/information' },
      { name: 'Policies', href: '/admissions/policies' },
    ],
  },
  {
    name: 'Payment',
    href: '/payment/financing',
    children: [
      { name: 'Financing', href: '/payment/financing' },
      { name: 'Store', href: '/payment/store' },
    ],
  },
  { name: 'Request Tour', href: '/request-a-tour' },
  { name: 'Reviews', href: '/reviews' },
  {
    name: 'About',
    href: '/about/blog',
    children: [
      { name: 'Blog', href: '/about/blog' },
      { name: 'FAQ', href: '/about/faq' },
    ],
  },
  { name: 'Contact', href: '/contact' },
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
            <Link href={link.href} className="hover:text-blue-600 font-medium">
              {link.name}
            </Link>

            {link.children && (
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md">
                {link.children.map((child) => (
                  <li key={child.name} className="px-4 py-2 hover:bg-gray-100">
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
