Face & Figure Salon - Beauty Salon Taunton
=============================================

## Environment

1. React / Next.Js
2. Prismic CMS
3. NGINX Proxy Redirect Server
4. AWS Lightsail Hosting (LEMP)

In order to get Face & Figure Salon working you will need to configure your [./.env](./.env) file.
An example `.env` file:

```bash
REACT_APP_URL=""
REACT_APP_RECAPTCHA_SITEKEY=""
REACT_APP_RECAPTCHA_SECRETKEY=""
REACT_APP_RECAPTCHA_URI=""
REACT_APP_WUFOO_URI=""
REACT_APP_WUFOO_IDSTAMP=""
REACT_APP_GOOGLE_MAPS_EMBED_URI=""
REACT_APP_GOOGLE_MAPS_API_KEY=""
REACT_APP_GOOGLE_MAPS_MODE=""
REACT_APP_PRISMIC_REPO_NAME=""
TEMPLATE=""
VIRTUAL_WEBROOT=""
VIRTUAL_HOST=""
VIRTUAL_PORT=""
VIRTUAL_PROTO=""
NEXTJS_PORT=""
LETSENCRYPT_EMAIL=""
LETSENCRYPT_HOST=""
LETSENCRYPT_TEST=""
ENABLE_IPV6=""
USER_ID=""
GROUP_ID=""
```

The webserver itself is handled by this docker image: https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion - See here for more information on how to set it up.

## Installation

NPM for installation of all dependencies:

```bash
npm install
npm run dev
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To set-up TailwindCSS:
```bash
npx tailwindcss init
```

To start up Prismic.io [Slice Machine](https://prismic.io/docs/nextjs) which allows you to create custom documents / types:
```bash
yarn run slicemachine
```


## Deployment

When you're ready to deploy, clone this project to the production server build the application:

```bash
npm run build --production
```
This will generate a [./dist](./dist) directory which is your generated Next.Js application

Now it's time to bring up your Docker containers:
```bash
./stop.sh
./build.sh --no-cache
./start.sh
```
This will start up the `nextjs` and `nginx` redirect proxy server. Don't forget this is only 1/2 the solution to the webserver.
The webserver itself is handled by this docker image: https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion - See here for more information on how to set it up.


## Troubleshooting

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

`npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

`yarn run slicemachine`
To run [Slice Machine](https://prismic.io/docs/nextjs)

`./start.sh` Docker
There is a [./logs.sh](./logs.sh) file which will allow you to debug Docker.