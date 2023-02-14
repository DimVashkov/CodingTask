import React, {useEffect} from "react"
import CloudinaryUploadWidget from './CloudinaryUploadWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarAndCrescent, faSun } from '@fortawesome/free-solid-svg-icons'
import { Button } from "./styles/Button.styled";
import {light, dark} from "./styles/Theme.styled";

const Navbar = ({selectedTheme, setSelectedTheme, setImageList}) => {
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  return (
    <div className='navbar'>
      <CloudinaryUploadWidget setImageList={setImageList}/>
      <div className='spacer'></div>
      <div className='theme_buttons'>
        <Button
          className={`light ${selectedTheme.name === light.name ? "active" : ""}`}
          onClick={() => HandleThemeChange(light)}
        >
          <FontAwesomeIcon className='icon' icon={faSun} />
        </Button>
        <Button
          className={`dark ${selectedTheme.name === dark.name ? "active" : ""}`}
          onClick={() => HandleThemeChange(dark)}
        >
          <FontAwesomeIcon className='icon' icon={faStarAndCrescent} />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;