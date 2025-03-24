import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        ${({theme}) => theme.Typography.BodyMedium};
        background-color: ${({theme}) => theme.Semantic.Fill.Assistive};
        color: ${({theme}) => theme.Semantic.Label.Normal};
    }
`;

export default GlobalStyle;
