<template>
<div class="main-contain spacing">
    <article class="professional-experience-wrapper-outer">
        <div class="professional-experience-wrapper-inner">
            <h2>About Me</h2>
            <p>
               I'm a Software Engineer based out of New Jersey. I currently work as a Front-End Developer for Hudson Integrated. 
               I graduated Cum Laude from William Paterson University with a Bachelor's of Computer Science in May 2020. 
               I'm skilled in both front-end and back-end development, I have extensive experience with Node.js, React, jQuery, SCSS, 
               and web accessibility, and I've dabbled in Vue, (this site was built with Vue and Gridsome) AngularJS, Python, Go, Java, C++,
               SQL, and the list goes on. I'm a tinkerer, so I've played around with more technologies than would be reasonable to list.
               I live to learn and love to explore new and interesting things.
            </p>
            <p>
                I'm looking for roles which will allow me to interact with both ends of the tech stack, 
                and have me frequently solving complex problems with interesting solutions. Nothing feels 
                more satisfying to me than building applications which required a lot of thought and 
                effort.
            </p>
            <p>
            </p>
            <footer>
                <img src="../images/technologyrow.png" alt="jQuery, Node.js, React, SCSS" />
            </footer>
        </div>
    </article>
</div>
</template>

<script>
export default {
    name:"AboutMe"
}
</script>

<style lang="scss">
.spacing{
    padding-top:100px;
    padding-bottom:100px;
}
.professional-experience-wrapper-outer{
    width:100%;
    border: 4px solid #222222;
    border-radius: 25px;
    padding-top:80px;
    padding-bottom:80px;
    box-sizing:border-box;
    .professional-experience-wrapper-inner{
    margin:auto;
    max-width:500px;
    padding-left:10px;
    padding-right:10px;
    h2{
        margin-top:0;
    }
    footer{
        width:100%;
        padding-top: 40px;
        img{
            width:100%;
        }
    }
    }
    @media screen and (max-width:780px){
        
    }
}
</style>