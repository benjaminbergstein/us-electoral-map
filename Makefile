define COMPOSE_CMD
docker-compose -f ./dev/docker-compose.yml
endef

build-image:
	docker build . -t benbergstein/us-electoral-map:latest

build-js:
	${COMPOSE_CMD} run webserver build

build-html:
	${COMPOSE_CMD} run webserver build:html

build: build-image build-js build-html

develop:
	${COMPOSE_CMD} run webserver build:html install
	${COMPOSE_CMD} up -d
