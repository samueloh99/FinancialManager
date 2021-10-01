import React from "react";

import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Clientes from "./Clientes";

const Home = () => {
	return (
		<Flex h="100vh" direction="column">
			<Header />
			<Flex h="100%">
				<Sidebar />
				<Clientes />
			</Flex>
		</Flex>
	);
};

export default Home;
