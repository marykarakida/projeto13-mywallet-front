import styled from 'styled-components';

import Deposit from '../components/Deposit';

export default function DepositPage() {
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
