import styled from 'styled-components';
// import { useState } from 'react';

export default function Ledger() {
	// const [accountList, setAccountList] = useState([]);

	// const showAccountsState = () => {
	// 	if (accountList.length === 0) {
	// 		return (
	// 			<NoAccountsMessage>
	// 				Não há registros de entrada ou saída
	// 			</NoAccountsMessage>
	// 		);
	// 	}
	// 	return '';
	// };

	// const accounts = showAccountsState();

	return (
		<Container>
			<Accounts>
				<AccountList>
					<Account type="negative">
						<p>28/06</p>
						<p>Comer</p>
						<p>30,00</p>
					</Account>
					<Account type="positive">
						<p>28/06</p>
						<p>Freela</p>
						<p>30,00</p>
					</Account>
				</AccountList>
				{/* <NoAccountsMessage>
					Não há registros de entrada ou saída
				</NoAccountsMessage> */}
				<Balance>
					<p>SALDO</p>
					<p>0</p>
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
		color: ${(props) =>
			props.type === 'positive' ? '#03AC00' : '#C70000'};
	}
`;

// const NoAccountsMessage = styled.h3`
// 	margin: auto;
// 	padding: 0 70px;
// 	text-align: center;
// 	color: green;
// `;

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
		color: #03ac00;
	}
`;
