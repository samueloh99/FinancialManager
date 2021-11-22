import React, { useState, useCallback, useContext } from "react";

import * as yup from "yup";

import { useForm } from "react-hook-form";

import {
	Flex,
	Heading,
	Button,
	Input,
	FormLabel,
	Box,
	Icon,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { AuthContext } from "../../../context/AuthContext";

const useYupValidationResolver = (validationSchema) =>
	useCallback(
		async (data) => {
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false,
				});

				return {
					values,
					errors: {},
				};
			} catch (errors) {
				return {
					values: {},
					errors: errors.inner.reduce(
						(allErrors, currentError) => ({
							...allErrors,
							[currentError.path]: {
								type: currentError.type ?? "validation",
								message: currentError.message,
							},
						}),
						{}
					),
				};
			}
		},
		[validationSchema]
	);

const validationSchema = yup.object({
	email: yup.string().required("Required"),
	senha: yup.string().required("Required"),
});

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const [show, setShow] = useState(false);

	const handleClick = () => setShow(!show);

	const resolver = useYupValidationResolver(validationSchema);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ resolver });
	return (
		<Flex
			direction="column"
			w="100%"
			h="100vh"
			justifyContent="center"
			alignItems="center"
			border="1px solid red">
			<Heading>LOGIN</Heading>
			<Box mt="10">
				<form onSubmit={handleSubmit((data) => signIn(data))}>
					<FormLabel>Email</FormLabel>
					<Input _focus={{ boxShadow: "none" }} {...register("email")} />
					<FormLabel>Senha</FormLabel>
					<InputGroup size="md">
						<Input
							_focus={{ boxShadow: "none" }}
							{...register("senha")}
							pr="4.5rem"
							type={show ? "text" : "password"}
						/>
						<InputRightElement width="4.5rem">
							<Button
								h="1.75rem"
								size="sm"
								onClick={handleClick}
								_focus={{ boxShadow: "none" }}>
								{show ? (
									<Icon fontSize={18} as={AiOutlineEye} />
								) : (
									<Icon fontSize={18} as={AiOutlineEyeInvisible} />
								)}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Button type="submit" w="100%" mt="10" colorScheme="pink">
						ENTRAR
					</Button>
				</form>
			</Box>
		</Flex>
	);
};

export default Login;
