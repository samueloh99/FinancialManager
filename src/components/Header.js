import React from "react";

import { Flex, Image } from "@chakra-ui/react";

import Logo from "../assets/logo.png";

const Header = () => {
	return (
		<Flex w="100%" h="170px" bg="black.700">
			<Image width="200px" src={Logo} />
		</Flex>
	);
};

export default Header;
