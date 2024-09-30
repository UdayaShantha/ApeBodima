# base image for running the application
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built JAR file
COPY /home/runner/work/ApeBodima/ApeBodima/webApp-backend/build/libs/webApp-backend-1.0.0-alpha.jar app.jar

# Expose the port on which the Spring Boot application will run
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
