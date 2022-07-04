import axios from 'axios';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';

import UserContext from '../contexts/UserContext';

export default function Ledger() {
	const { userData } = useContext(UserContext);

	const [accountList, setAccountList] = useState(null);
	const [balance, setBalance] = useState(null);

	useEffect(() => {
		const promise = axios.get('http://localhost:5000/accounts/', {
			headers: { Authorization: `Bearer ${userData.token}` },
		});
		promise
			.then((res) => {
				const { accounts, totalBalance } = res.data;
				setAccountList(accounts);
				setBalance(totalBalance);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}, []);

	const showAccountsState = () => {
		if (accountList === null) {
			return (
				<NoAccountsMessage>
					Não há registros de entrada ou saída
				</NoAccountsMessage>
			);
		}

		return (
			<AccountList>
				{accountList.map(({ _id, type, date, value, description }) => (
					<Account key={_id} type={type} id={_id}>
						<p>{date}</p>
						<p>{description}</p>
						<p>{value}</p>
					</Account>
				))}
			</AccountList>
		);
	};

	const accounts = showAccountsState();

	return (
		<Container>
			<Accounts>
				{accounts}
				<Balance balance={balance}>
					<p>SALDO</p>
					<p>{Math.abs(balance)}</p>
				</Balance>
			</Accounts>
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	top: 72px;
	bottom: 142px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 26px;
	width: 100%;
	max-width: 1248px;
`;

const Accounts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px 0 12px;
	height: 100%;
	width: 100%;
	background-color: #ffffff;
`;

const AccountList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 6px 0;
	overflow-y: scroll;
`;

const Account = styled.div`
	display: flex;
	gap: 10px;
	padding: 0 12px;
	width: 100%;
	font-size: 16px;

	p:nth-of-type(1) {
		color: #c6c6c6;
	}

	p:nth-of-type(2) {
		color: #000000;
		word-wrap: break-word;
	}

	p:nth-of-type(3) {
		margin-left: auto;
		color: ${(props) => (props.type === 'deposit' ? '#03AC00' : '#C70000')};
	}
`;

const NoAccountsMessage = styled.h3`
	margin: auto;
	padding: 0 70px;
	text-align: center;
	color: #868686;
`;

const Balance = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 12px;
	width: 100%;
	font-size: 16px;

	p:nth-of-type(1) {
		font-weight: 700;
		color: #000000;
	}

	p:nth-of-type(2) {
		color: ${(props) => (props.balance >= 0 ? '#03AC00' : '#C70000')};
	}
`;
