<template>
<article class="case-study-wrapper">
    <header class="main-contain">
        <h2><span>{{type}}</span>{{caseStudyTitle}}</h2>
    </header>
    <div class="image-wrapper">
        <g-image class="case-study-image" src="~/images/aboutme.jpg" alt="Cole.blog" width="1920" />
    </div>
    <section class="main-contain">
        <div class="description">
            <slot name="left-panel">
            
            </slot>
        </div>
         <div class="tech-stack">
           <slot name="right-panel">
            </slot>
        </div>
    </section>
</article>
</template>

<script>
export default {
    name:"CaseStudy",
    props:{
        type: String,
        caseStudyTitle:String,
    }
}
</script>

<style lang="scss">
.case-study-wrapper{
    background-color: #222222;
    color: #ffffff;
    header{
        padding-top:10px;
        h2{
            font-size:48px;
            color: #ffffff;
            span{
                color: #27AE60;
                font-size:28px;
                display: block;
            }
        }
    }
    .image-wrapper{
        width:100%;
        .case-study-image{
            width:100%;
            max-height:600px;
            object-fit: cover;
        }
    }
    section{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding-top:30px;
        padding-bottom:40px;
        .description{
            max-width:50%;
            
            p{
                margin-top:0;
                
            }
        }
        .tech-stack{
            max-width:50%;
            h3{
                font-size:28px;
                margin-top:0;
                margin-bottom:10px;
            }
            ul{
                margin-top:0;
                padding-left:1em;
                
            }
            .btn-secondary{
                color: #ffffff;
            }
        }
        @media screen and (max-width:780px){
            flex-direction:column;
            
            .description{
                max-width: 100%;
                a{
                    margin:auto;
                }
            }
            .tech-stack{
                padding-top:50px;
                max-width:100%;
            }
        }
    }
    
}
</style>