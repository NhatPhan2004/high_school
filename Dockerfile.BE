# Use Node.js 14 as the base image
FROM node:18-alpine as build

RUN mkdir /code

# Set the working directory
WORKDIR /code

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Copy the rest of the application
COPY backend/ .

# Install dependencies
RUN yarn install

RUN yarn build

# Expose the port the app runs on
# EXPOSE 6868

# Run the application
# CMD ["node", "dist/main"]