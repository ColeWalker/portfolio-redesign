<template>
   <header class="site-header-wrapper">
       <div class="main-contain">
           <nav class="site-header-nav-bar-wrapper">
               <ul>
                <li class="hidden-until-focus">
                      <a href="#main-body">Skip Navigation</a>
                  </li>
                  <li>
                      <g-link  to="/">Home</g-link>
                  </li>
                  <li>    
                      <g-link  to="/blog/">Blog</g-link>
                  </li>
                 
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name:"SiteHeader",
    methods: {
        handleClick: function (event){
            console.log(document.getElementById("main-body"))
            const target = document.getElementById("main-body");
            console.log(target);
            // const targetFromTop = target.scrollTop;
            // window.scroll(0,targetFromTop);
            target.focus();
        }
    }
}
</script>

<style lang="scss">
.site-header-wrapper{
    padding: 25px 0;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0 0 7px 1px rgba(0,0,0,0.3);
    margin-bottom:75px;

    .main-contain{
        flex:1;
        .site-header-nav-bar-wrapper{
            ul{
                list-style:none;
                padding-left:0;
                margin:0;
                display:flex;
                flex-direction: row;
                li{
                    a{
                        margin-right:1em;
                        font-size:28px;
                    }
                    &.hidden-until-focus{
                        position:absolute;
                        left:-10000px;
                        top:auto;
                        width:1px;
                        height:1px;
                        overflow:hidden;
                        &:focus, &:focus-within{
                            display:block;
                            position:static;
                            width:auto;
                            height:auto;
                        }
                    }
                }
            }
        }
        
    }

}

</style>