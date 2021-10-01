import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import { adminMenus } from "./adminMenus";

const Sidebar = () => {
	return (
		<Flex w="300px" direction="column">
			{adminMenus.map((item) => {
				return (
					<Flex
						borderBottom="1px solid black"
						direction="row"
						justify="center"
						cursor="pointer"
						alignItems="center">
						{item.icon}
						<Text marginLeft="10px" p="10px 0px" align="center">
							{item.title}
						</Text>
					</Flex>
				);
			})}
		</Flex>
	);
};

export default Sidebar;
