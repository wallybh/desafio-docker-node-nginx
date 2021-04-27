# Desafio node nginx Full Cycle

Essa aplicação deverá utilizar o nginx como reverse proxy, uma aplicação node que se comunica com o servidor mysql para listar uma lista de pessoas. Tudo isso utilizando o docker compose. A aplicação deve executar na porta 8080.

Para executar a aplicação execute o comando:
> docker-compose up -d

Para executar o container cli e desenvolver sem precisar de instalar o node na máquina de desenvolvimento:
>   docker-compose run --rm -p 3000:3000 node-cli bash