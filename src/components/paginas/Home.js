import React from "react";

import {
	Flex,
	Text,
	Input,
	Icon,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

import BaseTemplate from "../../style/BaseTemplateContent";

const Home = () => {
	return (
		<BaseTemplate>
			<Text>HOME</Text>
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

export default Home;
