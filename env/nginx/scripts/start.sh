#!/bin/bash

CONF="/etc/nginx/conf.d/naturalremedy.co.uk.template"
CONF_DEFAULT="/etc/nginx/conf.d/default.conf"

if [ -z ${TEMPLATE+x} ]; then
	echo "TEMPLATE not set!"
	exit 1
fi

if [ -f $CONF_DEFAULT ]; then
	rm $CONF_DEFAULT
fi

# Update CONF to match current domain env
if [ ! -f $CONF ]; then
	CONF="/etc/nginx/conf.d/$TEMPLATE"
fi

sed -e "s/{VIRTUAL_PORT}/$VIRTUAL_PORT/g" -e "s/{NEXTJS_PORT}/$NEXTJS_PORT/g" $CONF > $CONF_DEFAULT
echo # \n
cat $CONF_DEFAULT
echo # \n

# Restart web server in Docker mode
nginx -g "daemon off;"
