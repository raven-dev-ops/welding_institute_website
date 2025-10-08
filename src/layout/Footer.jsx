import SocialDividerRow from "../components/SocialDivider";
import { MapPin, Clock8, Megaphone, Icon } from "lucide-react";
import FooterCard from "../components/FooterCard";
import Hero from "@sections/Hero";
import Image from "next/image";

export default function Footer({ showVideo = true }) {
  const footerLinks = [
    {
      name: "Do Not Share My Information",
      href: "http://budurl.com/hibucookie",
    },
    {
      name: "Conditions of Use",
      href: "http://budurl.com/hibuconditionsofuse",
    },
    {
      name: "Notice and Takedown Policy",
      href: "http://budurl.com/hibunotice",
    },
    {
      name: "Website Accessibility Policy",
      href: "http://b.link/accessibility",
    },
  ];

  const footerCards = [
    {
      Icon: MapPin,
      header: "VISIT US",
      content: () => {
        return (
          <div className="text-center">
            <div>
              <span>Cider&apos;s Institute of Welding Technology</span>
            </div>
            <div>
              <span>300 NW Jefferson</span>
            </div>
            <div>
              <span>Grain Valley, MO 64029</span>
            </div>
          </div>
        );
      },

      links: [
        {
          display: "Get Directions",
          href: "https://www.google.com/maps/search/?api=1&query=300+NW+Jefferson+Grain+Valley+MO+64029",
        },
      ],
    },
    {
      Icon: Clock8,
      header: "Hours",
      content: () => {
        return (
          <table className="m-auto w-full text-center">
            <thead></thead>
            <tbody>
              <tr>
                <td className="px-[5px]">Mon-Fri</td>
                <td className="px-[5px]">7:00 am - 10:00 pm</td>
              </tr>
              <tr>
                <td className="px-[5px]">Sat</td>
                <td className="px-[5px]">Closed</td>
              </tr>
              <tr>
                <td className="px-[5px]">Sun</td>
                <td className="px-[5px]">Closed</td>
              </tr>
            </tbody>
          </table>
        );
      },
      links: [
        {
          display: "Call us today to schedule a free tour!",
          href: "tel:8169924046",
        },
      ],
    },
    {
      Icon: Megaphone,
      header: "CONTACT US",
      content: () => (
        <div>
          <p>
            Main: <a href="tel:8169924046">(816) 992-4046</a>
          </p>
          <p>
            Alternate: <a href="tel:8168674024">(816) 867-4024</a>
          </p>
          <p>
            Mobile: <a href="tel:8168852571">(816) 885-2571</a>
          </p>
        </div>
      ),
      links: [
        { display: "ciwt.mo@gmail.com", href: "mailto:ciwt.mo@gmail.com" },
      ],
    },
  ];

  return (
    <footer className="relative">
      {showVideo && (
        <Hero
          bgImage="/images/ciwt_photos/video1-2880w.png"
          styles="py-[60px] bg-top"
        >
          <div className="basis-1/3 shrink-0 flex flex-col h-[312px] w-full py-[35px] items-center">
            <div className="text-center text-white font-[Roboto_Condensed] font-medium">
              <div className="font-medium leading-[40px] mx-auto text-[24px] text-center z-2">
                <span>Learn More About</span>
              </div>
              <div className="text-[40px] font-bold leading-[40px]">
                <span>CIWT</span>
              </div>
            </div>
            <div className="mt-[30px] w-[110px] h-[110px]">
              <Image
                src="https://cdn.hibuwebsites.com/ddb8d584984c41d78393946877d4c6fb/dms3rep/multi/play-icon2.svg"
                height={110}
                width={110}
                alt=""
              />
            </div>
          </div>
        </Hero>
      )}
      <div className="bg-gray-100 text-gray-800">
        <div
          className="flex justify-evenly align-middle bg-cover bg-center position-relative min-h-[220px] min-w-full"
          style={{
            backgroundImage: 'url("/images/web_art/bg1-1920w.png")',
          }}
        >
          <div className="flex justify-evenly align-center text-center w-full m-auto">
            {footerCards.map(({ ...props }, idx) => (
              <FooterCard key={`${props.header}-${idx}`} {...props} />
            ))}
          </div>
        </div>
        {/* Facebook Banner */}
        <SocialDividerRow />
        {/* Privacy Banner */}
        <div className="py-[1px] bg-white w-full"> </div>
      </div>
      <div className="mt-8 text-center bg-white text-xs text-[#666] text-[11px] font-opensans font-medium">
        <div className="pt-[15px] pb-[10px] text-center max-w-[960px] my-0 mx-auto">
          <a href="http://budurl.com/hibuprivacy" target="_blank">
            Privacy Policy
          </a>
          <span className="before:content-[' | ']"></span>
          <div>
            <a>Manage Consent Preferences</a>
          </div>
          {footerLinks.map((link, index) => {
            return (
              <a key={index} href={link.href}>
                {link.name} {index < footerLinks.length - 1 && " | "}
              </a>
            );
          })}
        </div>
        <div className="pb-[15px]">
          &copy;
          <span>{new Date().getFullYear()}</span>
          {` The content on this website is owned by us and our licensors. Do not
          copy any content (including images) without our consent.`}
        </div>
      </div>
    </footer>
  );
}
