# Use Node.js LTS as a base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.js"]
