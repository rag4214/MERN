# --- Dependencies --- #
FROM node:14-alpine AS deps
WORKDIR /next-app

COPY package*.json ./

RUN npm ci

# --- Build --- #
FROM node:14-alpine AS builder
WORKDIR /next-app

COPY . .

COPY --from=deps next-app/node_modules/ node_modules/

RUN npm run build

# --- Run --- #
FROM node:14-alpine AS runner
WORKDIR /next-app

ENV NODE_ENV=production

COPY --from=builder next-app/.next/ .next/
COPY --from=builder next-app/node_modules/ node_modules/
COPY --from=builder next-app/public/ public/
COPY --from=builder next-app/next.config.js .
COPY --from=builder next-app/package.json .

EXPOSE 3001

CMD [ "npm", "start" ]