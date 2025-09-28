#!/bin/bash

# Exit on error
set -e

# Install Node.js (Render provides this)
echo "Installing Node.js..."

# Install dependencies
echo "Installing PHP dependencies..."
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

# Install Composer dependencies
echo "Installing Composer dependencies..."
php composer.phar install --no-dev --optimize-autoloader --no-interaction

# Generate application key if not exists
if [ ! -f ".env" ]; then
    cp .env.example .env
    php artisan key:generate
fi

# Optimize the application
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Install Node dependencies and build assets
echo "Installing Node dependencies..."
npm install
npm run build
