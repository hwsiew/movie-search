# React Demo Search Page

The is a demo movie search page which retrieve data using Open Movie Database (OMDB) API.  It is built using Reactjs without UI frameworks. This repo demostrates a common use case, fetching data from remote service, of app development. 

## How To
After downloading this repo, you can run this project locally by following the steps below.

1. `npm install` to download all dependencies.
2. `npm start` to start local development server.

### Others 
* `npm run test` to run test cases
* `npm run build` to build the project 

## Tech Stacks
* [create-react-app](https://github.com/facebook/create-react-app) - to scaffold a boilerplate react project
* [tailwindcss](https://tailwindcss.com/) - a utility first CSS framework to simplify app styling
* [React Query](https://react-query.tanstack.com/) - fetch data caching to improve UX

## WARNING!

For simplicity sake, this repo is focusing on frontend/client side development and therefore hardcoded its apikey in the project. You should, however, never ever hardcode sensitive crendentials in client side project. It is advisable to establish server-server communication in case you need to request data from third party API.  

## To Be Completed
Many more features can be implemented to improve the search page. Just to name a few below.

* [ ] To support link share by embedding query parameters in url, for example via react-router.
* [ ] Additional filtering parameters
* [ ] Loading animation
 

