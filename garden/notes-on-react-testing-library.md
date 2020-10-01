# Notes on react-testing-library
* With react-testing-library, you can test to make sure an element doesn't display with the following snippet:

```ts
expect(await screen.queryByText('Something')).toBeFalsy()
```

* Query functions won't fail the test if the item isn't found, which is the behavior of "find" functions.