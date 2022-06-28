import styled from 'styled-components';

import Withdraw from '../components/Withdraw';

export default function WithdrawPage() {
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
