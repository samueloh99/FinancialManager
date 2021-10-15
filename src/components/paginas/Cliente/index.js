import React from "react";

import {
	Flex,
	Input,
	Text,
	Icon,
	Stack,
	useDisclosure,
	HStack,
	Spinner,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

import { useClientes } from "../../../services/hooks/useClientes";

import BaseTemplate from "../../../style/BaseTemplateContent";

import ModalComponent from "../../Modal";

import TableData from "./TableData";

import AddClienteForm from "./AddClienteForm";

const Cliente = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data, isLoading, error, isFetching } = useClientes();

	return (
		<BaseTemplate>
			<Flex
				w="100%"
				justifyContent="space-between"
				direction={{ base: "column", lg: "row" }}>
				<Stack
					direction={{ base: "column", lg: "row" }}
					mb={{ base: "60px", lg: "0px" }}
					align="center"
					spacing={10}>
					<Text fontSize="20px" fontWeight="bold" textTransform="uppercase">
						Clientes
					</Text>
					<ModalComponent
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
						modalTitle="Criar Usuario"
						btnText="Adicionar Cliente">
						<AddClienteForm onClose={onClose} />
					</ModalComponent>

					{!isLoading && isFetching && <Spinner size="sm" color="gray.500" />}
				</Stack>
				<HStack m={{ base: "auto", lg: "0 0 0 auto" }}>
					<Flex marginLeft="auto" bg="gray.900" p="5" borderRadius="100px">
						<Input
							variant="unstyled"
							px="4"
							mr="4"
							placeholder="Procurar..."
							_placeholder={{ color: "gray.200" }}
						/>
						<Icon as={AiOutlineSearch} fontSize="20" />
					</Flex>
				</HStack>
			</Flex>
			<Flex w="100%">
				<TableData isLoading={isLoading} error={error} data={data} />
			</Flex>
		</BaseTemplate>
	);
};

export default Cliente;
