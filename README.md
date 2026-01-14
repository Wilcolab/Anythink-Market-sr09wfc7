# Anythink Market - Multi-Server Application

This project contains a FastAPI server (Python) and an Express server (Node.js) implemented in a multi-container Docker setup.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: FastAPI server implementation with task management routes.
- `python-server/src/__init__.py`: Python package marker file.
- `python-server/requirements.txt`: Python dependencies (FastAPI, Uvicorn).
- `python-server/Dockerfile`: Docker image configuration for the Python server.

- `my-express-server/src/app.js`: Express.js server implementation with task management routes.
- `my-express-server/package.json`: Node.js dependencies (Express, Nodemon).
- `my-express-server/nodemon.json`: Nodemon configuration for hot-reload during development.
- `my-express-server/Dockerfile`: Docker image configuration for the Node.js server.

- `docker-compose.yml`: Docker Compose configuration to run both servers together.

## Getting Started

To run both servers using Docker Compose, execute:

```shell
docker compose up -d
```

This will:
- Build Docker images for both services
- Start the Python FastAPI server on port `8000`
- Start the Node.js Express server on port `8001`

## API Routes

### Python Server (Port 8000)
- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list (request body: `{"text": "task text"}`)
- `GET /tasks`: Retrieves all tasks

### Node.js Server (Port 8001)
- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list (request body: `{"text": "task text"}`)
- `GET /tasks`: Retrieves all tasks

## Development

For local development with hot-reload on the Node.js server:

```shell
cd my-express-server
npm install
npm start
```

The server will automatically reload when code changes are made thanks to Nodemon.

:)