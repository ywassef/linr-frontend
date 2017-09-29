#!/usr/bin/env bash

npm run build
rsync -r deploy/ /srv/www/linrapp.me/
