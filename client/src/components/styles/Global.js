import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: monospace;
    overflow-x: hidden;
  }

  .App {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .icon {
    margin-right: 4px;
  }
  
  .image {
    position: relative;
    cursor: pointer;
    height: 100%;
  }
  
  .image__star {
    position: absolute;
    width: 20px;
    height: 20px;
    color: #ffd500;
    left: 10px;
    top: 10px;
  }
  
  .image::before {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0a54;
    content: '';
  }
  
  .image:hover::before {
    opacity: 0;
  }
  
  .backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
  }
  
  .backdrop .modal {
    display: block;
    max-width: 70%;
    max-height: 60%;
    margin: 5% auto;
  }
  
  .backdrop .modal img {
    max-width: 700px;
    display: block;
    margin: 0 auto;
  }
  
  .backdrop .modal .buttons {
    display: flex;
    padding: 20px 40px;
  }
  
  .backdrop .modal .buttons .icon {
    width: 20px;
    height: 20px;
    color: #fafafa;
    cursor: pointer;
  }
  
  .navbar {
    display: flex;
  }
  
  .spacer {
    flex-grow: 1;
  }
  
  .theme_buttons .light {
    border-radius: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  
  .theme_buttons .dark {
    border-radius: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  
  .active {
    background-color: #315de2 !important;
  }
`;