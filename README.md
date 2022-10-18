Staging Website: https://cookialize.vercel.app/

## What is Cookialize?

Cookialize is a platform where people can browse and manage cooking events in a student accommodation.

## Developers

- [Abimanyu Yuda Dewa - 47292903](https://github.com/Abimanyu-TheProgrammer)
- [Abraham Rudolph - 47292864](https://github.com/abraham-rb)
- [Johanes Steven - 47282726](https://github.com/johanessteven19)
- [Junyao Li - 45059447](https://github.com/lijunyao1)
- [Seto Adhi Prasetyo - 47358537](https://github.com/setoaprasetyo)
- [Yuxuan Sun - 45643172](https://github.com/bbdyupup)

For building and running the application you need:

- [Node v16.16.0](https://nodejs.org/en/download/)
- NPM (comes with Node)
- [Yarn](https://yarnpkg.com/getting-started/install)
- .env.local file
<hr>

1. For the .env.local file, these environment variables are required for the connection to mongodb:

- DB_NAME
- MONGODB_DB
- MONGODB_URI

2. Install Dependencies, run this while in the project directory

```
$ yarn
```

3. Build the application

```
$ yarn build
```

4. Run the application on https://localhost:3000/

```
$ yarn start
```

5. Run test with Cypress (on localhost:3000)<br>
   Open two terminals, in the first one run this command

```
$ yarn dev
```

In the second one, run

```
$ yarn cypress:run
```
