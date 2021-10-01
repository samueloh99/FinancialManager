import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { chakraTheme } from "./style/chakraTheme";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={chakraTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
