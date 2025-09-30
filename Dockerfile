# Base image
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml first
COPY package.json pnpm-lock.yaml ./

# Install dependencies with pnpm
RUN pnpm install --frozen-lockfile

# Copy all files
COPY . .

# Build Next.js app
RUN pnpm run build

# Expose port
EXPOSE 3000

# Run production server
CMD ["pnpm", "dev"]
