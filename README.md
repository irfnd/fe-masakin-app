<!-- PROJECT LOGO -->
<div align="center">
  <p>
    <img src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fmain-banner.png?alt=media&token=d88c4590-775a-4292-b1bb-7eaec79a4539" alt="Logo" width="auto">
  </p>

  <h3 align="center">Masakin App (Frontend)</h3>
  <i><h4 align="center">A place to find inspiration for cooking recipes anywhere and anytime</h4></i>

  <p align="center">
    <a href="https://masakin-app.vercel.app/">View Demo</a>
    |
    <a href="https://github.com/irfnd/fe-masakin-app/issues">Report Bug</a>
    |
    <a href="https://github.com/irfnd/fe-masakin-app/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

**Masakin App** is a simple website that provides a variety of user-entered recipes, the recipes provided display ingredients and cooking stages with videos. Users can leave comments for the displayed recipes. In addition, users can also give likes and save the recipes they want.

### Built With

This app was built with some technologies below:

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.ecma-international.org/publications-and-standards/standards/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)](https://chakra-ui.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

[![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/download)

### Optional

You can install yarn package manager for your project

[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

### Installation

If you want to run this project locally, I recommend you to configure the [backend](https://github.com/irfnd/be-masakin-app/) first before configuring this frontend repo.

- Clone this repo

```bash
git clone https://github.com/irfnd/fe-masakin-app
```

- Go to folder repo

```bash
cd fe-masakin-app
```

- Install packages

```bash
npm install
```

- or install packages with yarn

```bash
yarn
```

- <a href="#setup-environment">Setup Environment</a>
- Type `npm run start` or `yarn start` to start project
- Type `npm run build` or `yarn build` to build production

### Setup Environment

- Read `.env.example` to get all detail environment for this project.
- Create your `.env` file based on .env.example
- Put `.env` to root project folder
- Example:

```
REACT_APP_MODE_ENV=[production/development]
REACT_APP_REST_API=[your-deployed-backend]
REACT_APP_REST_API_LOCAL=[your-local-backend]
```

## Screenshots

<p align="center" display=flex>
   
<table>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fregister.png?alt=media&token=58ffc058-4841-4857-a8bf-f206b0ce183d" alt="Register Page" width=100%/></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Flogin.png?alt=media&token=1ac1b6c0-58e2-4b2f-93c1-a050819e5c09" alt="Login Page" width=100%></td>
  </tr>
  <tr>
    <td>Register Page</td>
    <td>Login Page</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Flanding-no-login.png?alt=media&token=6df88451-942a-445b-8f3b-85063ffa385d" alt="Home (without login)" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Flanding-login.png?alt=media&token=6fb25e87-a14c-425a-a341-1bbb6a866ea1" alt="Home (with login)" width=100%/></td>
  </tr>
  <tr>
    <td>Home (without login)</td>
    <td>Home (with login)</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fprofile.png?alt=media&token=31addd5b-a996-4c86-b321-7ab7b5e82396" alt="Profile + My Recipes" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fliked-recipe.png?alt=media&token=fa6b1b27-e2c9-419d-96b9-4503abd7d43d" alt="Liked Recipes" width=100%/></td>
  </tr>
  <tr>
    <td>Profile + My Recipes</td>
    <td>Liked Recipes</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fsaved-recipe.png?alt=media&token=ac914a27-8cfb-49c6-89c9-c224bcd10a38" alt="Saved Recipes" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fadd-recipe.png?alt=media&token=74ed70e5-9ace-4418-a9c7-b48565a8f761" alt="Add Recipes" width=100%/></td>
  </tr>
  <tr>
    <td>Saved Recipes</td>
    <td>Add Recipes</td>
  </tr>
  <tr>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fsearch-recipe.png?alt=media&token=5acdf806-0caf-4ae2-8c3d-8e586f0db09d" alt="Search Recipes" width=100%></td>
    <td><image src="https://firebasestorage.googleapis.com/v0/b/masakin-app-irfnd.appspot.com/o/documentations%2Fdetail-recipe.png?alt=media&token=f35ef728-e69c-4ae1-9374-8d1d7010173d" alt="Detail Recipes" width=100%/></td>
  </tr>
  <tr>
    <td>Search Recipes</td>
    <td>Detail Recipes</td>
  </tr>
</table>
      
</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch `git checkout -b feature/AmazingFeature`
3. Commit your Changes `git commit -m 'Add some AmazingFeature'`
4. Push to the Branch `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

Distributed under the [MIT](/LICENSE) License.
