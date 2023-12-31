# Customer Points Program w/ Mock API

View the demo at [Demo Project](https://customer-points.netlify.app/).

The demo is deployed using netlify functions. Checkout the `serverless` branch to see more of that!

To get project running locally, clone repo and then navigate into your new site’s directory and start it up.

```shell
    npm i
    npm run dev
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Main script to run in development.
Runs both json server and react app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run json-server`

json-server --watch -p 4000 src/db.json

Serves mock DB via json-server on port 4000.\

Dev Endpoints:

- /transactions

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

![Ui screens](ui-screens.png)

## Project Brief

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.

(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

## Node Version

- v18.0.0
