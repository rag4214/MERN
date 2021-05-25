import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  gql,
} from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import { useMemo } from "react";

const createClient = (ctx?: GetServerSidePropsContext) => {
  const setCookiesAfterware = new ApolloLink((operation, forward) =>
    forward(operation).map((response) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ctx!.res.setHeader(
        "set-cookie",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        operation.getContext().response.headers.raw()["set-cookie"] || ""
      );

      return response;
    })
  );

  return new ApolloClient({
    link: ctx
      ? setCookiesAfterware.concat(
          new HttpLink({
            uri: "http://localhost/graphql",
            headers: { cookie: ctx.req.headers.cookie },
          })
        )
      : new HttpLink({ uri: "/graphql" }),
    cache: new InMemoryCache(),
  });
};

let client: ApolloClient<NormalizedCacheObject> | undefined;
const initializeClient = (
  initialState?: NormalizedCacheObject,
  ctx?: GetServerSidePropsContext
) => {
  const apolloClient = client ?? createClient(ctx);

  if (initialState) {
    const prevState = apolloClient.extract();

    apolloClient.restore({
      ...prevState,
      ...initialState,
      ...{
        ROOT_QUERY: { ...prevState.ROOT_QUERY, ...initialState.ROOT_QUERY },
      },
    });
  }

  if (typeof window === "undefined") return apolloClient;

  client ??= apolloClient;

  return client;
};

const useClient = (initialState?: NormalizedCacheObject) =>
  useMemo(() => initializeClient(initialState), [initialState]);
const getClient = (ctx: GetServerSidePropsContext) =>
  initializeClient(undefined, ctx);

export { gql, useClient };
export default getClient;
