# Notes on GraphQL Subscriptions

- GraphQL subscriptions are objects containing
  `js subscribe: ()=> asyncIterable resolve: ()=> resolved`
- If you don't have the resolve function, the data returned from webhooks will never reach your resolvers, and you won't actually return anything but `null` to the consumer.
