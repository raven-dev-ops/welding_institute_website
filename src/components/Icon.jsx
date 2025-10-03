import { Phone, Diamond, ChevronDown } from "lucide-react";
import React from "react";

const Icon = ({ icon = "diamond", color = "#000", fill = "#000" }) => {
  const icons = {
    phone: <Phone color={color} />,
    diamond: <Diamond color={color} />,
    ChevronDown: <ChevronDown color={color} />,
  };

  const renderIcon = () => <>{icons[icon]}</>;

  return (
    <div
      id="icon-wrapper"
      className="w-[40px] h-[40px] float-none relative top-0 left-0 maw-w-full ml-auto text-center align-middle flex justify-center items-center"
    >
      {renderIcon()}
    </div>
  );
};

export default Icon;
