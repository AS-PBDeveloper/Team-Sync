import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
  const IconComponent = Icon;

  return (
    <NavLink
      className={({ isActive }) =>
        `flex gap-3 pl-4 py-2 ${
          isActive ? "border-r-4 border-(--primary) bg-(--secondary)" : ""
        }`
      }
      to={path}
      end="/"
    >
      {IconComponent ? <IconComponent size={23} /> : null}
      {title}
    </NavLink>
  );
};

export default NavigationTab;
