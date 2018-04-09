# React App to interact with the Reverb.com API

# Installation and Use
If you don't have node.js, [install node.js](https://nodejs.org/en/download/package-manager/). If you cannot use a package manager, binaries are [here](https://nodejs.org/en/download/). Installing node will install npm. 

Yarn is not necessary but is preferred as a package manager over npm, because it should build project dependencies more consistently. [Installation notes are here](https://yarnpkg.com/en/docs/install).

1. `cd reverb_client_app/reverb_client` 
2. `yarn` or `npm install`. 

NOTE: Node.js v8.11.0 is specified in package.json because of [an open issue with webpack](https://github.com/webpack/webpack/issues/6579). However the application should still run for node.js >=v6.9.1. For yarn, if you are not using node.js version 8.11.0, run `yarn --ignore-engines`. `npm install` should work fine.

You can use [nvm](  https://github.com/creationix/nvm#installation) to install and switch between different versions of node.js. 

3. `npm start`
4. Go to [http://localhost:8080](http://localhost:8080)
