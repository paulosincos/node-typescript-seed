# Builder stage: installs deps and builds the project
FROM node:22-slim AS builder

# Create app directory
WORKDIR /usr/src/app

# Copy package manifests first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies (including dev deps needed for build)
RUN npm ci --omit=optional

# Copy source
COPY . .

# Build the project (assumes `npm run build` produces `dist`)
RUN npm run build

# Final stage: only runtime files
FROM node:22-slim AS runner

WORKDIR /usr/src/app

# Copy only the compiled output and package.json (for metadata)
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json /usr/src/app/package-lock.json ./

# Install only production dependencies (if any). If your build bundles all deps, this step can be omitted.
RUN npm ci --omit=dev --omit=optional

# Set NODE_ENV
ENV NODE_ENV=production

# Default command — adjust if your compiled output has a different entry point
CMD ["node", "dist/app.js"]
