# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy project files
COPY package*.json ./
RUN npm install

COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose port 3000 (inside the container)
EXPOSE 3000

# Start the Next.js production server
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
