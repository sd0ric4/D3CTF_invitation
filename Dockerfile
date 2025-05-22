FROM node:20-alpine AS builder

WORKDIR /app

# 安装pnpm
RUN npm install -g pnpm

# 复制package.json和pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install

# 复制所有文件
COPY . .

# 构建应用
RUN pnpm build

# 生产阶段
FROM node:20-alpine

WORKDIR /app

# 复制构建文件
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/public /app/public

# 设置环境变量
ENV NODE_ENV=production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", ".output/server/index.mjs"]
