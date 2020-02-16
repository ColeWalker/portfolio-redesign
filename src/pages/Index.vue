<template>
  <Layout>
  <TitleWidget />
   
    <AboutMe />
    <CaseStudy />
    <AppCard />
    <HireMe />

  </Layout>
</template>

<script>
import TitleWidget from '~/components/TitleWidget.vue'
import AppCard from '~/components/AppCard.vue'
import AboutMe from '~/components/AboutMe.vue'
import CaseStudy from '~/components/CaseStudy.vue'
import HireMe from '~/components/HireMe.vue' 
export default {
  
  metaInfo: {
    title: 'Home'
  },
  components:{
    TitleWidget,
    AppCard,
    AboutMe,
    CaseStudy,
    HireMe
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
