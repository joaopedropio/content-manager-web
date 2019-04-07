FROM node:dubnium-alpine AS build-env
WORKDIR /
COPY . .
RUN npm install --production && npm run build


FROM nginx:alpine
WORKDIR /
COPY --from=build-env /build /etc/nginx/site
COPY nginx.conf /etc/nginx/nginx.conf
