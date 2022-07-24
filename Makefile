build:
	docker-compose build

up:
	docker volume create --name=dockerize-nginx-node-mysql-container
	docker-compose -p dockerize-nginx-node-mysql-container up -d

down: 
	docker-compose -p dockerize-nginx-node-mysql-container down
	docker rmi -f dockerize_nginx_node_mysql_client  dockerize_nginx_node_mysql_nginx  dockerize_nginx_node_mysql_api
	docker volume prune -f