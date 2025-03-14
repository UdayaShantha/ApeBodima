FROM node:20-alpine 

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY webapp-frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000  

CMD [ "npm", "start" ]
