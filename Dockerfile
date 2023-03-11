FROM php:7.1-apache

COPY docker/php.ini /usr/local/etc/php/

# Install dependencies
RUN apt-get update && apt-get -y upgrade && apt-get install -my wget gnupg -y git libmcrypt-dev libpng-dev libjpeg-dev zlib1g-dev \
    && docker-php-ext-install pdo pdo_mysql mcrypt mbstring exif zip \
    && docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer --version=1.10.20

# Install imagick
RUN apt-get update && apt-get install -y \
    libmagickwand-dev --no-install-recommends

RUN pecl install imagick && docker-php-ext-enable imagick

# Install node + yarn
RUN curl -sL https://deb.nodesource.com/setup_19.x | bash - \
    && apt-get install -y nodejs
RUN npm install -g yarn

WORKDIR /var/www

# Install app
RUN rm -rf /var/www/*
COPY . /var/www/

RUN usermod -u 1000 www-data

# Configure apache
RUN a2enmod rewrite
RUN a2enmod headers
COPY docker/vhost.conf /etc/apache2/sites-enabled/000-default.conf

EXPOSE 80