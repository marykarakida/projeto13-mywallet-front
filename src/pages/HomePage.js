import styled from 'styled-components';

import Header from '../layout/Header';
import Ledger from '../components/Ledger';
import Navbar from '../layout/Navbar';

export default function MainPage() {
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
