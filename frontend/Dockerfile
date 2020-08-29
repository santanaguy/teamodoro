FROM node:14.8
LABEL Name = teamodoro-frontend

# #############################################################################
# Cache layer with package.json for node_modules 
#
ADD package.json package-lock.json ./tmp/
RUN cd /tmp && npm i npm@latest -g && npm install && npm i -g nodemon
RUN mkdir -p /home/app/teamodoro && cp -a /tmp/node_modules /home/app/teamodoro

# #############################################################################
# Application Code
#
COPY . /home/app/teamodoro

# #############################################################################
# Expose
#
WORKDIR /home/app/teamodoro
EXPOSE 4200 49153

# #############################################################################
# Start dev server with polling for Windows
# 
ENTRYPOINT ["/bin/bash", "-c", "npm run start:docker:poll"]
