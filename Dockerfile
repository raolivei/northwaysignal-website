# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies for native modules if needed
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
# Install only production dependencies
# Note: Since the build script bundles most dependencies into dist/index.cjs, 
# we only need those that are marked as external in script/build.ts
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/attached_assets ./attached_assets

ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

CMD ["node", "dist/index.cjs"]



