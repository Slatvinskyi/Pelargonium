import {readable, writable} from "svelte/store";

export const products = readable([
		
		{id: 2, name: "Australian Pink", image: "/banner.jpg", price: 11, quantity: 1},
		
		
	])
export const cart = writable([])