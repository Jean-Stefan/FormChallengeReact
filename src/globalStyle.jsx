import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html{
	height: 100%;
}

body{
	background: #ECEEF2;
	height: 100%;
}

#root{
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
`;
