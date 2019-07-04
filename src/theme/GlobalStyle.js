import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'); 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }      
  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`

export default GlobalStyle
