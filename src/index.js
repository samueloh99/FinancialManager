import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";

import { chakraTheme } from "./style/chakraTheme";

import { queryClient } from "../src/services/queryClient";

import { SidebarDrawerProvider } from "./context/SidebarDrawerContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider resetCSS theme={chakraTheme}>
					<SidebarDrawerProvider>
						<App />
					</SidebarDrawerProvider>
				</ChakraProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
