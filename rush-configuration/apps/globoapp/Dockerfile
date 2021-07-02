# Image and tag
FROM node:alpine

WORKDIR /usr/app
# package.json para los scripts necesarios
COPY package.json .

RUN npm install

# Current directory/Destination directory
COPY . .

CMD ["npm", "start"]

#  Docker run: docker build .
#  Check image: docker image ls
#  Seleccionar tagname: docker build -t globalapp/latest .
#  Run: docker run globalapp/latest
#  Port Mapping: docker run -p 5000:3000 globoapp/latest