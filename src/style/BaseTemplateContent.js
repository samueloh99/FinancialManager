import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

const BaseTemplateContent = ({ children }) => {
	return (
		<Flex
			pr={{ base: "0px", lg: "120px" }}
			direction="column"
			alignItems="end"
			w="100%">
			<Stack
				w="90%"
				bg="gray.800"
				p="10"
				m={{ base: "0 auto", lg: "0px" }}
				borderRadius={8}
				align={{ base: "center", lg: "start" }}>
				{children}
			</Stack>
		</Flex>
	);
};

export default BaseTemplateContent;
