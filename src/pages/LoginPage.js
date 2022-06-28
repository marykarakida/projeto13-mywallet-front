import styled from 'styled-components';

import Logo from '../components/Logo';
import Login from '../components/Login';

export default function LoginPage() {
	return (
		<Page>
			<Logo />
			<Login />
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
