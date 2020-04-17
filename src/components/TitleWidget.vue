<template>
  <div class="main-contain">
      <div class="title-wrapper">
          <g-image src="~/images/technologies.png" alt="JavaScript, React, jQuery, Sass" width="400px"/>
          <h1>{{title}}<span v-if="subTitle">{{subTitle}}</span></h1>
      </div>
  </div>
</template>

<script>
export default {
  name:'TitleWidget',
  props:{
    title: String,
    subTitle: String,
    image: String
  }
}
</script>

<style lang="scss">
.main-contain{
  .title-wrapper{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-top:20px;
    padding-bottom:20px;
    h1{
      color: #27AE60;
      span{
        display:block;
        color: #000000;
      }
    }
<<<<<<< HEAD
    @media screen and (max-width:780px){
=======
    @media screen and (max-width: 780px){
>>>>>>> a72f643ca6c1c1738bce1522dba82ff90f8ee2ea
      flex-direction:column-reverse;
      img{
        width:100%;
      }
    }
  }
}
</style>