import React from "react";

const Typography = ({ children, level = "p" }) => {
  const H2 = ({ children }) => (
    <h2 className="font-[Staatliches] font-medium text-[28px]">{children}</h2>
  );

  const H3 = ({ children }) => (
    <h3 className="font-[Staatliches] font-medium text-[24px]">{children}</h3>
  );
  const P = ({ children }) => (
    <span className="font-[Roboto_Condensed] text-[17px] leading-[1.5] inline">
      {children}
    </span>
  );

  const Component = {
    h2: H2,
    h3: H3,
    p: P,
  }[level];

  return <Component>{children}</Component>;
};

export default Typography;
