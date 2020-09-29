---
isLive: true
---

# Notes on Lesser Known ES6 Features

- When using optional chaining, `undefined?.length > 0` = false, and doesn't throw an exception.
- Similarly: `undefined?.name === "test"` = false, and doesn't throw an exception.
- `x||=y` only assigns y to x if x is falsy

```js
function doStuff(x) {
  if (!x) {
    x = "default value";
  }
  return x + "and other stuff";
}

//is equivalent to
function doStuff(x) {
  x ||= "default value";
  return x + "and other stuff";
}
```

- `x??=y` is the same as above, but more specifically, falsy in that it has to be `null` or `undefined`.
- conversely, `x&&=y` only assigns y to x if x is _truthy_

```js
function doStuff(x) {
  if (x) {
    x = "other value";
  }
  return x + "and other values";
}

//is equivalent to
function doStuff(x) {
  x &&= "other value";
  return x + "and other stuff";
}
```

- You can chain assignment operations
  _ `w = z = x = y` is equivalent to `w = (z = (x = y))` or `x = y; z = y; w = y`
  _ this gets way worse
  _ `z += x _= y`is legal`let z = 5 let x = 10 let y = 2 z += x \*= y` \* z=25, x=20, y=2

- `"string".localeCompare('str','en', {})` takes options as the 3rd argument
  - options can include:
  - `ignorePunctuation: bool` default false
  - `numeric: bool` default false
  - `caseFirst: "upper" | "lower | "false"` Whether upper case or lower case should sort first. Defaults false
