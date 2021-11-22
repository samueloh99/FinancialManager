import { createContext, useState } from "react";

import { apiUsers } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [userData, setUserData] = useState();
	const [isAuth, setIsAuth] = useState(false);

	async function signIn({ email, senha }) {
		try {
			const response = await apiUsers.get();
			const dataResp = response.data;
			const verifyEmail = dataResp.find((item) => item.email === email);
			const verifyPassword = dataResp.find((item) => item.senha === senha);

			if (verifyEmail && verifyPassword) {
				setIsAuth(true);
				setUserData(dataResp);
			} else {
				setIsAuth(false);
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<AuthContext.Provider value={{ signIn, userData, isAuth }}>
			{children}
		</AuthContext.Provider>
	);
}
