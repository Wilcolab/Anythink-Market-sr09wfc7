# My Express Server

Este es un proyecto de servidor Express básico que escucha en el puerto 8001. Este servidor no tiene endpoints definidos y está diseñado para ser utilizado como un punto de partida para el desarrollo de aplicaciones más complejas.

## Requisitos

- Node.js
- npm o yarn
- Docker (opcional)

## Instalación

1. Clona el repositorio:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-sr09wfc7.git
   cd Anythink-Market-sr09wfc7/my-express-server
   ```

2. Instala las dependencias:

   Con npm:

   ```
   npm install
   ```

   O con yarn:

   ```
   yarn install
   ```

## Ejecución

Para ejecutar el servidor en modo desarrollo, utiliza Nodemon:

```
yarn start
```

El servidor escuchará en el puerto 8001.

## Docker

Para construir y ejecutar el servidor usando Docker, puedes usar el siguiente comando:

```
docker build -t my-express-server .
docker run -p 8001:8001 my-express-server
```

Esto expondrá el servidor en el puerto 8001 de tu máquina local.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.