FROM node:20

RUN apt update && apt install -y curl

# Install SSHX
RUN curl -fsSL https://sshx.io/get | sh

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "index.js"]
