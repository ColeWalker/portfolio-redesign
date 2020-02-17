// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/_variables.scss'),
        
      ],
    })
}

module.exports = {
  siteName: "Cole Walker",
  siteDescription:"Portfolio website for Cole Walker, a software engineer based out of New Jersey.",
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options:{
        id: 'UA-132544895-1'
      }
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}
