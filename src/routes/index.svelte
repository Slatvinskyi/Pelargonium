<nav class="flex justify-between p-4 border-gray-100 shadow-md frosted ">
	<a href="/" class="flex items-center focus:outline-none max-w-max"
  ><img alt="" class="w-10 rounded h-15" src="/logo.jpeg" />
		<div class="">
			<h2 class="ml-2 font-serif text-3xl tracking-wide text-gray-500">Pelargonium.UA</h2>
			<div class="w-10 h-1 ml-auto bg-gray-500"></div>
		</div>
	</a>
</nav>

    
    <div class="mx-auto my-3 max-w-max">
		<a href="/search" class="flex items-center">
    <img class="w-10 rounded h-15 animate-bounce" src="/flower.jpeg" alt="" />
			<h1 class="py-5 mx-4 font-serif text-xl tracking-wider text-gray-500 lg:text-2xl">
				Zonartic
			</h1>
        </a>
	</div>
  <script>
    
   import CartLength from "./CartLength.svelte" 
    import Products from "./Products.svelte";
    import Cart from "./Cart.svelte";
 
    import {cart} from "./cart.js";
    
  </script>
  
  <CartLength />
  <Products />
  <Cart />



