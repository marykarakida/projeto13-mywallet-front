import axios from 'axios';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

export default function Deposit() {
	const navigate = useNavigate();
	const { userData } = useContext(UserContext);

	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	const depositMoney = (event) => {
		event.preventDefault();
		if (
			!window.confirm(
				`Você quer depositar ${Number(value)
					.toFixed(2)
					.replace('.', ',')}?`
			)
		) {
			return;
		}

		const account = { value, description, type: 'deposit' };

		const promise = axios.post(
			'https://my-wallet-a.herokuapp.com/accounts/',
			account,
			{
				headers: { Authorization: `Bearer ${userData.token}` },
			}
		);
		promise
			.then(() => {
				navigate('/home');
			})
			.catch((err) => {
				alert(err.response.data);
			});
	};

	return (
		<Container>
			<Title>
				<h2>Nova entrada</h2>
			</Title>
			<Forms onSubmit={depositMoney}>
				<input
					required
					type="number"
					placeholder="Valor"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					min="0.01"
					step="0.01"
					pattern="\d*"
				/>
				<input
					required
					type="text"
					placeholder="Descrição"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button type="submit">Salvar entrada</Button>
			</Forms>
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

const Title = styled.div`
	margin: 24px 0 40px;
	width: 100%;
	max-width: 652px;

	h2 {
		font-weight: 700;
		font-size: 26px;
		color: #ffffff;
	}
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
		font-family: 'Raleway', sans-serif;
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
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	cursor: pointer;
`;
