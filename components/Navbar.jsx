import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Welding Courses',
    href: '/welding/master', // Parent link can go to a default page or be just a label
    children: [
      { name: 'Master', href: '/welding/master' },
      { name: 'Hobby', href: '/welding/hobby' },
    ],
  },
  {
    name: 'Admissions',
    href: '/admissions/choosing', // Parent link
    children: [
      { name: 'Choosing', href: '/admissions/choosing' },
      { name: 'Information', href: '/admissions/information' },
      { name: 'Policies', href: '/admissions/policies' },
    ],
  },
  {
    name: 'Payment',
    href: '/payment/financing', // Parent link
    children: [
      { name: 'Financing', href: '/payment/financing' },
      { name: 'Store', href: '/payment/store' },
    ],
  },
  { name: 'Request Tour', href: '/request-a-tour' }, // Using the directory path, Next.js will find index.jsx
  { name: 'Reviews', href: '/reviews' }, // Using the directory path, Next.js will find index.jsx
  {
    name: 'About',
    href: '/about/blog', // Parent link
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
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.children ? (
              <div> {/* This div acts as the dropdown container/trigger */}
                <Link href={link.href}>{link.name}</Link> {/* Parent link */}
                <ul className="absolute hidden"> {/* This ul is the dropdown content - needs styling and JS for display */}
                  {link.children.map((child) => (
                    <li key={child.name}>
                      <Link href={child.href}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link href={link.href}>{link.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}