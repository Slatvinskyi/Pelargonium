<script>
	import {cart} from "./cart.js";
</script>

<div class="fixed top-0 right-0 flex-initial p-1 text-center bg-white border-gray-500 rounded-md shadow-md">
	<p>There are <strong class="animate-ping">{$cart.length}</strong> types of items in your cart</p>
	<p>Total items<strong class="animate-ping">{$cart.reduce((sum, item) => sum + item.quantity, 0)}</strong></p>
</div>
