<template>

  <div class="main-contain">
      <article class="about-me-wrapper">
        <div class="image-wrapper">
         <img src="../images/countdown.jpg" alt="Code"/>
        </div>
        <div class="content-wrapper">
                <h2><span>{{type}}</span>{{appTitle}}</h2>
                <slot name="content-block">
                
                </slot>
                <a v-bind:href="sourceCodeLinkURL">{{sourceCodeLinkText}}</a>
        </div>
      </article>
  </div>
</template>

<script>
export default {
    name:'AppCard',
    props:{
        sourceCodeLinkText: String,
        sourceCodeLinkURL: String,
        type: String,
        appTitle: String,
    }
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
                   color:$primary-color;
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