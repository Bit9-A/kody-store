# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY apps/backend/package.json apps/backend/pnpm-lock.yaml ./apps/backend/
RUN npm install -g pnpm && cd apps/backend && pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/apps/backend/node_modules ./apps/backend/node_modules
COPY . .
RUN npm install -g pnpm && cd apps/backend && pnpm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/apps/backend/dist ./dist
COPY --from=builder /app/apps/backend/package.json ./
COPY --from=builder /app/apps/backend/node_modules ./node_modules

EXPOSE 3001
CMD ["node", "dist/main"]

