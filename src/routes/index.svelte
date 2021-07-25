<nav class="flex justify-between p-4 border-gray-100 shadow-md frosted ">
	<a href="/" class="flex items-center focus:outline-none max-w-max"
  ><img alt="" class="w-10 rounded h-15" src="/logo.jpeg" />
		<div class="">
			<h2 class="ml-2 font-serif text-3xl tracking-wide text-gray-500">Pelargonium.UA</h2>
			<div class="w-10 h-1 ml-auto bg-gray-500"></div>
      <nav id="primary_nav_wrap" class="m-6">
        <ul>
          <li class="current-menu-item"><a href="/home">Home</a></li>
          <li><a href="#">Kinds</a>
            <ul>
              <li><a href="/rosebud">Rosebud</a></li>
              <li><a href="/zonartic">Zonartic</a></li>
              <li><a href="#">Sub Menu 3</a></li>
              <li><a href="#">Sub Menu 4</a>
                <ul>
                  <li><a href="#">Deep Menu 1</a>
                    <ul>
                      <li><a href="#">Sub Deep 1</a></li>
                      <li><a href="#">Sub Deep 2</a></li>
                      <li><a href="#">Sub Deep 3</a></li>
                        <li><a href="#">Sub Deep 4</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Deep Menu 2</a></li>
                </ul>
              </li>
              <li><a href="#">Sub Menu 5</a></li>
            </ul>
          </li>
        </ul>
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

  <style>


    #primary_nav_wrap ul
    {
      list-style:none;
      position:relative;
      float:left;
      margin:0;
      padding:0
    }
    
    #primary_nav_wrap ul a
    {
      display:block;
      color:#333;
      text-decoration:none;
      font-weight:700;
      font-size:12px;
      line-height:32px;
      padding:0 15px;
      font-family:"HelveticaNeue","Helvetica Neue",Helvetica,Arial,sans-serif
    }
    
    #primary_nav_wrap ul li
    {
      position:relative;
      float:left;
      margin:0;
      padding:0
    }
    
    #primary_nav_wrap ul li.current-menu-item
    {
      background:#ddd
    }
    
    #primary_nav_wrap ul li:hover
    {
      background:#f6f6f6
    }
    
    #primary_nav_wrap ul ul
    {
      display:none;
      position:absolute;
      top:100%;
      left:0;
      background:#fff;
      padding:0
    }
    
    #primary_nav_wrap ul ul li
    {
      float:none;
      width:200px
    }
    
    #primary_nav_wrap ul ul a
    {
      line-height:120%;
      padding:10px 15px
    }
    
    #primary_nav_wrap ul ul ul
    {
      top:0;
      left:100%
    }
    
    #primary_nav_wrap ul li:hover > ul
    {
      display:block
    }
    </style>
    
  <script>
    
   import CartLength from "./CartLength.svelte" 
    import Products from "./Products.svelte";
    import Cart from "./Cart.svelte";
 
    import {cart} from "./cart.js";
    
  </script>
  
  <CartLength />
  <Products />
  <Cart />



