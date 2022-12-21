# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR ${VIRTUAL_ROOT}

# Build arguments
ARG UID=${USER_ID}
ARG GID=${GROUP_ID}

# Add required packages
RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
		shadow \
        ca-certificates \
        curl \
        inotify-tools \
		vim \
		tzdata \
		certbot


# Add the www user
# RUN addgroup -S www && \
# 	adduser -S www -G www

# Configure build
# ENV DEBIAN_FRONTEND noninteractive
RUN rm -f /etc/localtime || true
RUN cp /usr/share/zoneinfo/Europe/London /etc/localtime && \
    date

# Add scripts for NPM
ADD ./scripts /scripts

# Expose the listening port
EXPOSE ${NGINX_NPM_PORT}

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Execute Next.Js using environment variables to start all services
# CMD ["sh", "/scripts/start.sh"]