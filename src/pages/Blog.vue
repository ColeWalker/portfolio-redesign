<template>
  <Layout>
      <main class="main-contain">
        <h1>Blog Posts</h1>
        <nav class="blog-nav-wrapper">
          <ul>
            <li v-for="post in $page.allPost.edges" v-bind:key="post.node.id">
                <PostInformation 
                  v-bind:post="post.node"/>
            </li>
          </ul>
        </nav>
      </main>
  </Layout>
</template>

<script>
import PostInformation from '../components/PostInformation'
export default {
metaInfo: {
  title: 'Blog'
},
components:{
  PostInformation
}
}
</script>

<style lang="scss">
  .blog-nav-wrapper{
    ul, li{
      list-style:none;
      padding-left:0;
    }
    li{
      margin-bottom:75px;
    }
  }
</style>

<page-query>
query {
 	allPost{
    edges{
			node{
				path
        title
        excerpt
      }
    }
  }
}

</page-query>