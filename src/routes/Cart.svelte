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
<div class="fixed left-0 inline-flex top-32">
	<div class="relative inline-block dropdown">
		<button class="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
			<span class="mr-1"></span>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
			<p>  <strong class="animate-ping">{$cart.reduce((sum, item) => sum + item.quantity, 0)}</strong></p>
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






