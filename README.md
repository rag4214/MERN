# MERN

Hello! This is a MERN template for people who want to self host. This was created for the sole reason that when working on MERN projects I always ended up repeating the same boilerplate steps.

This template comes with the following features:

- [Mongoose](https://mongoosejs.com/) [MongoDB](https://www.mongodb.com/) database
- [GraphQL](https://graphql.org/) [Express](https://expressjs.com/) backend
- [Next.js](https://nextjs.org/) [React](https://reactjs.org/) fontend
- [TypeScript](https://www.typescriptlang.org/) [Node.js](https://nodejs.org/en/) runtime
- [nginx](https://nginx.org/) HTTP/2 web server
- [Certbot](https://certbot.eff.org/) & [Let's Encrypt](https://letsencrypt.org/) HTTPS certificates
- [GitHub Actions](https://github.com/features/actions) automatic actions for pushes / pull requests to main branch
  - [CodeQL Analysis](https://codeql.github.com/docs/)
  - Status Checks
    - Lint
    - Build
- [Dependabot](https://dependabot.com/) automatic dependency updates

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Usage

- ### Setup

  - #### Nginx

    1. Open `nginx-server/nginx.conf`
    1. Edit the `server_name` in both `server` blocks by replacing `example.com` with your domain

       ```nginx
       server {
         listen      80;
         listen      [::]:80;
         server_name example.com www.example.com *.example.com;
                     ^^^^^^^^^^^     ^^^^^^^^^^^   ^^^^^^^^^^^
       ...

       server {
         listen      443 ssl http2;
         listen      [::]:443 ssl http2;
         server_name example.com www.example.com *.example.com;
                     ^^^^^^^^^^^     ^^^^^^^^^^^   ^^^^^^^^^^^
       ```

    1. Edit `ssl_certificate` and `ssl_certificate_key` in the second `server` block by replacing `example.com` with your (non-www) domain

       ```nginx
       server {
         listen      443 ssl http2;
         listen      [::]:443 ssl http2;

         ...

         ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
                                                   ^^^^^^^^^^^
         ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
                                                   ^^^^^^^^^^^
       ```

  - #### Certbot & Let's Encrypt

    1. Edit `init-letsencrypt.sh` by entering your email(optional) and replacing `example.com` with your domain

       ```bash
       domains=(example.com www.example.com)
                ^^^^^^^^^^^     ^^^^^^^^^^^
       ...

       email=""
             ^^
       ```

    1. Correct permissions for `init-letsencrypt.sh`:

       ```sh
       chmod +x ./init-letsencrypt.sh
       ```

- ### Starting

  For nginx to start the first time it needs to perform the Let's Encrypt validation but nginx won't start if the certificates are missing. To get around this:

  ```bash
  sudo ./init-letsencrypt.sh
  ```

  After that inital usage the application can be started with:

  ```bash
  docker-compose up -d
  ```

  The application will be accessible at `https://yourdomain`.

## Development

This project is broken up into two main sub-folders

- React Next.js files are located in `next-app/`
- Express GraphQL files are located in `express-api/`

[MongoDB](https://www.mongodb.com/) and [nginx](https://nginx.org/) will have to be installed and set up as their own services for full functionality.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
