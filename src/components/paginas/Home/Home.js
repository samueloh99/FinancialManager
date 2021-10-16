import React from "react";

import {
	Flex,
	Heading,
	Box,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	StatGroup,
} from "@chakra-ui/react";

import BaseTemplate from "../../../style/BaseTemplateContent";

const Home = () => {
	return (
		<BaseTemplate>
			<Flex direction="column" w="100%">
				<Heading>Dashboard</Heading>
				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="320px"
					align="flex-start"
					mt="10">
					<Box p="8" bg="gray.900" borderRadius={8}>
						<Heading fontSize="20px" mb="5">
							Conta Bradesco
						</Heading>
						<StatGroup>
							<Stat>
								<StatLabel>Saldo</StatLabel>
								<StatNumber>R$ 345,670</StatNumber>
							</Stat>
						</StatGroup>
					</Box>
					<Box p="8" bg="gray.900" borderRadius={8}>
						<Heading fontSize="20px" mb="5">
							A Receber
						</Heading>
						<StatGroup>
							<Stat>
								<StatLabel>Valor</StatLabel>
								<StatNumber>R$ 345,670</StatNumber>
							</Stat>
						</StatGroup>
					</Box>
					<Box p="8" bg="gray.900" borderRadius={8}>
						<Heading fontSize="20px" mb="5">
							Clientes
						</Heading>
						<StatGroup>
							<Stat>
								<StatLabel>Total</StatLabel>
								<StatNumber>R$ 345,670</StatNumber>
							</Stat>
						</StatGroup>
					</Box>
					<Box p="8" bg="gray.900" borderRadius={8}>
						<Heading fontSize="20px" mb="5">
							Despesa Fixo
						</Heading>
						<StatGroup>
							<Table size="sm">
								<Thead>
									<Tr>
										<Th>Título</Th>
										<Th isNumeric>Valor</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>Agua</Td>
										<Td isNumeric>R$ 200,00</Td>
									</Tr>
									<Tr>
										<Td>Salario Gusta</Td>
										<Td isNumeric>R$2000,00</Td>
									</Tr>
									<Tr>
										<Td>Salario Gusta</Td>
										<Td isNumeric>R$2000,00</Td>
									</Tr>
								</Tbody>
							</Table>
						</StatGroup>
					</Box>
				</SimpleGrid>
			</Flex>
		</BaseTemplate>
	);
};

export default Home;
