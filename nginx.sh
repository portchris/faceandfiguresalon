#!/usr/bin/env bash

if [ -f ./.env ]; then
	set -a
	. ./.env
	set +a
	docker-compose exec --workdir $VIRTUAL_WEBROOT ff_nginx bash
else
	echo "Please create an .env file"
fi
