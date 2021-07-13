import {readable, writable} from "svelte/store";

export const products = readable([
		{id: 1, name: "Viva Rosita", image: "/flower2.jpg", price: 100, quantity: 1},
		{id: 2, name: "Australian Pink", image: "/banner.jpg", price: 11, quantity: 1},
		{id: 3, name: "Ellegance Janette", image: "J1.jpg", price: 12, quantity: 1},
		
	])
export const cart = writable([])
export const address = writable({
		name: "",
		email: "",
		phone: "",
		street: "",
		city: "",
	})