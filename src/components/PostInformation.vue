<template>
    <article class="post-information-wrapper">
        <h2>{{post.title}}</h2>
        <p v-if="post.excerpt.length && post.excerpt.length">{{post.excerpt}}</p>
        <g-link v-bind:to="post.path">Go there!</g-link>
    </article>
</template>

<script>
export default {
props:{
    post: {
        type: Object,
        required: true,
    },
}
}
</script>

<style lang="scss">
.post-information-wrapper{
    width:100%;
    border: 4px solid #222222;
    border-radius: 25px;
    padding: 25px;
    box-sizing:border-box;
    
    h2{
        margin-top:0;
        margin-bottom:10px;
    }
    
    @media screen and (max-width:780px){
        
    }
}
</style>