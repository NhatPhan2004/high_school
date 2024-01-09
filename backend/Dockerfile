FROM node:18-alpine as build

# Set the NODE_ENV environment variable
ENV NODE_ENV=backend

# Make working directory
RUN mkdir /code

# Set the working directory in the container
WORKDIR /code

# Copy package.json and package-lock.json to the container
ADD package*.json /code/
# COPY package*.json ./

COPY . . 

# Install dependencies
RUN yarn install


RUN yarn build

# Expose the port the app runs on
EXPOSE 8080

# Run the application
# CMD ["node", "dist/main"]