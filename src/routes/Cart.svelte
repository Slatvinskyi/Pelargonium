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

<div class="cart-list">
	{#each $cart as item }
		{#if item.quantity > 0}
		<div class="grid grid-cols-3 cart-item">
			<img width="60" src={item.image} alt={item.name}/>
			<div>{item.quantity}
				<button on:click={() => plusItem(item)}>+</button>
				<button on:click={() => minusItem(item)}>-</button>
			</div>
			<p>{item.price * item.quantity}</p>
		</div>
		{/if}
	{/each}
	<div class="p-1 text-center border-double total">
		<h4>Total:{total} UAH</h4>
	</div>
</div>

