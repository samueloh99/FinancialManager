import React from "react";

import { useForm } from "react-hook-form";

import { useQuery } from "react-query";

import {
	Flex,
	Input,
	Text,
	Icon,
	Table,
	Thead,
	Checkbox,
	useDisclosure,
	FormControl,
	HStack,
	Button,
	VStack,
	Spinner,
	Box,
	SimpleGrid,
	FormErrorMessage,
	FormLabel,
	Tbody,
	CheckboxGroup,
	Divider,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";

import BaseTemplate from "../../../style/BaseTemplateContent";

import { AiOutlineSearch } from "react-icons/ai";

import ModalComponent from "../../Modal";

const Cliente = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data, isLoading, error } = useQuery("clientes", async () => {
		const response = await fetch(
			"https://ironrest.herokuapp.com/samuel-web-customers"
		);

		const data = await response.json();

		return data;
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<BaseTemplate>
			<Flex justifyContent="space-between">
				<HStack direction="row">
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
				</HStack>
				<HStack>
					<ModalComponent
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
						modalTitle="Criar Usuario"
						btnText="Adicionar Cliente">
						<Box>
							<Divider />
							<VStack my="10">
								<form onSubmit={handleSubmit(onSubmit)}>
									<SimpleGrid w="100%" spacing="10">
										<VStack align="start">
											<FormControl isInvalid={errors.cliente}>
												<FormLabel>CLIENTE</FormLabel>
												<Input
													{...register("cliente", {
														required: {
															value: true,
															message: "Campo Obrigatório",
														},
													})}
												/>
												<FormErrorMessage>
													{errors.cliente && errors.cliente.message}
												</FormErrorMessage>
											</FormControl>
										</VStack>

										<CheckboxGroup colorScheme="pink">
											<HStack>
												<Checkbox {...register("mkt")}>Marketing</Checkbox>
												<Checkbox {...register("socialMedia")}>
													Midia Social
												</Checkbox>
												<Checkbox {...register("suport")}>Manuntenção</Checkbox>
											</HStack>
										</CheckboxGroup>
										<VStack align="start">
											<FormControl isInvalid={errors.vencimento}>
												<FormLabel>DATA DE VENCIMENTO</FormLabel>
												<Input
													type="number"
													{...register("vencimento", {
														required: {
															value: true,
															message: "Campo Obrigatório",
														},
													})}
												/>
												<FormErrorMessage>
													{errors.vencimento && errors.vencimento.message}
												</FormErrorMessage>
											</FormControl>
										</VStack>
										<Button colorScheme="pink" type="submit">
											Adicionar cliente
										</Button>
									</SimpleGrid>
								</form>
							</VStack>
						</Box>
					</ModalComponent>
				</HStack>
			</Flex>
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
									<Td>{item.name}</Td>
									<Td>
										<Checkbox isDisabled defaultChecked />
									</Td>
									<Td>
										<Checkbox isDisabled defaultChecked />
									</Td>
									<Td>
										<Checkbox isDisabled defaultChecked />
									</Td>
									<Td>
										<Text>DIA 25</Text>
									</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			)}
		</BaseTemplate>
	);
};

export default Cliente;
