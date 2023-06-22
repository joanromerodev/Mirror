# Front End - React JS 👨🏻‍💻 

Mirror app was developed using React JS and powered by Tailwind CSS. It offers a seamless user experience for managing users in a database. With the help of React JS, the app provides dynamic and interactive features. The integration of libraries such as Sweet Alert enhances the user interface with beautiful and responsive alert boxes. React Hook Form simplifies form handling and validation, ensuring a smooth user input experience. Vite is utilized for efficient testing and building of the application. Together, these technologies and libraries contribute to Mirror's user-friendly interface and efficient functionality.

## Technologies

> Libraries, modules and packages

- [React](https://react.dev/) - Open-source front-end JavaScript library for building user interfaces based on components.

- [Tailwind](https://tailwindcss.com/) - Open source CSS framework.

- [Sweet Alert](https://sweetalert2.github.io/) - A beautiful, responsive, customizable, accessible replacement for Javascript's popup boxes

- [Vite](https://vitejs.dev/) - It's a build tool that aims to provide a faster and leaner development experience for modern web projects.

## Pre-requisites

You must have already installed:

- Node (latest version) : See [how to install](https://nodejs.dev/en/learn/how-to-install-nodejs/) NodeJS

- Visual Studio Code : See how to install VS Code for [Windows](https://code.visualstudio.com/docs/setup/windows), [Mac](https://code.visualstudio.com/docs/setup/mac) or [Linux](https://code.visualstudio.com/docs/setup/linux)

## How to install

### Clone the project

To be able to use the code and edit its files, you can easily clone this project from the root directory by running the following command in your preferred command shell:

git clone https://github.com/joanromerodev/Mirror.git

If you prefer to only clone this Front End repository, you can run the following commands:

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

1. FrontEnd - React

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

1. FrontEnd - React

├── public

│ ├── vite.svg

├── src

| ├── api

| | ├── index.js - In this file you can find the API calls to the backend for the different endpoints

| ├── ├── users.js - In this file you can find the API calls to the backend for the users endpoint

│ ├── assets

│ │ ├── some logos

│ ├── components

│ │ ├── jsx files for each component used in the app (e.g. Header.jsx)

│ ├── helpers

│ │ ├── some helper functions and configs for the app libraries and modules

│ ├── App.jsx

│ ├── index.css

│ └── main.jsx

├── .gitignore

├── package.json

├── README.md

└── vite.config.js

```

### Run the project

Once you have installed all the dependencies, you can run the project by running the following command:

```

npm run dev

```

This will run the app locally in development mode using Vite. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Features

> Create, update and delete users.

- To create new users, you can either click on the button inside the main container when no users are displayed or click on the floating button on the bottom right corner of the screen. This will open a modal where you can fill the form with the user's information. Once you're done, click on the "Save" button and the user will be added to the database. From the Frontend, for this feature we use one library called Sweet Alert which provides a beautiful and responsive alert box and one hook called React Hook Form which simplifies form handling and validation, ensuring a smooth user input experience. You can easily configure them by going into the **helpers** folder and editing the React Hook Form validations and style or Sweet Alert configuration.

> Set Theme

- You can set the theme of the app by clicking on the button on the top right corner of the screen. This will popup a menu container at the right side of the screen. Inside of that menu, you can change the theme of the app to dark mode. For this feature we use Tailwind CSS which is an open source CSS framework. You can modify its style and functionality by going into the components folder and editing the **Header.jsx** file. The theme is set by default to light mode. Since it is using localstorage to save the theme, it will remain the same even if you refresh the page.

> Filters and Pagination

- You can filter the users to show up to the maximum existing users in the Database or the minimum per row on the grid container: 1. You can also sort them by Oldest or Newest. The pagination is set to 5 users per page, this limit is set by the user in the filters by selecting the tools icon and limiting the fetch results. You can change this by going into the components folder and then opening either **Filters.jsx** or **Pagination.jsx** file and editing its content

### Build the project

To build the project, you can run the following command:

```
  npm run build
```

This will build the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### LICENSE

MIT

**Free Software, Hell Yeah!**
