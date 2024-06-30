# Mailbox Web App

This app simulates a single user process of login in to an email app and have access to his/her mail. It is a monorepo consist of both Nest.js `backend` api (data source) and Next.s `frontend` app respectively.

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


## Run

### Build
Open you terminal and

- clone the app
```git clone git@github.com:bajakade/mailbox.git```

Install dependencies
```yarn install```

### Backend
From within the backend directory run the commands below

- Add  env

`cd backend && cp .env.example .env.local` (you can update environment values as you wish)

- Start `postgres` db container
```docker composer up```
Alternatively you can `right-click` on the `docker-compose.yml` file from vscode click on "_Compose Up_"

- Generate `prisma` client
```yarn prisma generate```

- Deploy migration
```yarn prisma migrate deploy```

- start the backend app development server
```yarn run start:dev```

You should now be able visit the api swagger docs at http://localhost:8000/api/docs


### Frontend
From within the frontend directory run the commands below

- Generate the `NEXTAUTH_SECRET` token using `openssl` utility
```openssl rand -base64 32```

- Add  env

`cd frontend && cp .env.local.example .env.local` (you can update environment values as you wish)

- Start development server
```yarn run dev```

You should now be able visit the webapp http://localhost:3000. Use the below credentials to login

`email`: `bashhau@gmail.com`

`password`: `Pass@123`
