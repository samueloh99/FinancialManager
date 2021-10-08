import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

export const adminMenus = [
	{
		title: "Home",
		icon: <AiOutlineHome size={20} />,
		link: "/",
	},
	{
		title: "Clientes",
		icon: <AiOutlineUser size={20} />,
		link: "/clientes",
	},
	{
		title: "Financeiros",
		icon: <MdAttachMoney size={20} />,
		link: "/financeiros",
	},
];
