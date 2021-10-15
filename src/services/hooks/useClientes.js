import { useQuery } from "react-query";

import { api } from "../api";

async function getClientes() {
	const { data } = await api.get();

	return data;
}

export function useClientes() {
	return useQuery("clientes", getClientes, {
		staleTime: 1000 * 5,
	});
}
