import React from "react";

interface IconProps {
  icon: React.ElementType;
  size?: number;
  className?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

const IconView: React.FC<IconProps> = ({ icon: Icon, size = 32, className = "", weight }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size={size} className={className} weight={weight} />
    </div>
  );
};

export default IconView;