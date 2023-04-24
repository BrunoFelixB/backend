# Back End

This one was developed using the MVC architecture.

## Config:


This file where we are going to define the port of the api

└── server.js

## Controllers:

This part where all the logic part of the API is:



├── src                   
├── controllers
└── apiControllers



This part where the routes are defined:

## Routes:



├── src                   
├── routers
└── apiRoutes


Route 1:

`URL/api/users`

Return a list of GitHub users and the link for the next page.

Route 2:

`URL/api/users/:username/details`

Return the details of a GitHub user

Route 3:

`URL/api/users/:username/repos`

Return a list with all user repositories

## Run the project

Project Clone git clone: `https://github.com/BrunoFelixB/backend-test.git`

install the dependencies using:`npm`

Install the following dependencies: `axios,cors,express,nodemon,link-header-parser`

### After all the configurations are done, run the project with the command:

`npm run server`

## Technologies Used

This project was built using:

Node.js 
Express.js
