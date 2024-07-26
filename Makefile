build-ui:
	docker build . -t movies_ui

run-dev:
	docker-compose down
	docker-compose up -d
