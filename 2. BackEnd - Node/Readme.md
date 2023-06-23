# Back End - Node JS 👨🏻‍💻 

Mirror app was

## Technologies

> Libraries, modules and packages

- [Node](https://nodejs.org/en) - Evented I/O for the backend
- [Express](https://www.npmjs.com/package/express) - Provides small, robust tooling for HTTP servers, making it a great solution for single page applications, websites, hybrids, or public HTTP APIs.
- [Express Validator](https://www.npmjs.com/package/express-validator) - Express middleware for the validator module. It wraps validator.js validator and sanitizer functions to Express middleware.
- [Cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [Mongoose](https://www.npmjs.com/package/mongoose) - Object modeling tool designed to work in an asynchronous environment
- [Nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

## Pre-requisites

You must have already installed:

- Node (latest version) : See [how to install](https://nodejs.dev/en/learn/how-to-install-nodejs/) NodeJS

- Visual Studio Code : See how to install VS Code for [Windows](https://code.visualstudio.com/docs/setup/windows), [Mac](https://code.visualstudio.com/docs/setup/mac) or [Linux](https://code.visualstudio.com/docs/setup/linux)

### Clone the project

To be able to use the code and edit its files, you can easily clone this project from the root directory by running the following command in your preferred command shell:

git clone https://github.com/joanromerodev/Mirror.git

If you prefer to only clone this Back End repository, you can run the following commands:

1. Open the folder where you want to clone the project and run:

```

git init

```

2. Then enable sparse checkout in the root folder. When sparse checkout is enabled, Git allows you to selectively checkout only specific files or directories from a repository, ignoring the rest of the files. Run this command:

```

git config core.sparseCheckout true

```

3. Now, in the root folder, create a folder called .git and inside of it create another folder named info. Then, create a file called sparse-checkout. Inside that file, you'll add the name of the folder or path you want to add from that repository, in this case, add this:

```

1. BackEnd - Node

```

4. Finally, run this command to add the remote repository and perform the clone:

```

git remote add origin https://github.com/joanromerodev/Mirror.git

git pull origin main

```

### Install dependencies

As you may know, the packages folder wasn't uploaded since the **_.gitignore_** file excludes it. In those cases, and to get every package up to date, it's important for you to install them manually. You can do it by running the following command:

1. Change your directory by calling this line in your command shell

```

cd [your-project-directory]

```

2. Once you're in the root directory, install all the dependencies by just running this command:

```

npm install

```

This will install all of the modules and packages existing in the package.json file

### Understanding the project structure

The project is structured in the following way:

```

Mirror
├── BackEnd - Node
│   ├── controllers
│   │   ├── usersController.js // Contains all the logic for the users endpoints
│   ├── middlewares
│   │   ├── validateFields.js // Middleware to validate the fields of the request, it uses express-validator
│   ├── models
│   │   ├── Role.js // Model for the Role collection
│   │   ├── User.js // Model for the User collection
│   │   ├── Server.js // Model for the server of the app, it contains the logit to start the server, middlewares and connect to the database and listen to the port
│   ├── helpers
│   │   ├── dbValidators.js // Contains the logic to validate the fields of the request sent to the database, it uses express-validator
│   ├── public
│   │   ├── // Every static file to render the front end of the app
│   ├── routes
│   │   ├── users.js // Contains all the endpoints for the users
│   ├── database
│   │   ├── config.js // Contains the logic to connect to the database using Mongoose and dotenv
│   ├── .env // Contains the environment variables
│   ├── .gitignore  // Contains the files and folders to ignore
│   ├── app.js // It basically calls an instance of the Server model and starts the server
│   ├── package-lock.json
│   ├── package.json // Contains all the dependencies and scripts to run the app
│   ├── Readme.md

```

### Environment variables

The environment variables are stored in the **_.env_** file. This file is ignored by the **_.gitignore_** file, so you'll have to create it manually. Inside the **_.env_** file, you'll have to add the following variables:

```

PORT=3000

DB_CNN=mongodb+srv://[user]:[password]@[url]/[database]?retryWrites=true&w=majority

```

### Database

The database used for this project is MongoDB. To connect to the database, you'll have to create a cluster in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and add the connection string to the **_.env_** file.

Since there is a model for the User collection, by just making a POST request to the endpoint **_/api/users_** you'll be able to create a new user in the database.

### Run the project

To run the project, you'll have to run the following command in your command shell:

```

npm run dev

```

This will run the project in development mode. If you want to run it in production mode, you'll have to run the following command:

```

npm start

```

### LICENSE

MIT

**Free Software, Hell Yeah!**
