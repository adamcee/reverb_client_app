# React App to interact with the Reverb.com API

# Installation and Use
If you don't have node.js, [install node.js](https://nodejs.org/en/download/package-manager/). If you cannot use a package manager, binaries are [here](https://nodejs.org/en/download/). Installing node will install npm. 

Yarn is not necessary but is preferred as a package manager over npm, because it should build project dependencies more consistently. [Installation notes are here](https://yarnpkg.com/en/docs/install).

1. `cd reverb_client_app/reverb_client` 
2. `yarn` or `npm install`. *
3. `npm start`
4. Go to [http://localhost:8080](http://localhost:8080)

*NOTE: Node.js v6.11.5 is specified in package.json because of [an open issue with webpack](https://github.com/webpack/webpack/issues/6579). However the application should still build and run for node.js v6.9.1. For yarn, if you are not using node.js >=v6.11.5, run: 

`yarn --ignore-engines`. 

Note that `npm install` should work fine. 

It is recommended to [install nvm](https://github.com/creationix/nvm#installation) (which lets you manage and use different versions of node.js) and use it to get the correct version of node.js.


