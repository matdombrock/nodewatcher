FROM ubuntu:20.04
EXPOSE 7331
WORKDIR /usr/src/app
RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y
RUN apt install git -y
RUN git clone https://github.com/matdombrock/nodewatcher.git
RUN cd nodewatcher && npm install
CMD cd nodewatcher && node index