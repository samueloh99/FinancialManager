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

import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";

import { api } from "../../../services/api";

import { queryClient } from "../../../services/queryClient";

import EditClienteForm from "./EditClienteForm";

const TableData = ({ isLoading, error, data }) => {
	const deleteCliente = useMutation(
		async (id) => {
			const response = await api.delete(`/${id}`);

			return response;
		},
		{ onSuccess: () => queryClient.invalidateQueries("clientes") }
	);

	const onDelete = async (props) => {
		await deleteCliente.mutateAsync(props);
		queryClient.resetQueries("clientes");
	};

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
				<Table m="30px 0px" variant="simple">
					<Thead>
						<Tr>
							<Th>Cliente</Th>
							{isWideVersion && (
								<>
									<Th>Manuntenção</Th>
									<Th>Marketing</Th>
									<Th>Midia Social</Th>
									<Th>Data Vencimento</Th>
									<Th>Apagar</Th>
								</>
							)}
							<Th>Editar</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data.map((item, index) => {
							return (
								<Tr key={index}>
									<Td>{item.cliente}</Td>
									{isWideVersion && (
										<>
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
											<Td>
												<DeleteIcon
													cursor="pointer"
													onClick={() => onDelete(item._id)}
												/>
											</Td>
										</>
									)}
									<Td>
										<EditClienteForm id={item._id} />
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
