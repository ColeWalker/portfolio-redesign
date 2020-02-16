<template>
<div class="main-contain spacing">
    <article class="professional-experience-wrapper-outer">
        <div class="professional-experience-wrapper-inner">
            <h2>About Me</h2>
            <p>
               I'm a front-end web developer based out of New Jersey. I'm expecting to graduate from William Paterson University with a Bachelor of Science in Computer Science in May, 2020. I'm skilled in both front-end and back-end development, I have extensive experience with Node.js, React, jQuery, SCSS, and web accessibility. 
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