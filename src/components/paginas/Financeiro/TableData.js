import React from "react";

import { useMutation } from "react-query";

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

import { DeleteIcon } from "@chakra-ui/icons";

import { apiMovimentacoes } from "../../../services/api";

import { queryClient } from "../../../services/queryClient";

const TableData = ({ isLoading, error, data }) => {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const deleteMovimentacao = useMutation(
		async (id) => {
			const response = await apiMovimentacoes.delete(`/${id}`);

			return response;
		},
		{ onSuccess: () => queryClient.invalidateQueries("movimentacoes") }
	);

	const onDelete = async (props) => {
		await deleteMovimentacao.mutateAsync(props);
		queryClient.resetQueries("movimentacoes");
	};

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
									<Th>Data</Th>
									<Th>Remover</Th>
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
											<Td>
												<Text>{item.date}</Text>
											</Td>
											<Td>
												<DeleteIcon
													cursor="pointer"
													onClick={() => onDelete(item._id)}
												/>
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
