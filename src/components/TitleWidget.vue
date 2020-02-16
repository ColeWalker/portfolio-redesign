<template>
  <div class="main-contain">
      <div class="title-wrapper">
          <h1>Hello, I'm <span>Cole Walker</span></h1>
          <g-image src="~/images/technologies.png" alt="JavaScript, React, jQuery, Sass" width="400px"/>
      </div>
  </div>
</template>

<script>
export default {
  name:'TitleWidget',
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
    @media screen and (max-width: 780px){
      flex-direction:column-reverse;
      img{
        width:100%;
      }
    }
  }
}
</style>