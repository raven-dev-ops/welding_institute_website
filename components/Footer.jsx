export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-12 space-y-8 md:space-y-0 text-center md:text-left text-sm">
        
        {/* VISIT US */}
        <div>
          <h3 className="text-lg font-bold mb-2">VISIT US</h3>
          <p>Crider&apos;s Institute of Welding Technology</p>
          <p>300 NW Jefferson</p>
          <p>Grain Valley, MO 64029</p>
          <p className="mt-1">
            <a
              href="https://www.google.com/maps/search/?api=1&query=300+NW+Jefferson+Grain+Valley+MO+64029"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Get Directions
            </a>
          </p>
        </div>

        {/* HOURS */}
        <div>
          <h3 className="text-lg font-bold mb-2">HOURS</h3>
          <p>Mon - Fri: 7:00 am - 10:00 pm</p>
          <p>Sat: Closed</p>
          <p>Sun: Closed</p>
          <p className="mt-2">Call us today to schedule a free tour!</p>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="text-lg font-bold mb-2">CONTACT US</h3>
          <p>Main: <a href="tel:8169924046" className="underline hover:text-blue-300">(816) 992-4046</a></p>
          <p>Alternate: <a href="tel:8168674024" className="underline hover:text-blue-300">(816) 867-4024</a></p>
          <p>Mobile: <a href="tel:8168852571" className="underline hover:text-blue-300">(816) 885-2571</a></p>
          <p>Email: <a href="mailto:ciwt.mo@gmail.com" className="underline hover:text-blue-300">ciwt.mo@gmail.com</a></p>
        </div>

      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Crider&apos;s Institute of Welding & Technology. All rights reserved.
      </div>
    </footer>
  );
}
