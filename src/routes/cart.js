import {readable, writable} from "svelte/store";

export const products = readable([
		{id: 1, name: "Viva Rosita", image: "/flower2.JPG", price: 100, quantity: 1},
		{id: 2, name: "Australian Pink", image: "/banner.JPG", price: 11, quantity: 1},
		{id: 3, name: "Ellegance Janette", image: "J1.JPG", price: 12, quantity: 1},
		
	])
export const cart = writable([])
export const address = writable({
		name: "",
		email: "",
		phone: "",
		street: "",
		city: "",
	})