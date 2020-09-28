# September 25 2020

- You can alias destructured variables

```js
const obj = { x: 1 };

const { x: anotherNameForX } = obj;
```

- You can use useRef to access previous state values.

```js
const FunctionalComponent ()=>{
const [items, setItems]
const [values, setValues]

const prevState = useRef()

/*
	prevState = {
		items: previousItems
		values: previousValues
	}
*/

}
```

- JS has internationalization values stored for currencies
  - Intl.getLocaleFormat()
