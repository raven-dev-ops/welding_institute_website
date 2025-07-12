import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="font-bold">Crider’s Institute</div>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/welding/master">Welding Courses</Link></li>
        <li><Link href="/admissions/choosing">Admissions</Link></li>
        <li><Link href="/payment/financing">Payment</Link></li>
        <li><Link href="/request-tour">Request Tour</Link></li>
        <li><Link href="/reviews">Reviews</Link></li>
        <li><Link href="/about/blog">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}