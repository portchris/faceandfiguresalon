#!/bin/bash

CONF="/etc/nginx/conf.d/naturalremedy.co.uk.template"
CONF_DEFAULT="/etc/nginx/conf.d/default.conf"

if [ -z ${NGINX_TEMPLATE+x} ]; then
	echo "NGINX_TEMPLATE not set!"
	exit 1
fi

if [ -f $CONF_DEFAULT ]; then
	rm $CONF_DEFAULT
fi

# Update CONF to match current domain env
if [ ! -f $CONF ]; then
	CONF="/etc/nginx/conf.d/$NGINX_TEMPLATE"
fi

sed -e "s/{VIRTUAL_PORT}/$NGINX_VIRTUAL_PORT/g" -e "s/{NPM_PORT}/$NGINX_NPM_PORT/g" $CONF > $CONF_DEFAULT
echo # \n
cat $CONF_DEFAULT
echo # \n

# Restart web server in Docker mode
nginx -g "daemon off;"
