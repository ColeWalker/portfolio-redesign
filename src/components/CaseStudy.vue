<template>
<article class="case-study-wrapper">
    <header class="main-contain">
        <h2><span>Website</span>Cole.blog</h2>
    </header>
    <div class="image-wrapper">
        <img src="../images/aboutme.jpg" alt="Cole.blog">
    </div>
    <section class="main-contain">
        <div class="description">
            <p>
                My first ever tech blog. For this project, I used React with the Gatsby static site generator
                 to automatically generate posts when supplied with markdown files.
                 This simple setup easily allows CMS implementation, making it highly scalable. 
            </p>
            <a href="https://github.com/ColeWalker/ColeBlogMe" class="btn-main" >View Source</a>
        </div>
         <div class="tech-stack">
            <h3>Tech Stack</h3>
            <ul>
                <li>React</li>
                <li>Gatsby</li>
                <li>Git</li>
            </ul>
            <a href="https://romantic-boyd-a91d0a.netlify.com/" class="btn-secondary">Live Site</a>
        </div>
    </section>
</article>
</template>

<script>
export default {
    name:"CaseStudy"
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
        img{
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