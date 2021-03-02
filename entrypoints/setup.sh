#!/bin/sh

set -o errexit
set -o nounset

sudo python3 entrypoints/delete_db.py
npm install --prefix ui/
npm run build:dll --prefix ui/
npm run build:dev --prefix ui/
composer install -d api/
docker-compose up
