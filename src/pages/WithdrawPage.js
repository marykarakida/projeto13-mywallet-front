import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Withdraw from '../components/Withdraw';

export default function WithdrawPage() {
	const navigate = useNavigate();

	useEffect(() => {
		const locallyStoredUserData = localStorage.getItem('userData');

		if (locallyStoredUserData === null) {
			navigate('/', { replace: true });
		}
	}, []);

	return (
		<Page>
			<Withdraw />
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
