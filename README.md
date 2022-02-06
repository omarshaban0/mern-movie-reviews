# Welcome to the NS Movie Review Blog
My friends and I love watching, analyzing and enjoying films across many genres and regions. That is why, I wanted
to create a place where me and my friends can write and critique the movies we watch. The NS Movie Review Blog
will allow authorized users to create, edit, and delete reviews for movies provided by the IMDb API. These reviews can be
viewed by anybody on the homepage, and can be queried through the search function.

## Technologies Used
This is a **MERN Stack application** which is made up by four key technologies:

* [MongoDB](https://docs.mongodb.com/) - document base
* [express.js](https://expressjs.com/) - Node.js web framework
* [react.js](https://reactjs.org/) - a client-side JavaScript framework
* [node.js](https://nodejs.org/en/docs/) - an open source JavaScript web server/runtime


##### Other key technologies used include:

* [axios](https://www.npmjs.com/package/axios) - promise based HTTP client for browser and Node.js
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router ie) the router components for websites
* [nodemon](https://www.npmjs.com/package/nodemon) - automatically restarts node application when file changes are detected
* [IMDb API](https://developer.imdb.com/) - an API that returns metadata on +8 million movies


#### More technologies will be added in the future as more features are added

## Project Setup
After cloning the repository to your machine:

Install dependencies in both client and server sides of the application:

`npm install`

To test components of the application:

#### Backend:

make environment file with the following keys' values:
```
MOVIES_DB_URI= "path to mongodb url"
MOVIES_NS = "database name"
PORT = "port number"
```
Head to the backend directory of the project, and run:

`nodemon server`

#### Frontend:

Head to the frontend directory of the project, and run:

`npm start`

## Future Scope
1. I want to fix the current issues with the delete function of the API
2. I want to add more fields to the API get functions
After these problems are addressed, I am going to continue the frontend, and look into how to add an authorization functionality to the application.
