import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

const BaseTemplateContent = ({ children }) => {
	return (
		<Flex pr="120px" direction="column" alignItems="end" w="100%">
			<Stack w="90%" bg="gray.800" p="10" borderRadius={8}>
				{children}
			</Stack>
		</Flex>
	);
};

export default BaseTemplateContent;
