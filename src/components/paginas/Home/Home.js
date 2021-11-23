import React from "react";

import {
	Flex,
	Heading,
	Box,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	StatGroup,
} from "@chakra-ui/react";

import BaseTemplate from "../../../style/BaseTemplateContent";

import { useClientes } from "../../../services/hooks/useClientes";

import { useMovimentacoes } from "../../../services/hooks/useMovimentacao";

const Home = () => {
	const { data } = useClientes();

	const { data: dataMovimentacoes } = useMovimentacoes();

	return (
		<BaseTemplate>
			<Flex direction="column" w="100%">
				<Heading>Dashboard</Heading>
				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="220px"
					align="flex-start"
					mt="10">
					<Box p="7" bg="gray.900" borderRadius={8}>
						<Heading fontSize={{ base: "14px", lg: "20px" }} mb="5">
							Conta Bradesco
						</Heading>
						<StatGroup>
							<Stat fontSize={{ base: "12px", lg: "18px" }}>
								<StatLabel>Saldo</StatLabel>
								<StatNumber>R$ 345,670</StatNumber>
							</Stat>
						</StatGroup>
					</Box>
					<Box p="7" bg="gray.900" borderRadius={8}>
						<Heading fontSize={{ base: "14px", lg: "20px" }} mb="5">
							A Receber
						</Heading>
						<StatGroup>
							<Stat>
								<StatLabel>Valor</StatLabel>
								<StatNumber>R$ 345,670</StatNumber>
							</Stat>
						</StatGroup>
					</Box>
					<Box p="7" bg="gray.900" borderRadius={8}>
						<Heading fontSize={{ base: "14px", lg: "20px" }} mb="5">
							Clientes
						</Heading>
						<StatGroup flexDirection="column-reverse">
							<Stat>
								<StatLabel>Total</StatLabel>
								<StatNumber>
									R$
									{data && data.reduce((a, c) => a + parseInt(c.valor), 0)}
								</StatNumber>
							</Stat>
							<Stat>
								<StatLabel>Quantidade</StatLabel>
								<StatNumber>{data && data.length}</StatNumber>
							</Stat>
						</StatGroup>
					</Box>
					<Box p="7" bg="gray.900" borderRadius={8}>
						<Heading fontSize={{ base: "14px", lg: "20px" }} mb="5">
							Despesa Fixo
						</Heading>
						<StatGroup>
							<Stat>
								<StatLabel>Total</StatLabel>
								<StatNumber>
									R$
									{dataMovimentacoes &&
										dataMovimentacoes.reduce(
											(a, c) => a + parseInt(c.valor),
											0
										)}
								</StatNumber>
							</Stat>
						</StatGroup>
					</Box>
				</SimpleGrid>
			</Flex>
		</BaseTemplate>
	);
};

export default Home;
