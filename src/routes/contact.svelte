
<script>
	import {cart, address} from "./cart.js";
	
		const checkOut = () => {
		alert(JSON.stringify($cart))
		alert(JSON.stringify($address))
	}
	
</script>


<div class="shipping-address bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl mx-auto">
	<h1>Order</h1>
	<div>
		<div class="mb-4">
			  <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
				Name
			  </label>
			  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" bind:value={$address.name}>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
				  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" bind:value={$address.email} >
				</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="phone">Phone</label>
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="phone" bind:value={$address.phone} >
			</div>
				  <div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
					<textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="address" bind:value={$address.street} cols="24" rows="6"></textarea>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="city">City</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="city" bind:value={$address.city}>
				</div>
		<div>
			<button class="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" on:click={checkOut}>Checkout</button>
		</div>
		
	</div>
	
	<!--<div class="current-address bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
		<p>{$address.name}</p>
		<p>{$address.email}</p>
		<p>{$address.phone}</p>
		<p>{$address.street}</p>
		<p>{$address.city}</p>
	</div>-->
</div>



