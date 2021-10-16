import React from "react";

import {
	Flex,
	Text,
	Table,
	Thead,
	Spinner,
	useBreakpointValue,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";

import EditFinanceiroForm from "./EditFinanceiroForm";

const TableData = ({ isLoading, error, data }) => {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

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
				<Table m="30px 0px" variant="simple" size={isWideVersion ? "lg" : "sm"}>
					<Thead>
						<Tr fontSize={{ base: "12px", lg: "18px" }}>
							<Th>Título</Th>
							<Th>Entrada</Th>
							<Th>Saída</Th>
							{isWideVersion && (
								<>
									<Th>Responsável</Th>
									<Th>Data</Th>
									<Th>Editar</Th>
								</>
							)}
						</Tr>
					</Thead>
					<Tbody>
						{data.map((item, index) => {
							return (
								<Tr key={index} fontSize={{ base: "12px", lg: "18px" }}>
									<Td>{item.titulo}</Td>
									<Td>R$ {item.tipo === "entrada" ? item.valor : 0}</Td>
									<Td>R$ {item.tipo === "saida" ? item.valor : 0}</Td>
									{isWideVersion && (
										<>
											<Td>{item.responsavel}</Td>
											<Td>
												<Text>{item.date}</Text>
											</Td>
											<Td>
												<EditFinanceiroForm id={item._id} />
											</Td>
										</>
									)}
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
