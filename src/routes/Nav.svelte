<nav class="fixed p-4 w-full bg-white shadow">
  
    <a href="/home" class="flex items-center focus:outline-none max-w-max">
      <!--<img alt="" class="w-10 rounded h-15 " src="/logo.jpeg" />-->
      <div class="">
        <h2 class=" text-3xl text-gray-500 align-middle">Pelargonium.UA</h2>
        

        <nav id="primary_nav_wrap" class="list-none float-left m-0 p-0 ">
          <ul class="text-gray-700 no-underline font-bold text-sm leading-loose font-sans">
            <li class="current-menu-item bg-blend-color-dodge "><a href="/home">Home</a></li>
            <li><a href="#">Kinds</a>
              <ul class="relative">
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
    
    
  
    <style>
    
   
      
      #primary_nav_wrap ul a
      {
        padding:0 15px;
     }
      
      #primary_nav_wrap ul li
      {
        position:relative;
        float:left;
        margin:0;
        padding:0
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