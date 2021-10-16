import React from "react";

import { useMutation } from "react-query";

import { useForm } from "react-hook-form";

import { apiMovimentacoes } from "../../../services/api";

import { queryClient } from "../../../services/queryClient";

import {
	Input,
	FormControl,
	HStack,
	Button,
	Text,
	VStack,
	useDisclosure,
	SimpleGrid,
	FormErrorMessage,
	FormLabel,
	Divider,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

const EditFinanceiroForm = ({ id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const updateCliente = useMutation(
		async (data) => {
			const newData = {
				titulo: data.titulo,
				valor: data.valor,
				tipo: data.tipo,
				date: data.date,
				responsavel: data.responsavel,
			};
			const response = await apiMovimentacoes.put(`/${data._id}`, {
				...newData,
			});

			return response;
		},
		{ onSuccess: () => queryClient.invalidateQueries("movimentacoes") }
	);

	const queryDataRetrieved = queryClient
		.getQueryData("movimentacoes")
		.find((item) => item._id === id);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			titulo: queryDataRetrieved.titulo,
			valor: parseInt(queryDataRetrieved.valor),
			...queryDataRetrieved,
		},
	});

	const onSubmit = async (data) => {
		await updateCliente.mutateAsync(data);
		onClose();
	};
	return (
		<>
			<Button onClick={onOpen} colorScheme="pink">
				Editar
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size="xl">
				<ModalOverlay />
				<ModalContent bg="gray.900">
					<ModalHeader>Editar Cliente</ModalHeader>
					<ModalCloseButton />
					<ModalBody bg="gray.900">
						<Divider />

						<VStack my="10">
							<form onSubmit={handleSubmit(onSubmit)}>
								<SimpleGrid w="100%" spacing="10">
									<VStack align="start">
										<FormControl isInvalid={errors.titulo}>
											<FormLabel>Titulo</FormLabel>
											<Input
												{...register("titulo", {
													required: {
														value: true,
														message: "Campo Obrigatório",
													},
												})}
											/>
											<FormErrorMessage>
												{errors.titulo && errors.titulo.message}
											</FormErrorMessage>
										</FormControl>
									</VStack>

									<HStack alignItems="end" justifyItems="end" spacing="6">
										<FormControl isInvalid={errors.valor}>
											<FormLabel>Valor</FormLabel>
											<Input
												type="number"
												{...register("valor", {
													required: {
														value: true,
														message: "Campo Valor Obrigatório",
													},
												})}
											/>
											<FormErrorMessage>
												{errors.valor && errors.valor.message}
											</FormErrorMessage>
										</FormControl>
										<FormControl isInvalid={errors.tipo}>
											<VStack alignItems="center" justifyItems="center">
												<HStack w="100%">
													<Text>Entrada</Text>
													<input
														{...register("tipo", {
															required: {
																value: true,
																message: "Campo Obrigatório",
															},
														})}
														type="radio"
														value="entrada"
													/>
												</HStack>
												<HStack w="100%">
													<Text>Saida</Text>
													<input
														{...register("tipo", {
															required: {
																value: true,
																message: "Campo Obrigatório",
															},
														})}
														type="radio"
														value="saida"
													/>
												</HStack>
												<FormErrorMessage>
													{errors.tipo && errors.tipo.message}
												</FormErrorMessage>
											</VStack>
										</FormControl>
									</HStack>

									<VStack align="start">
										<FormControl isInvalid={errors.responsavel}>
											<FormLabel>Responsável</FormLabel>
											<Input
												{...register("responsavel", {
													required: {
														value: true,
														message: "Campo Obrigatório",
													},
												})}
											/>
											<FormErrorMessage>
												{errors.responsavel && errors.responsavel.message}
											</FormErrorMessage>
										</FormControl>
									</VStack>
									<VStack align="start">
										<FormControl isInvalid={errors.date}>
											<FormLabel>DATA</FormLabel>
											<Input
												type="date"
												{...register("date", {
													required: {
														value: true,
														message: "Campo Obrigatório",
													},
												})}
											/>
											<FormErrorMessage>
												{errors.date && errors.date.message}
											</FormErrorMessage>
										</FormControl>
									</VStack>
									<Button
										colorScheme="pink"
										type="submit"
										isLoading={isSubmitting}>
										Atualizar
									</Button>
								</SimpleGrid>
							</form>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditFinanceiroForm;
