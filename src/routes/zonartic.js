import {readable, writable} from "svelte/store";

export const products = readable([
		
		{id: 3, name: "Ellegance Janette", image: "J1.jpg", price: 12, quantity: 1},
		
	])
export const cart = writable([])