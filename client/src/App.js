import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import {light} from "./components/styles/Theme.styled";
import Navbar from './components/Navbar';

const App = () => {
   const [selectedTheme, setSelectedTheme] = useState(light);
   const [selectedImg, setSelectedImg] = useState(null);
   const [imageList, setImageList] = useState([]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className='App'>
        <GlobalStyles />
        <Navbar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} setImageList={setImageList}/>
        <Gallery setSelectedImg={setSelectedImg} setImageList={setImageList} imageList={imageList}/>
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} setImageList={setImageList}/>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App