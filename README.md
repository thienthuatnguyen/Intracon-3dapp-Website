# DMI GrandBasel - Frontend

- [Requirements](#requirements)
  - [Node](#node)
  - [Yarn](#yarn)
  - [Verify Installations](#verify-installations)
- [Running the Project & Available Commands/Scripts](#running-the-project--available-commandsscripts)
- [Project Structure](#project-structure)
- [Languages & tools](#languages--tools)
  - [UI Markup](#ui-markup)
  - [JavaScript](#javascript)
  - [CSS](#css)
  - [Static server with Hot Reloading](#static-server-with-hot-reloading)
- [Release & Deployment](#release--deployment)

## Requirements
* node `^10.15.0` (See `/src/package.json engines` field for **most recent** version required)
* Yarn `^1.9.4` (NPM CLI **not** supported)
* Docker `latest stable` *(Optional)*
* Docker Compose (manual install needed for only Linux) *(Optional)*

### Node

There are many ways to install Node and NPM. Recommended way to install is with using [NVM](https://github.com/creationix/nvm) (Node Version Manager) In this way you can easily install and switch between node versions

#### NVM Installation on OS X / Linux

You should run this in your terminal

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

for more details and to get latest version, go: [https://github.com/creationix/nvm](https://github.com/creationix/nvm)

#### NVM Installation on Windows

Just go on [nvm-windows repo](https://github.com/coreybutler/nvm-windows) to see installation instructions
xx

#### Node/NPM Installation

First verify your NVM installation first

    $ command -v nvm
    nvm

which should output 'nvm' if the installation was successful.



### Yarn

Just go on [yarn website](https://yarnpkg.com/en/docs/install) and follow the instructions for your platform

Note: Ensure node already installed in your system and chose Yarn installation without node

### Verify Installations

Run commands below to ensure your installation was successful

    $ node --version
    v10.15.0

    $ yarn --version
    1.9.4




## Running the Project & Available Commands/Scripts

Type this command to install the required packages:

    $ yarn

After completing the installation step, you're ready to start the project!

You should run all yarn related commands inside ./src folder.

    $ yarn dev  # Start the development server

While developing, you will probably rely mostly on `yarn dev`; however, there are additional scripts at your disposal:

| `yarn <script>`  | Description                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `dev`            | Serves your app at `localhost:3000` [Development]                                                                       |
| `dev:nocache`    | Clean-up all cache files from last build and serves your app at `localhost:3000` [Development]                          |
| `build`          | Builds the application to ./src/next                                                                                    |
| `start`          | Serves your app at `localhost:3000` [Production]                                                                        |
| `test`           | Runs unit tests.                                                                                                        |
| `test:watch`     | Runs `test` in watch mode to re-run tests when changed                                                                  |
| `lint`           | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`       | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |
| `analyze`        | Builds webpack bundle report and serves at `localhost:8888`                                                             |
| `docker_build`   | Builds fresh docker image __(Mac / Linux only)__                                                                        |
| `docker_restart` | Restart dev server inside Docker container __(Mac / Linux only)__                                                       |
| `docker_follow`  | Prints Docker container console output in realtime                                                                      |
| `docker_bash`    | Runs bash terminal inside Docker container                                                                              |

---

## Project Structure


```
.
├── container                   # [!] Used in Docker to run health check of hostname and port
├── scripts                     # [!] Docker related scripts. Needed for deployment and running container
├── src                         # Application source code
│   ├── .next                   # [!] Next framework working directory (Auto-generated)
│   ├── components              # Website-wise React Component including Global Reusable Components
│   │   └── reusable-modules    # React components for CMS modules
│   ├── pages                   # [1] Reserved route directory for Next.js
│   ├── static                  # [2] Reserved asset directory for Next.js
│   │   ├── fonts               # All font files needed website-wise. Should be grouped by folder
│   │   ├── styles              # [!] Auto-generated CSS files
│   │   └── svg                 # SVG assets. To be used in React components either with URL
│   ├── utils                   # Helper functions. DO NOT pile everything -- keep it clean.
├── README.md                   # Raw version of readme. Changes will be converted to HTML version
├── README.html                 # [!] Auto-generated styled version of README.md file
└── version                     # [!] Current version of Release
```
> *`[!]` DO NOT EDIT - Auto-genrated content or system files

> *`[1]` Create a file with React component to create new route. e.g. http://localhost/_FILENAME_

> *`[2]` Next.js will expose this directory to public. e.g. http://localhost/_static_/FILENAME

> *`[3]` Only global styles. Re-usable components needs to be styled in their file

## Languages & tools

### UI Markup

- [JSX](https://facebook.github.io/jsx/) for React components



### JavaScript

- [React](http://facebook.github.io/react) primary UI library.
- [Next.js](https://github.com/zeit/next.js/) is used as a server-side rendered React framework. [[learn]](https://learnnextjs.com/)
- [ESLint](https://eslint.org/) JS and JSX linting with [AirBnb's Style Guidleline](https://github.com/airbnb/javascript)
- [webpack](https://webpack.js.org/) for resource bundling (build-in with Next.js -- extra configuration `src/next.config.js` for project needs)
- [Express](https://expressjs.com) custom web server for [compression](https://github.com/expressjs/compression) and [server-side caching](https://www.npmjs.com/package/lru-cache) with API [proxying](https://www.npmjs.com/package/http-proxy-middleware) `src/server.js`



### CSS

See: Styled Components (https://www.styled-components.com/)

### Static server with Hot Reloading

The app embed for development a static connect server with Hot Realoding plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.

## Release & Deployment

Developers not allowed to do Stage and Production deployments, please contact with Intl Operations Cambodia <intl.ops.cambodia@dminc.com>
