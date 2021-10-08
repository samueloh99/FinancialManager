import React from "react";

import { NavLink } from "react-router-dom";

import { Flex, Text, Box, Stack } from "@chakra-ui/react";

import { adminMenus } from "./data/adminMenus";

const Sidebar = () => {
	// const { asPath } = useRouter();

	return (
		<Box as="aside" w="15%" px="120px">
			<Stack align="start" spacing={5}>
				{adminMenus.map((item, index) => {
					const { link, title, icon } = item;
					return (
						<NavLink
							key={index}
							exact={true}
							activeStyle={{
								fontWeight: "bold",
								color: "#ED64A6",
							}}
							to={link}>
							<Flex align="center">
								{icon}
								<Text ml="3">{title}</Text>
							</Flex>
						</NavLink>
					);
				})}
			</Stack>
		</Box>
	);
};

export default Sidebar;
