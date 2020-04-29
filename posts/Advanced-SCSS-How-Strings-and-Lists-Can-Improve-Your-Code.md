---
excerpt: SASS is one of the most popular CSS preprocessors, and chances are, you’ve either already interacted with it in some capacity, or will at some point in your career. As a preprocessor, SASS allows us to write CSS more easily, with added functions such as nesting queries or the & selector. However, SASS doesn’t just allow us to write prettier CSS, but also adds some much needed programming features to the styling language. 
isLive: true
---

# Advanced SCSS: How Strings and Lists Can Improve Your Code
SASS is one of the most popular CSS preprocessors, and chances are, you’ve either already interacted with it in some capacity, or will at some point in your career. As a preprocessor, SASS allows us to write CSS more easily, with added functions such as nesting queries or the & selector. However, SASS doesn’t just allow us to write prettier CSS, but also adds some much needed programming features to the styling language. 

In this article, I will be discussing some of the code I’ve written to make my SCSS more readable and reusable through the use of lists and the @each function. (The examples are using SCSS, but the principles are the same in SASS formatting!) 

<h2>Lists and @each</h2>

Say that you want to apply specific styling to every text-box like input tag, without including the button or submit type. One way of doing this is by using input:not([type=”button”],[type=”submit”]), however, it can be very difficult to override the specificity of the :not selector. Another way of doing it is by targeting every single input type directly, however, this quickly becomes difficult to read, and is hard to re-use if necessary. 

The best solution is to create a SASS list containing all of these selectors, and iterating over them. It makes it easy to re-use the selectors, or even add one if necessary. 

<h3>How do we do this?</h3>

If you’ve used SASS, you’re probably aware of what a variable is. As a refresher, a variable (as in most programming languages) is simply a piece of information stored for later use with a friendly name.

Here’s an example of storing some padding value in a variable and reusing it later.

```scss
$padding-value: 40px;

.example{
padding-right: $padding-value;
}
```



A more complex data type is that of the list. If you’ve used arrays in other languages, you’re aware that a list is basically a container for a bunch of related data.The syntax for a list is the same as a variable, but with commas between values and optional parentheses around the list. Let’s get back to the example of the input types, here’s an example of a list which will store all of them. 
```scss
$not-button-input: ("input[type=checkbox]", "input[type=color]", "input[type=date]", "input[type=datetime-local]", "input[type=email]", "input[type=file]","input[type=hidden]","input[type=month]","input[type=number]", "input[type=password]","input[type=radio]","input[type=range]","input[type=search]","input[type=tel]","input[type=text]","input[type=time]","input[type=url]","input[type=week]");
```

One thing to note here is that by using quotation marks around the items in the list, we are storing the selector names as strings, which will allow us to actually use them as selectors later, by using a bit of extra syntax.

Here’s an example of such.

```scss
$selector-example: “.selector”;

#{$selector-example}{
    display:none;
}
```
Basically, whatever you put in the brackets in #{example-thing} will be treated as if it’s a selector. 

The last piece of the puzzle is actually using the information in the list. Luckily, SASS has a built-in function for automatically iterating over the information in a list, @each. With this function, we can finish the example of sharing styles between text-box like input types.


```scss
@each $selectorName in $not-button-input{
  #{$selectorName}{
    display:block;
    border: 1px solid red;
    background-color: #fff;
    padding: 10px;
    margin:0;
    width: 100%;
    max-width:100%;
    border-radius:2px;
  }
}
```

The above code snippet will iterate through each item in the list and assign it to the variable $selectorName. We are then able to use that input as a selector, by using the aforementioned #{$selectorName} syntax. Then we just open our brackets and put whatever styling we want in there. Pretty cool, huh?





