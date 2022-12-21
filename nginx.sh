#!/usr/bin/env bash

docker-compose exec ff_nginx bash -c 'cd /etc/nginx; exec "${SHELL:-sh}"'
