build:
	docker-compose build

up:
	docker volume create --name=dockerize-nginx-node-mysql-container
	docker-compose -p dockerize-nginx-node-mysql-container up -d

down: 
	docker-compose -p nnm-container down
	docker rmi -f nnm_api  nnm_client  nnm_nginx
	docker volume prune -f