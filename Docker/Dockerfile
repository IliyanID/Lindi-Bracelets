FROM node:14-alpine

ENV PORT=3000

RUN apk update
RUN apk add git
RUN apk add maven
RUN apk add openjdk8-jre
RUN npm install -g npm@6.14.15
RUN git clone https://github.com/IliyanID/Lindi-Bracelets.git && echo "no cache"
RUN cd /Lindi-Bracelets/Front-End && npm install && npm run build
RUN cp -r /Lindi-Bracelets/Front-End/build /Lindi-Bracelets/Back-End/src/main/resources/public
RUN cd /Lindi-Bracelets/Back-End && mvn -q package

WORKDIR /Lindi-Bracelets/Back-End/target

ENTRYPOINT java -jar Server-2.0-jar-with-dependencies.jar
EXPOSE 3000