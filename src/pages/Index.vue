<template>
  <Layout>
    <TitleWidget
      title="Hello, I'm"
      subTitle="Cole Walker"
    />
   
    <AboutMe />
    <CaseStudy 
      type="Website"
      caseStudyTitle="Cole.blog"
    >
      <template v-slot:left-panel>
        <p>
            My first ever tech blog. For this project, I used React with the Gatsby static site generator
            to automatically generate posts when supplied with markdown files.
            This simple setup easily allows CMS implementation, making it highly scalable. 
        </p>
        <a href="https://github.com/ColeWalker/ColeBlogMe" class="btn-main" >View Source</a>
      </template>
      <template v-slot:right-panel>
       <h3>Tech Stack</h3>
        <ul>
            <li>React</li>
            <li>Gatsby</li>
            <li>Git</li>
        </ul>
        <a href="https://romantic-boyd-a91d0a.netlify.com/" class="btn-secondary">Live Site</a>
      </template>
    </CaseStudy>
    <AppCard 
      sourceCodeLinkURL="https://github.com/ColeWalker/countdown"
      sourceCodeLinkText="Check out the Source Code"
      type="Mobile App"
      appTitle="Countdown Timer"
    >
      <template v-slot:content-block>
        <p>
          A countdown timer built in React Native.
          I actually designed this first, without any intention of programming it, but 
          I received some requests to make it a real thing, so I did so. 
          The goal of this application was to create a stylish way of seeing how much 
          time there was until a certain date. I also wanted the user to be able 
          to customize the interface to their heart's content, so there is 
          a rich settings page with loads of goodies, 
          including a gradient background picker, 
          image background picker, and text color option. 
        </p>
        <p>
            I used React Native, Expo, and Redux to build this application.
        </p>
      </template>
    </AppCard>
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
