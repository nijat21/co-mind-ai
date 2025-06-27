"use client";
import React, { useEffect, useState } from "react";
import iconLinkedin from "../../../../public/images/icons/linkedin-svgrepo-com.svg";
import iconLogo from "../../../../public/lovable-uploads/bb59f441-b524-4bf0-9eed-f17f870e34e6.png";

export enum SvgId {
  Linkedin = "Linkedin",
  Logo = "Logo",
}

export interface SvgData {
  id: SvgId;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SvgWrapper: React.FC<SvgData> = ({
  id = "",
  fill = "",
  className = "",
  style = {},
  onClick = undefined,
}) => {
  const [src, setSrc] = useState<string | undefined>(undefined);
  const [svgData, setSvgData] = useState<string>("");
  const [customSvgData, setCustomSvgData] = useState<string>("");

  className += "transition-all duration-700";
  if (onClick) style = { ...style, cursor: "pointer" };

  useEffect(() => {
    switch (id) {
      case SvgId.Linkedin:
        setSrc(iconLinkedin);
        break;
      case SvgId.Logo:
        setSrc(iconLogo);
        break;
    }
  }, [id]);

  useEffect(() => {
    if (!src) return;
    const fetchSvg = async () => {
      const response = await fetch(src);
      let _svgData: string = await response.text();
      setSvgData(_svgData);
    };

    fetchSvg();
  }, [src]);

  useEffect(() => {
    customizeSvgData();
  }, [svgData, fill]);

  const customizeSvgData = () => {
    if ([SvgId.Logo.toString()].includes(id)) return;
    let pivot: string = svgData;
    if (fill) {
      pivot = pivot.replace(/fill="[^"]*"/g, `class="fill-${fill}"`);
    }
    pivot = pivot.replace(/width="[^"]*"/g, `width="100%"`);
    pivot = pivot.replace(/height="[^"]*"/g, `height="100%"`);
    setCustomSvgData(pivot);
  };

  if (customSvgData)
    return (
      <div
        dangerouslySetInnerHTML={{ __html: customSvgData }}
        className={className}
        style={style}
        onClick={onClick ? onClick : () => {}}
      />
    );
  else if (src)
    return (
      <img
        src={src}
        className={className}
        style={style}
        onClick={onClick ? onClick : () => {}}
      />
    );
  else return <></>;
};

export default SvgWrapper;
