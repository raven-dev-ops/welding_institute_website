import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Icon from "@components/Icon";

const CTAButton = ({
  href,
  icon = "",
  children,
  variant = "contained",
  size = "md",
  noPadding = false,
  align = "center",
  color = "white",
}) => {
  const BORDER_RADIUS = "rounded-md";
  const BOX_SHADOW = "shadow-[0px_3px_11px_0px_rgba(0,0,0,0.25)]";

  const sizeProps = {
    xs: "text-[12px]",
    sm: "text-[14px] w-[160px] h-[30px]",
    md: "text-[22px] h-[100%] font-[Roboto_Condensed] font-medium",
    lg: "text-[18px] w-[220px] h-[42px]",
    xl: "text-[36px] w-[345px] font-bold my-[10px] clear-both p-0 leading-[22px] ",
  };

  const buttonStyles = {
    text: `bg-transparent`,
    outlined: `bg-transparent border-cta border-[2px] ${BOX_SHADOW} hover:border-cta-hover`,
    contained: `border-cta bg-cta ${BOX_SHADOW} border-[2px]  hover:bg-cta-hover hover:border-cta-hover`,
  };

  const alignProps = {
    left: "start",
    center: "center",
    right: "end",
  };

  const textProps = {
    xl: "font-bold text-[36px]",
  };
  return (
    <Link
      href={href}
      type="button"
      class={`cursor-pointer flex text-${color} ${BORDER_RADIUS} ${
        sizeProps[size]
      } justify-${alignProps[align]} items-center ${buttonStyles[variant]} ${
        noPadding ? "p-0" : ""
      } transition-all duration-200 ease`}
    >
      {/* icon */}
      {icon && (
        <span className="">
          <Icon icon={icon || ""} color="#fff" />
        </span>
      )}
      {/* Text */}
      <span
        className={`text-[16px] font-bold py-[10px] px-[7px] inline-block align-middle max-w-[98%] ${textProps[size]}`}
      >
        {children}
      </span>
    </Link>
  );
};

CTAButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  noPadding: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  icon: PropTypes.string,
  color: PropTypes.string,
};

export default CTAButton;
