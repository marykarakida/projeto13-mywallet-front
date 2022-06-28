import styled from 'styled-components';

export default function Navbar() {
	return (
		<Container>
			<Options>
				<Option>
					<ion-icon name="add-circle-outline" />
					<p>Nova entrada</p>
				</Option>
				<Option>
					<ion-icon name="remove-circle-outline" />
					<p>Nova saída</p>
				</Option>
			</Options>
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	margin: 13px 0;
	padding: 0 26px;
	width: 100%;
	max-width: 1248px;
`;

const Options = styled.div`
	display: flex;
	gap: 14px;
	overflow-x: scroll;
`;

const Option = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	padding: 10px;
	height: 114px;
	width: 154px;
	min-width: 154px;
	background-color: #a328d6;
	color: #ffffff;

	ion-icon {
		font-size: 22px;
	}

	p {
		font-weight: 700;
		font-size: 17px;
		word-spacing: 100vw;
	}
`;
