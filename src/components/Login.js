import axios from 'axios';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function Login() {
	const navigate = useNavigate();
	const { setToken } = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const locallyStoredToken = localStorage.getItem('token');

		if (locallyStoredToken !== null) {
			navigate('/home', { replace: true });
		}
	}, []);

	const loginToApp = (event) => {
		event.preventDefault();

		const user = {
			email,
			password,
		};

		const promise = axios.post('http://localhost:5000/auth/login', user);
		promise.then((res) => {
			const { token } = res.data;
			setToken(token);
			navigate('/home', { replace: true });
		});
		promise.catch((err) => {
			alert(err.response.data);
		});
	};

	return (
		<Container>
			<Forms onSubmit={loginToApp}>
				<input
					required
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					required
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button type="submit">Entrar</Button>
			</Forms>
			<SignupLink to="/cadastro">Primeira vez? Cadastre-se!</SignupLink>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 26px;
	width: 100%;
	max-width: 1248px;
`;

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	width: 100%;
	max-width: 652px;

	input {
		height: 56px;
		width: 100%;
		font-size: 20px;
		color: #000000;
	}
`;

const Button = styled.button`
	height: 46px;
	width: 100%;
	max-width: 326px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	border: transparent;
	background-color: #a328d6;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	cursor: pointer;
`;

const SignupLink = styled(Link)`
	margin: 36px 0;
	font-weight: 700;
	font-size: 15px;
	color: #ffffff;
`;
