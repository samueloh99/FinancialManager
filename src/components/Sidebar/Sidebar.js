import React from "react";

import { NavLink } from "react-router-dom";

import { adminMenus } from "../data/adminMenus";

import { Flex, Text, Stack } from "@chakra-ui/react";

const SidebarNav = () => {
	return (
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
	);
};

export default SidebarNav;
