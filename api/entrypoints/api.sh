#!/bin/bash

set -o errexit
set -o nounset

php artisan migrate:refresh --seed
php-fpm
