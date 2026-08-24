import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
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
      {Icon && <Icon size={23} />}
      {title}
    </NavLink>
  );
};

export default NavigationTab;
