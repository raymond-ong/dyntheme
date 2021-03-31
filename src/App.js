import './App.css';
import React, { useState } from 'react';

const themes = [
  {name: "dark", label: "Dark", bgColor: "black", txtColor: "white"},
  {name: "light", label: "Light", bgColor: "lightgray", txtColor: "black"},
  {name: "colorful", label: "Colorful", bgColor: "lightblue", txtColor: "darkred"},
]

function App() {
  const [themeSelected, setThemeSelected] = useState({theme: 'dark'})

  const handleThemeChange = (e) => {
    console.log("[handleThemeChange] Selected Theme:", e.target.value)
    setThemeSelected({
      theme: e.target.value
    })
  }

  const getStyle = () => {
    if (!themeSelected) {
      return null;
    }
    const themeObj = themes.find(x => x.name === themeSelected.theme);
    if (!themeObj) {
      return null;
    }

    const styleText = `:root {--main-bg-color: ${themeObj.bgColor};--main-text-color: ${themeObj.txtColor};}`;
    console.log(styleText);
    return  <style type="text/css">{styleText}</style>;
  }

  console.log("[App] Displaying theme", themeSelected);

  return (
    <div className="App">
      {getStyle()}
      <div className="Header">
      <label htmlFor="cbxThemes" className="formLabel">Choose a theme:</label>
      <select name="cbxThemes" id="cbxThemes" 
        onChange={ handleThemeChange }
      >
        {themes.map(theme => <option key={theme.name} value={theme.name}>{theme.label}</option>)}
      </select>
      </div>

      <div className="Body">
        <h1>Body Part</h1>
        <h2>Some Content...</h2>
      </div>
    </div>
  );
}

export default App;
