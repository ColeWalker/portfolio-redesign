<template>
  <Layout>
    <TitleWidget
      title="Hello, I'm"
      subTitle="Cole Walker"
    />
   
    <AboutMe />
    <CaseStudy 
      type="Web Application"
      caseStudyTitle="Random Episode Picker"
    >
      <template v-slot:left-panel>
        <p>
            A web app which picks an episode of a tv show for you. It connects to the Open Movie Database API using an express proxy server, (so I don't share my API credentials with the world)
            and returns some information about the episode chosen. I used AngularJS for this project, and streamed the entire coding process on my twitch channel. I built
            it because I always know what show I want to watch, but hate choosing the episode. 
        </p>
        <a href="https://github.com/ColeWalker/random-episode-picker" class="btn-main" >View Source</a>
      </template>
      <template v-slot:right-panel>
       <h3>Tech Stack</h3>
        <ul>
            <li>AngularJS</li>
            <li>Typescript</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Git</li>
        </ul>
        <a href="https://agitated-benz-0a03e5.netlify.app/" class="btn-secondary">Live Site</a>
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
     <CaseStudy 
      type="Website"
      caseStudyTitle="Random Picker"
    >
      <template v-slot:left-panel>
        <p>
           A PWA built with React that I built on stream. The idea of this application is simple, you can create a 
           list of items that you'd like to randomly pick something from, and when you receive a random item, 
           it'll remove that item from the list. I am aware that many applications exist that do this, but 
           I found their UX to be lacking, so I built my own to fit my needs. 
        </p>
        <a href="https://github.com/ColeWalker/random-list-picker" class="btn-main" >View Source</a>
      </template>
      <template v-slot:right-panel>
       <h3>Tech Stack</h3>
        <ul>
            <li>React</li>
            <li>Gatsby</li>
            <li>Git</li>
        </ul>
        <a href="https://thirsty-austin-4118aa.netlify.app/" class="btn-secondary">Live Site</a>
      </template>
    </CaseStudy>
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
