<script>
	import {cart } from "./cart.js";
	
	const minusItem = (product) => {
		for(let item of $cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							$cart = $cart
					} else {
							$cart = $cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
	const plusItem = (product) => {
			for(let item of $cart) {
							if(item.id === product.id) {
								product.quantity += 1
								$cart = $cart;
								return;
							}
					}
	}

		$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
	
</script>

<div class="fixed top-0 left-0 flex-initial p-10 text-center bg-white border-gray-500 rounded-md shadow-md cart-list ">
	{#each $cart as item }
		{#if item.quantity > 0}
		<div class="grid grid-cols-3 cart-item">
			<img class="w-16 h-auto p-1 rounded" src={item.image} alt={item.name}/>
			<div>{item.quantity}
				<button class="text-white bg-black rounded-lg animate-pulse w-9 h-9" on:click={() => plusItem(item)}>+</button>
				<button class="text-white bg-black rounded-lg w-9 h-9"on:click={() => minusItem(item)}>-</button>
			</div>
			<p>{item.price * item.quantity} UAH</p>
		</div>
		{/if}
	{/each}
	<div class="p-1 text-center border-double total">
		<h4>Total: {total} UAH</h4>
	</div>
</div>

