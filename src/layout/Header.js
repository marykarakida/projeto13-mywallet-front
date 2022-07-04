import styled from 'styled-components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

export default function Header() {
	const navigate = useNavigate();
	const { userData } = useContext(UserContext);

	function logout() {
		localStorage.removeItem('userData');
		navigate('/');
	}

	return (
		<Container>
			<h2>Olá, {userData.name}</h2>
			<ion-icon name="enter-outline" onClick={logout} />
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
		cursor: pointer;
	}
`;
