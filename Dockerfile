FROM ubuntu:trusty

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs
RUN curl https://install.meteor.com/ | sh

#WORKDIR /root
#RUN wget https://github.com/meteor/simple-todos/archive/master.zip && \
#    unzip master.zip
#WORKDIR /root/simple-todos-master
#RUN meteor build . --architecture os.linux.x86_64
#RUN ls
#RUN meteor build . --architecture os.linux.x86_64 && \
#RUN tar -xzf simple-todos-master.tar.gz -C ../

#WORKDIR /root/bundle/programs/server
#RUN npm install

EXPOSE 8080

WORKDIR /root/bundle
CMD ["node", "main.js"]
