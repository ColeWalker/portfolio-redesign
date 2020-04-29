---
excerpt: One of the most common accessibility tripping points that web developers seem to face is the ever-dreaded form. Forms have a lot of specific accessibility rules that can confuse developers, especially when it comes to making these relatively strict elements look pretty. 
isLive: true
---
# Easy Accessibility: Properly Labeling Form Fields
One of the most common accessibility tripping points that web developers seem to face is the ever-dreaded form. Forms have a lot of specific accessibility rules that can confuse developers, especially when it comes to making these relatively strict elements look pretty. 

One thing that's easy to fix, yet I unfortunately see rather often, is the misuse or altogether absence of labels and IDs.


## What is a label?

A label is an element which tells users what the heck that box they're staring at means. A label should be descriptive, stating clearly what information a form field is asking for and whether a form field is required.

When an abled user sees a label, they're able to read what the form field means easily, regardless of the element used or whether or not it is programmatically attached to the form field in question. This disconnect can result in negligence among developers for the disabled user, who, without proper labeling, can have difficulty understanding a form. On screen readers, not using a label properly 

### How do I make one?

There are two simple steps to making a label. First, come up with a description of your form field and wrap that in a `label` tag. Next, attach the label to that form field using one of two methods.

#### ID

A label can be attached to a form field by using sticking the form field's id in the label's `for` attribute. This is useful when you want your label to exist in a separate container from your form field for styling reasons. Each ID on a page must be unique.

Here's an example of a properly labeled text field.

```html

<label for="first-name-input">First Name</label>
<input type="text" id="first-name-input">

```

When a screen reader user focuses on the input in the above example, the screen reader will read aloud the label "First Name", allowing them to know exactly what the form field is asking for.

#### Wrapping the input in a label

There's another way of labeling an input, which is wrapping the input and its label text in a label tag together. This paradigm is often used for checkboxes. In this scenario, the `for` attribute is unnecessary, as the elements are programmatically linked automatically. However, a unique id on the form field is still recommended.

Here's an example of the same text field above labelled this way.

 ```html

<label>
    <input type="text" id="first-name-input">
   First Name
</label>

```

You can even wrap the label text in a `span` tag if you want to, for further styling. 

 ```html

<label>
    <input type="text" id="first-name-input">
    <span>First Name</span>
</label>

```

### aria-label

There is one more way of labeling an element, but it should be considered a last-ditch effort, since in most cases, it is wholly unnecessary. [The accessibility developer guide has a fantastic resource which sums the reasoning as to why this is considered to be a last-resort.](https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/label-labelledby/)

An `aria-label` is a label to exclusively be read by screen readers. Perhaps there's a field which would be obvious as to what it is to abled users, but not those using screen readers: that is the intended use of the `aria-label` attribute, though I insist that you reconsider your design choices if you think that an `aria-label` is absolutely necessary. In many cases, designs which ignore visible labels are confusing to someone. 

```html

<input aria-label="First Name" type="text" id="first-name-input">
```