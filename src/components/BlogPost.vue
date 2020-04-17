<template>
  <Layout>
      <article class="main-contain">
        <VueRemarkContent />
      </article>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Post ($id: ID!) {
  post(id: $id) {

    url
  }
}

</page-query>