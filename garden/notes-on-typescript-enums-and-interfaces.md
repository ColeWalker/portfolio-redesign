# Notes on Typescript Enums and Interfaces

- In TypeScript, when using an array which contains a bunch of interfaces that extend a base interface, you can use the base class as the array type and it will work.

```ts
interface Base : {
	id: number
}

interface Extended extends Base: {
	name: string
}

interface ExtendedAgain extends Base: {
	date: Moment
}

let item1: Base
let item2: Extended
let item3: ExtendedAgain

let items: Base[] = [
	item1,
	item2,
	item3
]

```

- In TypeScript, you can access an enumerated type as an array by using Object.entries(enum)

```ts
enum Fruit : {
	Apple: "APPLE"
	Orange: "ORANGE"
	Peach: "PEACH"
}

Object.entries(Fruit) // ["APPLE", "ORANGE", "PEACH"]
```
