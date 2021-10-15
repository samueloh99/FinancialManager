import { createContext, useContext } from "react";

import { useDisclosure } from "@chakra-ui/react";

const SidebarDrawerContext = createContext({});

export function SidebarDrawerProvider({ children }) {
	const discloure = useDisclosure();

	return (
		<SidebarDrawerContext.Provider value={discloure}>
			{children}
		</SidebarDrawerContext.Provider>
	);
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
