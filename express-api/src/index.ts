import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import schema, { context } from "./graphql";
import loaders from "./loaders";

(async () => {
  await loaders;

  const app = express();
  const server = new ApolloServer({ schema: await schema, context });

  app.set("trust proxy", 1);

  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === "production" ? undefined : false,
    })
  );

  app.use(morgan("dev"));

  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  server.applyMiddleware({ app });

  app.use((req, res) =>
    res.status(404).json({
      status: 404,
      statusText: "Not Found",
    })
  );

  const PORT = Number(process.env.PORT) || 3000;
  app.listen(PORT, () => console.log(`🚀 Server Ready at Port: ${PORT}`));
})().catch((err) => console.error(err));
