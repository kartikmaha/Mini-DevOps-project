# Base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy all app files
COPY . .

# Install dependencies
RUN pip install flask

# Environment variables (overridden by Jenkins)
ENV ENVIRONMENT=dev
ENV APP_VERSION=1.0.0
ENV BUILD_NUMBER=manual
ENV GIT_COMMIT=local

# Expose app port
EXPOSE 5000

# Run the API
CMD ["python", "app.py"]
