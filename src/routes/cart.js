import {readable, writable} from "svelte/store";

export const products = readable([
		{id: 1, name: "Viva Rosita", image: "/flower2.JPG", price: 100, quantity: 1},
		{id: 2, name: "Viva Rosita", image: "/flower2.JPG", price: 100, quantity: 1},
		{id: 3, name: "Viva Rosita", image: "/flower2.JPG", price: 100, quantity: 1},
		

		
	])
export const cart = writable([])
export const address = writable({
		name: "",
		email: "",
		phone: "",
		street: "",
		city: "",
	})