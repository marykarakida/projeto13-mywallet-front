import { useState, createContext } from 'react';

const UserContext = createContext();

export function UserContextProvider(props) {
	const { children } = props;

	const [userData, setUserData] = useState('');

	const locallyStoredUserData = localStorage.getItem('userData');

	if (locallyStoredUserData === null && userData !== '') {
		localStorage.setItem('userData', JSON.stringify(userData));
	} else if (locallyStoredUserData !== null && userData === '') {
		setUserData(JSON.parse(locallyStoredUserData));
	}

	return (
		<UserContext.Provider
			value={{
				userData,
				setUserData,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;
