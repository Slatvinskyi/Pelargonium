
<script>

    import { Swipe, SwipeItem } from "svelte-swipe";
  
    const swipeConfig = {
      autoplay: false,
      delay: 2000,
      showIndicators: true,
      transitionDuration: 1000,
      defaultIndex: 0,
    };
  </script>
  
  <style>
    .swipe-holder{
      height: 60vh;
      width: 100%;
    }
    img{
      max-width: 100%;
      height: auto;
    }
  </style>
  
  <div class="swipe-holder">
    <Swipe {...swipeConfig}>
      <SwipeItem>
        <img src="./flower2.JPG" alt="">
      </SwipeItem>
  
      <SwipeItem>
        <img src="/banner.JPG" alt="">
      </SwipeItem>
  
      <SwipeItem>
        <img src="/J1.JPG" alt="">
      </SwipeItem>
    </Swipe>
  </div>