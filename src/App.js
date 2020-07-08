import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevDark) => !prevDark);
  };
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
