FROM node:lts-bullseye-slim
WORKDIR /app
# COPY ./{yarn create時に指定したdir_name} /app
COPY ./app /app
EXPOSE 3000