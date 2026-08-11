import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const Home = () => {
  let dispatch = useDispatch();

  let handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <h1>This is dashboard Home Page</h1>
      <button
        onClick={handleThemeChange}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Home;
