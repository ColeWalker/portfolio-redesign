<template>

  <div class="main-contain">
      <article class="about-me-wrapper">
        <div class="image-wrapper">
         <img src="../images/countdown.jpg" alt="Code"/>
        </div>
        <div class="content-wrapper">
                <h2><span>Mobile App</span>Countdown Timer</h2>
                <p>
                    An excellent venture into React Native. 
                    I actually designed this first, without any intention of programming it, but 
                    I received some requests to make it a real thing, so I did so. 
                    The goal of this application was to create a stylish way of seeing how much 
                    time there was until a certain date. I also wanted the user to be able 
                    to customize the interface to their heart's content, so there is 
                    a rich settings page with loads of goodies, 
                    including a gradient background picker, 
                    image background picker, and text color option. 
                </p>
                <p>
                    I used React Native, Expo, and Redux to build this application.
                </p>
                <a href="https://github.com/ColeWalker/countdown">Check out the Source Code</a>
        </div>
      </article>
  </div>
</template>

<script>
export default {
    name:'AppCard'
}
</script>

<style lang="scss">
$border-color: #222222;
.about-me-wrapper{
    
    border-radius: 25px;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    width:100%;
    margin-top:150px;
    margin-bottom:120px;
    
    header{
        width:100%;
        padding-left:40px;
    }
    .content-wrapper{
        width:100%;
        display:flex;
        padding-bottom:40px;
        
        box-sizing:border-box;
        border-top:none;
        border-radius: 0 0 25px 25px;
        border: 4px solid $border-color;
        border-top:2px solid $border-color;
        
            padding-left:40px;
            padding-right: 40px;
            width:100%;
            height:100%;
            display:block;
            
           h2{
               span{
                   color:#27AE60;
                   display:block;
                   font-size:0.6em;
               }
           }
        
    }
    .image-wrapper{

        height:inherit;
        display:flex;
        img{
            border: 4px solid $border-color;
            border-bottom:none;
            border-radius: 25px 25px 0 0;
            width:100%;
            object-fit:cover;
            height:inherit;
        }
    }
}
</style>