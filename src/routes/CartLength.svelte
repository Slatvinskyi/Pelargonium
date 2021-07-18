<script>
	import {cart} from "./cart.js";
</script>

<div class="fixed top-0 right-0 grid-flow-col p-5 text-center border-gray-500 rounded-md shadow-md">
	<p>There are <strong>{$cart.length}</strong> types of items in your cart</p>
	<p>Total items
	  <strong>{$cart.reduce((sum, item) => sum + item.quantity, 0)}</strong>
	</p>
  </div>