define COMPOSE_CMD
docker-compose -f ./dev/docker-compose.yml run webserver
endef

build-image:
	docker build . -t benbergstein/us-electoral-map:latest

build-js:
	${COMPOSE_CMD} build

build-html:
	${COMPOSE_CMD} build:html

build: build-image build-js build-html

develop:
	${COMPOSE_CMD}
