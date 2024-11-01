import sprites from "../../../public/sprite.svg";

// import style from "./Icon.module.css";

type IconProps = {
  icon: string;
  size: string;
  color: string;
};

const Icon = ({ icon, size, color }: IconProps) => {
  return (
    <svg width={size} height={size} fill={color}>
      <use href={`${sprites}#icon-${icon}`} />
    </svg>
  );
};

export default Icon;
