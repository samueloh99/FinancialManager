import React from "react";

import {
	Flex,
	Image,
	HStack,
	Icon,
	Box,
	IconButton,
	Text,
	Avatar,
	useBreakpointValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { RiMenuLine, RiNotificationLine, RiUserAddLine } from "react-icons/ri";

import Logo from "../assets/logo.png";

import { useSidebarDrawer } from "../context/SidebarDrawerContext";

const Header = () => {
	const { onOpen } = useSidebarDrawer();

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth="100%"
			h="20"
			m="40px 0px"
			px={{ base: "30px", lg: "120px" }}
			align="center">
			{!isWideVersion && (
				<IconButton
					aria-label="Open navigation"
					fontSize="24"
					variant="unstyled"
					mr="5"
					onClick={onOpen}
					icon={<Icon as={RiMenuLine} />}
				/>
			)}
			<Link to="/">
				<Image width="100px" src={Logo} />
			</Link>
			<Flex align="center" ml="auto">
				<HStack
					spacing={["3", "8"]}
					mx={["2", "8"]}
					pr={["2", "8"]}
					py="1"
					color="gray.300"
					borderRightWidth={1}
					borderColor="gray.700">
					<Icon as={RiNotificationLine} fontSize="20" />
					<Icon as={RiUserAddLine} fontSize="20" />
				</HStack>
				<Flex align="center">
					<Box>
						{isWideVersion && (
							<>
								<Text>Samuel Oh</Text>
								<Text color="gray.300" fontSize="small">
									teste@gmail.com
								</Text>
							</>
						)}
					</Box>
					<Avatar size="md" ml="3" name="Samuel Oh" />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
