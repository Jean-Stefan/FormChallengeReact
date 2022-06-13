import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Nunito', sans-serif;
}

html{
	height: 100%;
}

body{
	background: #ECEEF2;
	height: 100%;

	@media (max-width: 768px){
	background: #ffffff;
	};
}

#root{
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
`;
