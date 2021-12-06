import React from "react";
import { MdHome } from "react-icons/md";

const List = {
  Home: "MdHome",
};

const getIconComponent = (name) => {
  switch (name) {
    case List.Home:
      return MdHome;
    default:
      return null;
  }
};

const Icon = ({ name, ...props }) => {
  const IconComponent = getIconComponent(name);
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

Icon.List = List;

export default Icon;
