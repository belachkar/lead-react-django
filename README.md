# Lead (Django REST - React frontend) API

Lead users RESTful API using REACT for the frontend API and Django for the REST API.

## Packages

### Python - pipenv

| Name                | Version | Description                                                                                                                                                                                                                                                                                                    |
| ------------------- | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| django              |       * | Django is a high-level **Python Web framework** that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source. |
| djangorestframework |       * | Django REST framework is a powerful and flexible toolkit for **building Web APIs**.                                                                                                                                                                                                                            |
| django-rest-knox    |       * | Knox provides easy to use **authentication for Django REST Framework** The aim is to allow for common patterns in applications that are REST based, with little extra effort; and to ensure that connections remain **secure**.                                                                                |

### NPM

| Name                                    | Version | Description                                                                                                                                                                                          |
| --------------------------------------- | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| webpack                                 |  4.41.2 | webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. |
| webpack-cli                             |   3.3.9 | webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project                                                                            |
| babel-loader                            |   8.0.6 |                                                                                                                                                                                                      |
| @babel/preset-react                     |   7.6.3 |                                                                                                                                                                                                      |
| babel-plugin-transform-class-properties |  6.24.1 |                                                                                                                                                                                                      |
| @babel/preset-env                       |   7.6.3 |                                                                                                                                                                                                      |
| @babel/core                             |   7.6.4 |                                                                                                                                                                                                      |
| react                                   | 16.11.0 |                                                                                                                                                                                                      |
| prop-types                              |  15.7.2 |                                                                                                                                                                                                      |
| react-dom                               | 16.11.0 |                                                                                                                                                                                                      |
| redux                                   |   4.0.4 |                                                                                                                                                                                                      |
| react-redux                             |   7.1.1 |                                                                                                                                                                                                      |
| redux-thunk                             |   2.3.0 |                                                                                                                                                                                                      |
| redux-devtools-extension                |  2.13.8 |                                                                                                                                                                                                      |
| axios                                   |  0.19.0 |                                                                                                                                                                                                      |

## Installing Packages

### NPM Packages

```nginx
npm install
```

### Pyton Packages

#### Installing pipenv

```nginx
pip install pipenv
```

#### Installing pipenv Packages

```nginx
pipenv install
```

## To Start the API

### Create the Database tables

```nginx
python manage.py migrate
```

### Launch the server

```nginx
python manage.py runserver
```
