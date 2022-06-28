import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import WithdrawPage from './pages/WithdrawPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/cadastro" element={<SignupPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/deposito" element={<DepositPage />} />
				<Route path="/saque" element={<WithdrawPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
