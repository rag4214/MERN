import { ApolloServerExpressConfig } from "apollo-server-express";
import { Request, Response } from "express";

type Context = {
  req: Request;
  res: Response;
};
export const context: ApolloServerExpressConfig["context"] = ({
  req,
  res,
}): Context => ({ req, res });

export default Context;
