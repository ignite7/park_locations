FROM node:14.15-alpine

# Set the workdir
WORKDIR /usr/src/park_locations/ui

# Copy everything from ui folder
COPY . /usr/src/park_locations/ui

# Install packages and build DLL and DEV webpack
RUN npm install --silent --no-progress --ignore-optional
