<template>
  <Layout>
    <main class="main-contain">
      <h1>Digital Garden</h1>
      <nav class="blog-nav-wrapper">
        <ul>
          <li v-for="post in $page.allGarden.edges" v-bind:key="post.node.id">
            <PostInformation v-bind:post="post.node" />
          </li>
        </ul>
      </nav>
    </main>
  </Layout>
</template>

<script>
import PostInformation from "../components/PostInformation";

export default {
  metaInfo: {
    title: "Digital Garden",
  },
  components: {
    PostInformation,
  },
};
</script>

<style lang="scss">
.blog-nav-wrapper {
  ul,
  li {
    list-style: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 75px;
    padding-left: 25px;
    padding-right: 25px;
  }
}
</style>

<page-query>
query {
 	allGarden{
    edges{
			node{
				path
        title
        isLive
      }
    }
  }
}

</page-query>
