<script>

import "../app.postcss";
import Cart from "./Cart.svelte";
import Nav from "./Nav.svelte";
import CartLength from "./CartLength.svelte" 

</script>
<CartLength />
<Nav />
<Cart />
<slot></slot>