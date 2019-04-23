FROM node:dubnium-alpine AS build-env
WORKDIR /
COPY . .
RUN apk add yarn
RUN yarn install --production && yarn run build

FROM nginx:alpine
WORKDIR /etc/nginx/site/static/js
COPY --from=build-env /build /etc/nginx/site
COPY nginx.conf /etc/nginx/nginx.conf
CMD export REACT_FILE=$(ls main.*.js) && \
    envsubst \$BFF_BASE_ADDRESS\$AUTHORIZATOR_BASE_ADDRESS\$CONTENT_SERVER_BASE_ADDRESS < $REACT_FILE > temp.txt && \
    rm $REACT_FILE && \
    mv temp.txt $REACT_FILE && \
    exec nginx -g 'daemon off;'
