<template>
  <article class="main-contain">
      <div class="hire-me-wrapper">
          <section class="content">
              <h2>Hire Me</h2>
              <p>
                  If you're interested in working with me, feel free to contact me.
              </p>
              <a href="mailto:colegrwalker@gmail.com">colegrwalker@gmail.com</a>
          </section>
          <section class="links">
              <h3>My Links</h3>
              <nav>
                  <ul>
                      <li><a href="https://github.com/ColeWalker">GitHub</a></li>
                      <li><a href="https://dev.to/colewalker">Blog</a></li>
                      <li><a href="https://www.linkedin.com/in/cole-walker-965a13192">LinkedIn</a></li>
                  </ul>
              </nav>
          </section>
      </div>
  </article>
</template> 

<script>
export default {
    name:"HireMe"
}
</script>

<style lang="scss">
.hire-me-wrapper{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    margin-bottom:100px;
    h3, h2{
        margin-top:0;
        margin-bottom:15px;
    }
    .content{
        max-width:50%;
    }
    .links{
        max-width:50%;
        h3{
            font-size:38px;
        }
        ul{
            padding-top:0;
        }
    }
    @media screen and (max-width:780px){
        flex-direction:column;
        .content{
            max-width:100%;
        }
        .links{
            max-width:100%;
            padding-top:20px;
        }
    }
}
</style>