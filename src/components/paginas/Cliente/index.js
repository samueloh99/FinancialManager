import React from "react";

import {
	Flex,
	Input,
	Text,
	Icon,
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
			<Flex justifyContent="space-between">
				<HStack direction="row" align="center">
					<Text>Clientes</Text>
					<Flex marginLeft="auto">
						<Input
							variant="unstyled"
							px="4"
							mr="4"
							placeholder="Procurar..."
							_placeholder={{ color: "gray.400" }}
						/>
						<Icon as={AiOutlineSearch} fontSize="20" />
					</Flex>
					{!isLoading && isFetching && <Spinner size="sm" color="gray.500" />}
				</HStack>
				<HStack>
					<ModalComponent
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
						modalTitle="Criar Usuario"
						btnText="Adicionar Cliente">
						<AddClienteForm onClose={onClose} />
					</ModalComponent>
				</HStack>
			</Flex>
			<TableData isLoading={isLoading} error={error} data={data} />
		</BaseTemplate>
	);
};

export default Cliente;
