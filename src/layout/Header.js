import styled from 'styled-components';

export default function Header() {
	return (
		<Container>
			<h2>Olá, Fulano</h2>
			<ion-icon name="enter-outline" />
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 26px 0;
	padding: 0 26px;
	width: 100%;
	max-width: 1248px;
	color: #ffffff;

	h2 {
		font-weight: 700;
		font-size: 26px;
	}

	ion-icon {
		font-size: 24px;
	}
`;
