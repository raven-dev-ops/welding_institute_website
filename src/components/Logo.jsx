import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div
      id="image-container"
      className="w-[190px] float-none max-w-[191px] my-0 mx-auto p-0 min0w0[25px] text-start block h-[144px] leading-1.5"
    >
      <Link href="/">
        <Image
          src="/images/ciwt_logo/logo-b9339ab0-1920w.png"
          alt="CIWT Logo"
          style={{ objectFit: "contain" }}
          width={191}
          height={144}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
