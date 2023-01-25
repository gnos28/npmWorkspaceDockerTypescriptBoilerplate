FROM node:19 as base

# CONTEXT MUST BE PARENT FOLDER !!!

WORKDIR /src
COPY back_2/package*.json ./
COPY packages ../packages
WORKDIR /packages/monpackage/
RUN rm -Rf node_modules
WORKDIR /src
EXPOSE 5000

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY back_2 /src
CMD ["nodemon", "src/index.js"]