#!/bin/sh

# Ensure www has access to webroot
# sudo chown -R www:www $VIRTUAL_ROOT

# Install dependencies
npm install --global --production --prefix $VIRTUAL_ROOT

# Build app
npm run build --global --prefix $VIRTUAL_ROOT

# Start server
npm run start --global --prefix $VIRTUAL_ROOT