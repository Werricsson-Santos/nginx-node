FROM nginx:1.15.0-alpine

# Remover configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/www/html