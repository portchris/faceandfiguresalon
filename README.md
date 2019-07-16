# Face & Figure Salon - Beauty Salon Taunton 

## Environment
This is an React Next.Js Application communicating to a Magento backend.

The Face & Figure Environment is part of https://github.com/portchris/naturalremedy.company and has been included in the main build / start scripts. For the purpose of this document this shall be known as the <b>Parent</b>

In order to get Face & Figure Salon working you will need to add the necessary URL enpoints to the parents `env/nginx/.env` & `env/letsencrypt/.env`

The webserver itself is handled by this docker image: https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion - See here for more information on how to set it up.

## Installation

This project is designed to be setup as a child of the parent Natural Remedy Company, and placed in the following directory: 
`src/app/design/frontend/rwd_faceandfigure/default/faceandfiguresalon`

As part of the parent environment installation, you will have access to the `./npm.sh` script. Here are the commands required to get Face & Figure Salon running:

### `npm install`
Installs all dependencies 

### `./npm.sh run dev`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `./npm.sh run build`

Builds the app for production to the `out` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `./npm.sh run export`
This is the Next.Js equivalent of the above command and requires to be run straight afterwards.

### `./npm.sh run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Troubleshooting

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
