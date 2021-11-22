import React from "react";

import { useMutation } from "react-query";

import { useForm } from "react-hook-form";

import { api } from "../../../services/api";

import { queryClient } from "../../../services/queryClient";

import {
	Input,
	Checkbox,
	FormControl,
	HStack,
	Button,
	VStack,
	Box,
	useDisclosure,
	SimpleGrid,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	FormErrorMessage,
	FormLabel,
	CheckboxGroup,
	Divider,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

const EditClienteForm = ({ id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const updateCliente = useMutation(
		async (data) => {
			const newData = {
				mkt: data.mkt,
				suport: data.suport,
				socialMedia: data.socialMedia,
				vencimento: data.vencimento,
				cliente: data.cliente,
			};
			const response = await api.put(`/${data._id}`, {
				...newData,
			});

			return response;
		},
		{ onSuccess: () => queryClient.invalidateQueries("clientes") }
	);

	const queryDataRetrieved = queryClient
		.getQueryData("clientes")
		.find((item) => item._id === id);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: queryDataRetrieved,
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
												<NumberInput defaultValue={0} min={1} max={30}>
													<NumberInputField
														{...register("vencimento", {
															required: {
																value: true,
																message: "Campo Obrigatório",
															},
															maxLength: 2,
														})}
													/>
													<NumberInputStepper>
														<NumberIncrementStepper />
														<NumberDecrementStepper />
													</NumberInputStepper>
												</NumberInput>
												<FormErrorMessage>
													{errors.vencimento && errors.vencimento.message}
												</FormErrorMessage>
											</FormControl>
										</VStack>
										<VStack align="start">
											<FormControl isInvalid={errors.cliente}>
												<FormLabel>VALOR</FormLabel>
												<Input
													{...register("valor", {
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
										<VStack w="100%">
											<Button
												w="100%"
												colorScheme="pink"
												type="submit"
												isLoading={isSubmitting}>
												Atualizar Cliente
											</Button>
											<Button w="100%" colorScheme="pink" onClick={onClose}>
												Fechar
											</Button>
										</VStack>
									</SimpleGrid>
								</form>
							</VStack>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditClienteForm;
