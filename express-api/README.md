# Express-API

This is a [GraphQL](https://graphql.org/) [Express](https://expressjs.com/) project using [TypeScript](https://www.typescriptlang.org/), [Apollo GraphQL](https://www.apollographql.com/), and [Mongoose](https://mongoosejs.com/) [MongodB](https://www.mongodb.com/).

## Requirements

- [Nodejs v14.x](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

```bash
npm ci
```

## Usage

- ### Development

  ```bash
  npm run dev
  ```

- ### Production

  ```bash
  docker build -t express-api .
  docker run -dp 3000:3000 express-api
  ```

The server will be accessible at [`http://localhost:3000`](http://localhost:3000/).

## Learn More

To learn more about GraphQL, Express, TypeScript, Apollo Server, Mongoose, and MongoDB take a look at the following resources:

- [GraphQL Documentation](https://graphql.org/learn/)
- [Express Documentation](https://expressjs.com/en/4x/api.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/v1/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/drivers/node/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
