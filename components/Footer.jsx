export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-start md:items-start md:space-x-12 space-y-8 md:space-y-0 text-center md:text-left">

        {/* VISIT US */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">VISIT US</h3>
          <p className="text-base">Crider&apos;s Institute of Welding Technology</p>
          <p className="text-base">300 NW Jefferson</p>
          <p className="text-base">Grain Valley, MO 64029</p>
          <p className="mt-1">
            <a
              href="https://www.google.com/maps/search/?api=1&query=300+NW+Jefferson+Grain+Valley+MO+64029"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ciwt-blue hover:text-ciwt-gold underline"
            >
              Get Directions
            </a>
          </p>
        </div>

        {/* HOURS */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">HOURS</h3>
          <p className="text-base">Mon - Fri: 7:00 am - 10:00 pm</p>
          <p className="text-base">Sat: Closed</p>
          <p className="text-base">Sun: Closed</p>
          <p className="text-base mt-2">Call us today to schedule a free tour!</p>
        </div>

        {/* CONTACT US */} {/* This heading was already updated in the previous attempt, so the diff might not show changes here if the color was already text-white and font-bold. */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">CONTACT US</h3>
          <p>Main: <a href="tel:8169924046" className="underline hover:text-blue-300">(816) 992-4046</a></p>
          <p>Alternate: <a href="tel:8168674024" className="underline hover:text-blue-300">(816) 867-4024</a></p>
          <p>Mobile: <a href="tel:8168852571" className="underline hover:text-blue-300">(816) 885-2571</a></p>
          <p>Email: <a href="mailto:ciwt.mo@gmail.com" className="underline hover:text-blue-300">ciwt.mo@gmail.com</a></p>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Crider&apos;s Institute of Welding Technology. All rights reserved.
      </div>
    </footer>
  );
}
