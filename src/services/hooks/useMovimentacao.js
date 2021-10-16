import { useQuery } from "react-query";

import { apiMovimentacoes } from "../api";

async function getMovimentacoes() {
	const { data } = await apiMovimentacoes.get();
	console.log(data);

	return data;
}

export function useMovimentacoes() {
	return useQuery("movimentacoes", getMovimentacoes, {
		staleTime: 1000 * 5,
	});
}
