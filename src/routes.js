import { Flex } from "@chakra-ui/react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/paginas/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/index";
import Cliente from "./components/paginas/Cliente/index";
import Financeiro from "./components/paginas/Financeiro/index";

const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Flex h="100vh">
				<Sidebar />
				<Route component={Home} path="/" exact />
				<Route component={Cliente} path="/clientes" />
				<Route component={Financeiro} path="/financeiros" />
			</Flex>
		</BrowserRouter>
	);
};

export default Routes;
