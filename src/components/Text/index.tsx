import React from "react";

const sizeClasses = {
  txtJostRomanRegular24: "font-jost font-normal",
  txtJostRomanRegular50: "font-jost font-normal",
  txtJostRomanRegular40: "font-jost font-normal",
  txtJostRomanMedium28: "font-jost font-medium",
  txtJostRomanRegular20: "font-jost font-normal",
  txtJostRomanMedium24: "font-jost font-medium",
  txtWorkSansRomanRegular20: "font-normal font-worksans",
  txtJostRomanMedium1157: "font-jost font-medium",
  txtWorkSansRomanRegular14: "font-normal font-worksans",
  txtJostRomanRegular28: "font-jost font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
