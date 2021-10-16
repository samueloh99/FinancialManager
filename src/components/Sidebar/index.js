import React from "react";

import {
	DrawerContent,
	DrawerOverlay,
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerBody,
	DrawerHeader,
	useBreakpointValue,
} from "@chakra-ui/react";

import SidebarNav from "./Sidebar";

import { useSidebarDrawer } from "../../context/SidebarDrawerContext";

const Sidebar = () => {
	const { isOpen, onClose } = useSidebarDrawer();

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false,
	});

	if (isDrawerSidebar) {
		return (
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent
						bg="gray.800"
						color="white"
						alignSelf="center"
						justifyContent="center">
						<DrawerCloseButton />
						<DrawerHeader>Navegação</DrawerHeader>
						<DrawerBody>
							<SidebarNav onClose={onClose} />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);
	}

	return (
		<Box as="aside" w="15%" px="120px">
			<SidebarNav onClose={onClose} />
		</Box>
	);
};

export default Sidebar;
