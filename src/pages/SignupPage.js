import styled from 'styled-components';

import Logo from '../components/Logo';
import Signup from '../components/Signup';

export default function SignupPage() {
	return (
		<Page>
			<Logo />
			<Signup />
		</Page>
	);
}

const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;
