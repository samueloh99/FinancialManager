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
} from "@chakra-ui/react";

const AddClienteForm = ({ onClose }) => {
	const createCliente = useMutation(
		async (data) => {
			const response = await api.post("", {
				...data,
			});

			return response;
		},
		{ onSuccess: () => queryClient.invalidateQueries("clientes") }
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		await createCliente.mutateAsync(data);
		onClose();
	};
	return (
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
								<Checkbox {...register("socialMedia")}>Midia Social</Checkbox>
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
						<Button colorScheme="pink" type="submit" isLoading={isSubmitting}>
							Adicionar cliente
						</Button>
					</SimpleGrid>
				</form>
			</VStack>
		</Box>
	);
};

export default AddClienteForm;
