import React, { useContext } from "react";
import { ThemeContext } from "./App";

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);

  const ThemeStyles = {
    backgroundColor: darkTheme ? "#232323" : "#ededed",
    color: darkTheme ? "#fff" : "#000",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={ThemeStyles}>Function Theme</div>;
};

export default FunctionContextComponent;
