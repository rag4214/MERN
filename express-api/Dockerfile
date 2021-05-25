# --- Dependencies --- #
FROM node:14-alpine AS deps
WORKDIR /express-api

COPY package*.json ./

RUN npm ci

# --- Build --- #
FROM node:14-alpine AS builder
WORKDIR /express-api

COPY . .

COPY --from=deps express-api/node_modules/ node_modules/

RUN npm run build

# --- Run --- #
FROM node:14-alpine AS runner
WORKDIR /express-api

ENV NODE_ENV=production

COPY --from=builder express-api/built/ built/
COPY --from=builder express-api/node_modules/ node_modules/
COPY --from=builder express-api/package.json .

EXPOSE 3000

CMD [ "node", "built/index.js" ]