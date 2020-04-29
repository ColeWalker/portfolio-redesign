---
excerpt: A lot of times, front-end developers will use < a > and < button > interchangeably. The truth is, this is completely wrong! Using the correct tag is very important for a11y, since the expected functionality is incredibly different between the two, and screen readers will give different hints to users based on the type of tag. Additionally, I find that using proper semantic HTML makes your code much easier to read as well!
isLive: true
---
# Easy Accessibility: Button vs Anchor
<p>Hello, I'm back with another quick accessibility tip! This time, it's a bit of HTML semantics.</p>

<p>A lot of times, front-end developers will use < a > and < button > interchangeably. The truth is, this is completely wrong! Using the correct tag is very important for a11y, since the expected functionality is incredibly different between the two, and screen readers will give different hints to users based on the type of tag. Additionally, I find that using proper semantic HTML makes your code much easier to read as well!</p>

<h2>When do I use the < a > tag?</h2>

<p>The < a > tag should be used for links, and links only! If it takes you to a different page or scrolls you to a different part of the page, it's an < a > tag.</p>

<p>A good rule of thumb: if you aren't using a meaningful href attribute, use a button!</p>

<h2>When do I use the < button > tag?</h2>

<p>The < button > tag should be used for an element which will execute a script when it is clicked. A good example is having a < button > which will open a modal on click. </p>

<p>This could obviously be a billion things, but often times, developers will use < a > tags when they should use < button >s since they want it to be styled like one. However, the< button > element can very easily be styled to look exactly like an < a > tag, so there is no excuse for using it where you shouldn't be! </p>