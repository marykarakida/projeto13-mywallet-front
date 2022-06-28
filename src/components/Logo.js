import styled from 'styled-components';

export default function Logo() {
	return (
		<Container>
			<Title>MyWallet</Title>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 26px 0;
	padding: 0 26px;
	width: 100%;
	max-width: 1248px;
`;

const Title = styled.h1`
	font-family: 'Saira Stencil One', cursive;
	font-size: 32px;
	color: #ffffff;
`;
