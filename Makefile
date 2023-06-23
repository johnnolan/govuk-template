run-structurizr:
	docker pull structurizr/lite
	docker run -it --rm -p 8080:8080 -v $(PWD)/docs/diagrams/dsl:/usr/local/structurizr structurizr/lite

run-structurizr-export:
	docker pull structurizr/cli:latest
	docker run --rm -v $(PWD)/docs/diagrams/dsl:/usr/local/structurizr structurizr/cli \
	export -workspace /usr/local/structurizr/workspace.dsl -format mermaid
