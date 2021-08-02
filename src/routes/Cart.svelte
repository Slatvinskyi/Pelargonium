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
<div class="fixed left-0 inline-flex top-24">
	<div class="relative inline-block dropdown">
		<button class="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
			<span class="mr-1">buy</span>
			<svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
		</button>
		<ul class="absolute hidden pt-1 text-gray-700 dropdown-menu">
			<li class=""><a class="flex-wrap block w-64 h-auto p-1 bg-gray-200 rounded-b hover:bg-gray-400" href="#">
				<div class="flex-initial p-1 text-center bg-white border-gray-500 rounded-md shadow-md cart-list ">
				{#each $cart as item }
					{#if item.quantity > 0}
					<div class="grid flex-wrap-reverse grid-cols-3 cart-item">
						<img class="p-1" src={item.image} alt={item.name}/>
						<div>{item.quantity}
							<button class="w-4 h-auto text-white bg-black rounded-lg animate-pulse" on:click={() => plusItem(item)}>+</button>
							<button class="w-4 h-auto text-white bg-black rounded-lg"on:click={() => minusItem(item)}>-</button>
						</div>
						<p>{item.price * item.quantity} UAH</p>
					</div>
					{/if}
				{/each}
				<div class="p-1 text-center border-double total">
					<h4>Total: {total} UAH</h4>
					<button class="flex items-center justify-center w-1/2 text-white bg-black rounded-md shadow-md animate-pulse"><a href="/contact">Order</a></button>
				</div>
			</div>
		</a>
	</li>
</ul>
</div>
</div>
<div class="p-10">
	
</div>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>






