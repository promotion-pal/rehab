FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install -g pnpm

RUN pnpm install

WORKDIR /app
COPY . .

COPY prisma ./prisma/

RUN pnpm exec prisma migrate deploy

RUN pnpm exec prisma generate
RUN ls -la node_modules/.prisma/client && \
    echo "Prisma client generated successfully"




# FROM node:18-alpine AS base
# RUN corepack enable

# FROM base AS deps
# RUN apk add --no-cache libc6-compat openssl
# WORKDIR /app

# COPY package.json pnpm-lock.yaml* ./
# RUN pnpm install 

# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Копируем Prisma отдельно и генерируем клиент
# COPY prisma ./prisma/
# RUN pnpm exec prisma generate

# RUN pnpm run build

# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV=production

# RUN addgroup --system --gid 1001 nodejs && \
#     adduser --system --uid 1001 nextjs

# # Копируем необходимые файлы для Prisma
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/prisma ./prisma
# COPY --from=builder /app/package.json ./package.json

# # Копируем собранное приложение
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# # Устанавливаем Prisma глобально на этапе runner
# RUN pnpm add -g prisma

# USER nextjs

# EXPOSE 3000

# ENV PORT=3000
# ENV HOSTNAME="0.0.0.0"

# # Используем полный путь к node и добавляем задержку для БД
# CMD sh -c "sleep 5 && pnpm exec prisma migrate deploy && node server.js"

# # FROM node:18-alpine AS base
# # RUN corepack enable

# # FROM base AS deps
# # RUN apk add --no-cache libc6-compat
# # WORKDIR /app

# # COPY package.json pnpm-lock.yaml* .npmrc* ./
# # COPY prisma ./prisma/
# # # RUN pnpm install --frozen-lockfile
# # RUN pnpm install --no-frozen-lockfile

# # RUN pnpm prisma generate

# # FROM base AS builder
# # WORKDIR /app
# # COPY --from=deps /app/node_modules ./node_modules
# # COPY --from=deps /app/prisma ./prisma
# # COPY . .

# # RUN pnpm prisma generate

# # RUN pnpm run build

# # FROM base AS runner
# # WORKDIR /app

# # ENV NODE_ENV=production

# # RUN addgroup --system --gid 1001 nodejs && \
# #     adduser --system --uid 1001 nextjs

# # # Копируем Prisma схему и клиент
# # COPY --from=builder /app/node_modules/.prisma /app/node_modules/.prisma
# # COPY --from=builder /app/node_modules/@prisma /app/node_modules/@prisma
# # COPY --from=builder /app/prisma ./prisma

# # COPY --from=builder /app/public ./public
# # COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# # COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# # USER nextjs

# # EXPOSE 3000

# # ENV PORT=3000
# # ENV HOSTNAME="0.0.0.0"

# # CMD sh -c "pnpm prisma migrate deploy && node server.js"
