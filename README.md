# Desafio - Simple Map API

Api desenvolvida para servir gravar o histórico de rotas para a aplicação SimpleMap.

## Stacks utilizadas
- Yarn (Para gerenciamento de dependêncis)
- Nodejs e Express (Server)
- MongoDB Atlas (Database)
- Youch (Para padronização de erros)
- Sentry (Para monitoramento de erros em produção)
- Docker (Aplicação em container)
- PM2 (Para gerenciamento de processos em tempo de execução JS)

## Arquitetura
- A arquitetura do seriço foi construida em módulos para garantir a produtividade caso o sistema ganhe novas features. 
- Fácil manutenção e entendimento, garantindo independendo de módulos.
- Fácil adaptação a mudanças.
- Generic Exception Handler, para faciltar a captura de erros.
- Validators para garantir que o corpo da requisição venha do formato correto.

Os módulos são divididos da seguinte forma:
- Módulo1
    - routes
    - controllers
    - validators
    - models
- Módulo2
    ....

## Instalação Local

Clonagem do diretório:
```
git clone https://github.com/robsonalvz/desafio-simple-route.git
```

Instale as dependencias do projeto
```
yarn install
```

## Configuração
Criação do arquivo de configuração local, altere as configurações da url da api e do mongo atlas de acordo com suas credenciais.
```
cp .env.example .env
```
## Rodando o projeto
```
yarn start
```

## Rodando o projeto com o Docker, fique a vontade para colocar a porta desejada,  e o nome desejado para a imagem/container.
```
docker build -t desafio .
docker run --name desafio -p 6000:5000 desafio
```