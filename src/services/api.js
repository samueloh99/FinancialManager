import axios from "axios";

export const api = axios.create({
	baseURL: "https://ironrest.herokuapp.com/samuel-web-customers",
});

export const apiMovimentacoes = axios.create({
	baseURL: "https://ironrest.herokuapp.com/samuel-web-movimentacoes",
});

export const apiUsers = axios.create({
	baseURL: "https://ironrest.herokuapp.com/samuel-web-users",
});
