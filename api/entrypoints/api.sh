#!/bin/bash

set -o errexit
set -o nounset

php artisan migrate:fresh
php artisan db:seed --class=ParkSeeder
php-fpm
