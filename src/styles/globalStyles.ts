import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
      --white: #FFFFFF;
      --red: #E52E4D;
      --blue: #5429CC;
      --blue-light: #6933FF; 
      --title: #fff; 
      --text-body: #969CB3;
      --background: #F0F2F5;
      --green: #33cc95;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px){
        font-size: 93.75%;
      }
      
      @media (max-width: 720px){
        font-size: 87.5%;
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antiliased;
    }

    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
      font-weight: 700;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;    
    }

`