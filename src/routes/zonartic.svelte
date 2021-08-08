  
<script>
    import {products, cart} from "./cart.js";
  

const addToCart = (product) => {
    for(let item of $cart) {
            if(item.id === product.id) {
                product.quantity += 1
                $cart = $cart;
                return;
            }
    }
    $cart = [...$cart, product]
}
</script>

<h1>Zonartic</h1>
<div class="grid product-list justify-items-center">
{#each $products as product}
<div>
    <div class="bg-center bg-no-repeat bg-contain shadow-md h-80 w-96" style="background-image: url({product.image})"></div>
    <h4>{product.name}</h4>
    <p>{product.price} UAH</p>
    <button class="flex items-center justify-center w-24 text-white bg-black rounded-md shadow-md animate-pulse mx-auto" on:click={() => addToCart(product)}>Add to cart</button>
</div>
{/each}
</div>