# Next-App

This is a [Next.js](https://nextjs.org/) [React](https://reactjs.org/) project using [TypeScript](https://www.typescriptlang.org/) and [Apollo GraphQL](https://www.apollographql.com/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

- [Nodejs v14.x](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

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
  docker build -t next-app .
  docker run -dp 3001:3001 next-app
  ```

The server will be accessible at [`http://localhost:3001`](http://localhost:3001/).

## Learn More

To learn more about React, Next.js, TypeScript, and Apollo Client take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
