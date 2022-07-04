import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Deposit from '../components/Deposit';

export default function DepositPage() {
	const navigate = useNavigate();

	useEffect(() => {
		const locallyStoredUserData = localStorage.getItem('userData');

		if (locallyStoredUserData === null) {
			navigate('/', { replace: true });
		}
	}, []);

	return (
		<Page>
			<Deposit />
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
