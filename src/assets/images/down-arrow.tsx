import React from "react";

export type DownArrowSVGProps = React.SVGProps<SVGSVGElement> &
    Partial<{
        fillColor: string;
        className: string;
    }>;

export const DownArrowSVG: React.FC<DownArrowSVGProps> = ({
    fillColor = "#F8CC34",
    className = "",
    ...props
}) => {
    return (
        <svg
            fill={"none"}
            width="24" height="110" viewBox="0 0 24 110"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path d="M10.9393 109.061C11.5251 109.646 12.4749 109.646 13.0607 109.061L22.6066 99.5147C23.1924 98.9289 23.1924 97.9792 22.6066 97.3934C22.0208 96.8076 21.0711 96.8076 20.4853 97.3934L12 105.879L3.51472 97.3934C2.92894 96.8076 1.97919 96.8076 1.3934 97.3934C0.807616 97.9792 0.807616 98.9289 1.3934 99.5147L10.9393 109.061ZM10.5 6.55671e-08L10.5 108L13.5 108L13.5 -6.55671e-08L10.5 6.55671e-08Z" fill={fillColor} />
        </svg>
    );
};
