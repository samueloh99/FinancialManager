import React from "react";

import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

const ModalComponent = ({
	isOpen,
	onOpen,
	onClose,
	children,
	btnText,
	modalTitle,
}) => {
	return (
		<>
			<Button colorScheme="pink" onClick={onOpen}>
				{btnText}
			</Button>

			<Modal size="xl" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg="gray.900">
					<ModalHeader>{modalTitle}</ModalHeader>
					<ModalCloseButton colorScheme="pink" color="pink" />
					<ModalBody bg="gray.900">{children}</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalComponent;
