import { useState } from 'react';
import styled from 'styled-components';

export default function Withdraw() {
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	const withdrawMoney = (event) => {
		event.preventDefault();
	};

	return (
		<Container>
			<Title>
				<h2>Nova saída</h2>
			</Title>
			<Forms onSubmit={withdrawMoney}>
				<input
					required
					type="text"
					placeholder="Valor"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<input
					required
					type="text"
					placeholder="Descrição"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button type="submit">Salvar saída</Button>
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
