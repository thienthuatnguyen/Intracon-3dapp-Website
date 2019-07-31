FROM node:10.15-alpine
MAINTAINER Murat Karacam <mkaracam@dminc.com>

RUN apk update && apk add bash && apk add --no-cache git
COPY container/ /

# Copy app source inside the container
COPY ./ /usr/src

# Build the sources inside the container
RUN cd /usr/src && FORCE_COLOR=0 yarn install --emoji=false --no-color --no-progess --frozen-lockfile && yarn build

HEALTHCHECK --interval=10s --timeout=2s --start-period=1800s CMD /wait-for-it.sh localhost:3000 --timeout=1
ENTRYPOINT ["/autorun.sh"]
