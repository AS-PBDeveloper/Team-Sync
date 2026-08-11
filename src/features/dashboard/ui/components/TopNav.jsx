import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import React from "react";

const TopNav = () => {
  return (
    <div className="flex justify-between bg-(--bg-card) items-center">
      <div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-(--bg-surface) border border-gray-600">
        <Search size={23} />
        <input
          className="outline-0 w-full text-(--text-primary)"
          type="text"
          placeholder="Search workspace.."
        />
      </div>
      <div className="flex gap-4">
        {mode === "light" ? (
          <Moon onClick={handleThemeChange} size={23} />
        ) : (
          <Lightbulb onClick={handleThemeChange} size={23} />
        )}

        <Bell size={23} />
        <Menu size={23} />
      </div>
    </div>
  );
};

export default TopNav;
