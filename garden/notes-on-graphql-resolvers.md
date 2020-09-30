# Notes on GraphQL Resolvers

- GraphQL doesn't require resolver definitions for direct properties of an object, or functions which return a static value of the property name.

```ts

const schema = gql`
	id: Int!
	name: String!
`

const root = {
	id:1
	name: () => "Cole"
}

```

GraphQL will know that queries should evaluate as `id:1, name: "Cole"`.
