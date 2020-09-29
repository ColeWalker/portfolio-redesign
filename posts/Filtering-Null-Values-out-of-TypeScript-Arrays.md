---
excerpt: Something that stumped me the first time I encountered it in TypeScript was dealing with nullable types in arrays. When dealing with arrays, we often do not want to keep the null values in, or we want to perform a map operation and get yelled at by the compiler about missing properties. I learned a little snippet to deal with this, which I will explain step by step.
---

# Filtering Null Values out of TypeScript Arrays

Something that stumped me the first time I encountered it in TypeScript was dealing with nullable types in arrays. When dealing with arrays, we often do not want to keep the null values in, or we want to perform a map operation and get yelled at by the compiler about missing properties. I learned a little snippet to deal with this, which I will explain step by step.

First, let's establish the scenario.

```ts
interface DoesntMatter {
  meaningless: (string | null)[];
}
```

Here we have an interface DoesntMatter with a property 'meaningless', which is an array containing either strings or null values.

Assume that we have an instance of DoesntMatter in our code, and we need to concatenate the strings of the array into one mega-string. Unfortunately, we can't do that without getting rid of all of the nulls first.

```ts
instanceOfDoesntMatter.meaningless.filter((val: val is string) => !!val)
```

The above snippet uses a really cool feature, called a [type guard.](https://www.typescriptlang.org/docs/handbook/advanced-types.html) The type guard will check to make sure val is a string, and if it is, it'll run the function. If it isn't, it won't run the function. Since we only need to filter out nulls, we know that the function will only run if the value is a string already, so we can return true if val, which is what the `!!` is doing.

The result of this filter is an array which contains nothing but string values.

Type guards are a very powerful feature, and this is only one small use case of the nearly endless possibilities with them.
