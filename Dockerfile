FROM openjdk:8

RUN useradd -ms /bin/bash wiremock

USER wiremock

RUN  curl -L "https://github.com/kschepkin/wiremock/releases/download/2.25.11/wiremock-2.25.11.jar" -o /home/wiremock/wiremock.jar

CMD java -XX:+PrintFlagsFinal $JAVA_OPTIONS -jar /home/wiremock/wiremock.jar


