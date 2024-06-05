FROM node:lts-alpine as builder

WORKDIR /code

ADD package.json /code

ENV  NODE_OPTIONS=--openssl-legacy-provider
RUN  export NODE_OPTIONS

RUN npm install --registry=https://registry.npmmirror.com

ADD . /code
RUN npm run build:prod

#环境变量写在build后面否则找不到指令
ENV PROJECT_ENV production
ENV NODE_ENV production

FROM nginx:alpine

ARG PROFILES=""
RUN echo $PROFILES
# 设置时区
#RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
#RUN echo 'Asia/Shanghai' >/etc/timezone

COPY --from=builder code/dist/  /usr/share/nginx/html/
COPY ./ext/cert/$PROFILES  /etc/nginx/cert/
COPY ./ext/nginx_$PROFILES.conf  /etc/nginx/nginx.conf
EXPOSE 80
