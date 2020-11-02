ENVIRONMENT ?= development
PROJECT=electoral_map

define COMPOSE_CMD
docker-compose -f ./dev/docker-compose.${ENVIRONMENT}.yml --project-directory . -p ${PROJECT}_${ENVIRONMENT}
endef

build-image:
	docker build . -t benbergstein/us-electoral-map:latest

build-app:
	${COMPOSE_CMD} run app build
	${COMPOSE_CMD} run app export

build: ENVIRONMENT=production
build: build-image down up cp down

cp:
	rm -rf out
	docker cp electoral_map_production_app_1:/app/out out
	cp -r out/* docs

install:
	${COMPOSE_CMD} run app install

console:
	${COMPOSE_CMD} exec app /bin/bash

develop: build-html up

up:
	${COMPOSE_CMD} up -d

logs:
	${COMPOSE_CMD} logs -f app

down:
	${COMPOSE_CMD} down
