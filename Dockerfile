FROM node:18-alpine
WORKDIR /app
COPY site ./site
RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "-s", "site", "-l", "8080"]
