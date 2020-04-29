---
excerpt: Redux is one of the most difficult concepts to grasp as a newcomer to front-end frameworks, and it took me a long time to understand how it worked and how to use it. I didn't truly *get* it until I had a need for it. 
isLive: true
---
# Confused by Redux: What the heck is state? Why do we need a state manager?
Redux is one of the most difficult concepts to grasp as a newcomer to front-end frameworks, and it took me a long time to understand how it worked and how to use it. I didn't truly *get* it until I had a need for it. 

In this article I aim to educate you about some of the concepts of Redux, including why we need it, what state is, and a high-level example of what we would use Redux for. 

## Why do we use Redux?

I think that this is the single most important thing to understand when learning redux. If you don't have a reason to use redux, you cannot hope to grasp it. It is a utility that needs to be learned out of necessity, not just for fun. 

Redux describes itself as "a predictable state container for js apps". Chances are, you have no idea what the hell that means. I didn't when I first read it! 

**Put simply, Redux handles your global state so you don't have to.** 

Redux holds all of those nasty global variables you need in a way that's clean and predictable, so you don't go goofing stuff up by mistake.

## Hold up, what the heck is "state"? 

State is the status of an application in a given moment. In other words, it's a snapshot of the variables that your application relies on. 

**Think of state as a screenshot of all of the variables on your app which change with interactions. **

## The *Example*: a Countdown Timer
A few months ago, I set out to build an app which would make my life better, a countdown timer. The requirements of this app were as follows:

* It needed to take as input a date and show me the amount of time remaining until that date in a stylish GUI. 
*  The GUI should be fully customizable via a settings screen, allowing me to change the background, color of the elements, and text color.
* The timer should update every second.

I started to build this app, and that's when I had my eureka moment with Redux. I finally understood why it was necessary, and why global state was a thing that people needed. 

Let's take those requirements and piece out the state that is mentioned in the app requirements, and what screens that each piece will be used on.

* The user selected date. (Main Screen, Settings Screen) 
* The current date and time. (Main Screen)
* The amount of time remaining until the user selected date. (Main Screen)
* The background. (Main Screen, Settings Screen)
* The color of the elements. (Main Screen, Settings Screen)
* The text color. (Main Screen, Settings Screen)


Here's a screenshot so you can better visualize the app.

![Countdown App Screen](https://dev-to-uploads.s3.amazonaws.com/i/m5irbnyjzsa5l3u9mcv8.png)

From this list, you should be able to understand why we need global state, and which of these will be global state. The global state of this application is anything which exists on both of the screens. That is what we need Redux for. 

Redux will handle the updates to the global state, and deal with managing these variables between screens. 





