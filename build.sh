#!/bin/bash

# Install PHP and Composer
apt-get update && apt-get install -y php php-curl php-dom php-mbstring php-xml unzip
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install project dependencies
composer install --no-dev --optimize-autoloader --no-interaction

# Generate application key
php artisan key:generate --force

# Optimize the application
php artisan optimize

# Install Node.js and build assets
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
npm install
npm run build
