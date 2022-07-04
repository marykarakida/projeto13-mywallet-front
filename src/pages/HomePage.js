import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../layout/Header';
import Ledger from '../components/Ledger';
import Navbar from '../layout/Navbar';

export default function MainPage() {
	const navigate = useNavigate();

	useEffect(() => {
		const locallyStoredUserData = localStorage.getItem('userData');

		if (locallyStoredUserData === null) {
			navigate('/', { replace: true });
		}
	}, []);

	return (
		<Page>
			<Header />
			<Ledger />
			<Navbar />
		</Page>
	);
}

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;
