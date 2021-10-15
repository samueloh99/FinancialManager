import React from "react";

import {
	Flex,
	Text,
	Table,
	Thead,
	Spinner,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const TableData = ({ isLoading, error, data }) => {
	return (
		<>
			{isLoading ? (
				<Flex justify="center">
					<Spinner />
				</Flex>
			) : error ? (
				<Flex justify="center">
					<Text>Falha ao obter os dados</Text>
				</Flex>
			) : (
				<Table m="30px 0px" variant="simple">
					<Thead>
						<Tr>
							<Th>Cliente</Th>
							<Th>Manuntenção</Th>
							<Th>Marketing</Th>
							<Th>Midia Social</Th>
							<Th>Data Vencimento</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data.map((item, index) => {
							return (
								<Tr key={index}>
									<Td>{item.cliente}</Td>
									<Td>
										{item.suport ? (
											<CheckIcon color="green" />
										) : (
											<CloseIcon color="red" />
										)}
									</Td>
									<Td>
										{item.mkt ? (
											<CheckIcon color="green" />
										) : (
											<CloseIcon color="red" />
										)}
									</Td>
									<Td>
										{item.socialMedia ? (
											<CheckIcon color="green" />
										) : (
											<CloseIcon color="red" />
										)}
									</Td>
									<Td>
										<Text>DIA {item.vencimento}</Text>
									</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			)}
		</>
	);
};

export default TableData;
