import React from "react";

import {
	Flex,
	Input,
	Text,
	Icon,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

import BaseTemplate from "../../style/BaseTemplateContent";

const Financeiro = () => {
	return (
		<BaseTemplate>
			<Text>Financeiro</Text>
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
			<Table m="30px 0px" variant="simple">
				<Thead>
					<Tr>
						<Th>Cliente</Th>
						<Th>Situação 1</Th>
						<Th>Situação 2</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>LaCleo</Td>
						<Td>xxxxx</Td>
						<Td>xxxxxxx</Td>
					</Tr>
				</Tbody>
			</Table>
		</BaseTemplate>
	);
};

export default Financeiro;
