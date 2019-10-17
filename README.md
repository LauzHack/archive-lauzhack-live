# Lauzhack Live

This is the repository for the front-end part of the live page of Lauzhack. This application is deployed at https://live.lauzhack.com.

This application calls a backend every 30 seconds (configurable parameter), from where it downloads the announcements list. Then, it displays them to the user. It also contains a https://walls.io social page for displaying the latest news related to LauzHack in social media.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Developing locally

To develop locally in your machine, Node.js and npm are required. This was developed using Node 12 LTS, so [Node Version Manager](https://github.com/creationix/nvm) is recommended for having the specific version installed, listed in `package.json` (node and npm versions are checked when setting up the project using [ensure-node-env](https://github.com/Skyscanner/ensure-node-env)).

After installing the correct Node version using nvm, you can make sure you are using it by typing `nvm use`.

Install all the requirements using `npm install`.

Start the server in port `3000` using `npm start`. 

Use any IDE of choice to write the code (though IntelliJ/Webstorm was used during development).

## Deploying

The aplication is deployed as a static page in Amazon S3. Use the `deploy.sh` script to do so. 

If you want to deploy it somewhere else, run `npm run build` and serve the files in the `build` folder from a webserver.

## Customizing

Some parameters of the application can be customized without changing the code. They are located in the `src/config.json` file. 

## Future features

* Play a sound when a new message comes in.
