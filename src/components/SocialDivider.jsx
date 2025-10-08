import Image from "next/image";

export default function SocialDividerRow() {
  return (
    <div className="w-full flex items-center justify-center py-3 bg-[#10174e]">
      {/* Left divider */}
      <div className="px-4 flex-5">
        <hr className="border-t-4 border-double bg-none h-0 bg-transparent min-h-0 border-white display-block margin-[10px]" />
      </div>

      {/* Social icons center */}
      <div className="flex mx-4 flex-2 w-[40px] justify-center align-center">
        <a
          href="https://www.facebook.com/cridersinstitute/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition"
        >
          <Image
            src="https://cdn.websites.hibu.com/-resellers-preview/_social_icons/hibu_facebook.svg"
            alt="Facebook"
            width={40}
            height={40}
          />
        </a>
        {/* add more icons here */}
      </div>

      {/* Right divider */}
      <div className="px-4 flex-5">
        <hr className="border-t-4 border-gray-300 border-double" />
      </div>
    </div>
  );
}
