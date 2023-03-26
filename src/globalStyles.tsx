import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: #233554;
        background-image: url('');
        height: 3000px;
        color: white;
    }
    h2{ 
        text-align: center;
        font-size: 38px;
        margin-bottom: 0;
    }
    h3{
        text-align: left;
        margin: 0;
        padding: 4px 64px;
        font-size: 26px;
    }
    h4{
        font-size: 20px;
        margin: 0;
        padding: 4px 36px;
    }
    h5{
        font-size: 20px;
        margin: 0;
        padding: 4px 36px;
    }
    p{
        font-size: 16px;
        margin: 0;
        padding: 8px 20px;
        line-height: 18px;
        text-align: left;
    }
`
