#!/usr/bin/env bash

if [ -f ./.env ]; then
	set -a
	. ./.env
	set +a
	read -p "Shell as node user? [Y/y]? " -n 1 -r
	echo # (optional) move to a new line
	if [[ $REPLY =~ ^[Yy]$ ]]; then
		docker exec -it -u node ff_nextjs sh -c 'cd '"$VIRTUAL_WEBROOT"'; exec "${SHELL:-sh}"'
	else
		docker exec -it ff_nextjs sh
	fi
else
	echo "Please create an .env file"
fi