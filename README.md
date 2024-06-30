# Mailbox Web App

This app simulates a single user process of login in to an email app and have access to his/her mail. It is a monorepo consist of both
the `backend` api (data source) and `frontend` app.

## Getting Started

### Prerequisite
- [node](https://nodejs.org/) v18+
- [docker](https://nodejs.org/)
- [openssl](https://www.openssl.org/) (generates local secrets)

### Containers and service
The backend `docker-compose.yml` file describes the setup of the container(s).
The list of the containers:

| Container	| Description  |
|-----------|--------------|
| postgres	| postgress db |