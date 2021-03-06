# React fundamentals workshop JSON server

Shopping cart REST API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Shopping cart API built using [json-server](https://github.com/typicode/json-server).

## Installing

There are 2 ways to run the API on your computer, natively using Node or using Docker.

### Using Node

Install node modules

`npm install`

Run development server

`npm run dev`

### Using Docker

Build image

`docker build -t socialnerds/shopping-cart .`

Run image

`docker run -p 3001:3001 -d socialnerds/shopping-cart`

## Usage

Shoppping cart API exposes 1 resource:

- `products`

JSON-Server provides some additional functionallity like filtering, pagination and more. Read the JSON-Server documentation for more.

## Deployment

WIP

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
