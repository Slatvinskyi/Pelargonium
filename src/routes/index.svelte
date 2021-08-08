
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
    
    
    <div class="swipe-holder top-32 h-72 w-96">
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
 


