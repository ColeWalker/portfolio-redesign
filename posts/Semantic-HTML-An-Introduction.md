---
excerpt: Being able to write semantic HTML properly is one of the most important parts of being a great web developer. In this article, I aim to inform you, the reader, what semantic HTML is, and why you should use it, by providing some examples of what it looks like, and what it does! I will not be covering semantic elements individually, but I plan to write a series of posts in the future detailing how each one can make your website better. 
isLive: true
---
# Semantic HTML: An Introduction
Being able to write semantic HTML properly is one of the most important parts of being a great web developer. In this article, I aim to inform you, the reader, what semantic HTML is, and why you should use it, by providing some examples of what it looks like, and what it does! I will not be covering semantic elements individually, but I plan to write a series of posts in the future detailing how each one can make your website better. 

<h2>What is semantic HTML?</h2>

The easiest way to figure out the meaning of "semantic HTML" is by looking at the word "semantic". "Semantic" is essentially a fancy way of saying that something has a meaning behind it, therefore semantic HTML is a fancy way of saying that there's a group of elements which exist only to provide meaningful containers, rather than a bunch of < div >s and < span >s. 

<h2>Why do I need semantic HTML?</h2>

In my opinion, there are two really great reasons for using semantic HTML. The first is that it gives a more accurate representation of your website structure to programs like browsers, search engines, or screen readers, and the second is that it makes your HTML more easily readable. 

<h3>Proper Representation</h3>

The problem with using < div >s and < span >s everywhere is that they are, by definition, meaningless. In other words, using those elements tells the computer nothing about what they contain, whereas using the proper semantic elements will tell the computer quite a bit about what they contain. 

Imagine an unlabeled, opaque jug of liquid, and a transparent jug of liquid which is clearly marked "water". Which of the two would you prefer to drink? 

This is how computers see sites with semantic HTML vs sites that do not. Those without semantic HTML, and consist mostly of < div >s and < span >s are harder for the computer to parse, and thus will raise issues regarding accessibility and search engine placement. Ever use "reader mode" on your browser? That's also enhanced by using proper semantic HTML. 

Semantic HTML consists of containers with meaning. Before you build a component and wrap it with a < div >, consider its meaningful brethren before committing to the meaningless container. 

<h3>Better Readability</h3>

It isn't often that HTML readability is discussed, but even HTML can be messy if you aren't careful about it. To demonstrate how big of a difference semantic HTML can make in code readability, I will show off a component with nothing but < div > elements, and the same exact component with some semantic HTML. 

<a href="https://codepen.io/colewalker/pen/rNarBrR">Here's a pen showing what a basic card can look like with semantic HTML.</a>

Or, the code for those who don't want to follow a link:
```
<article class="card-wrapper">
  <header>
    <h2>Hello, I'm Cole</h2>
  </header>
  <div class="content">
    <p>This is an example of a card component with semantic html!</p>
  </div>
  <footer>
    <a href="https://www.google.com">This is a link</a>
  </footer>
</article>
```

<a href="https://codepen.io/colewalker/pen/MWYBgBz">Here's the exact same card without semantic HTML!</a>

Code: 
```
<div class="card-wrapper">
  <div class="header">
    <h2>Hello, I'm Cole</h2>
  </div>
  <div class="content">
    <p>This is an example of a card component with semantic html!</p>
  </div>
  <div>
    <a href="https://www.google.com">This is a link</a>
  </div>
</div>
```

As you can see, it is much more easily read when it uses semantic HTML. Everything is defined in the tag, and you don't have to scan the classes to figure out what's going on. This will make your HTML much easier to update in the future, for both you, and your colleagues, with the added benefit of better accessibility and search engine optimization! 



