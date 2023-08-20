# bookstore
# mern app

Simple page application where people can create their
tasks.

## Clone or Download

```
$ git clone https://github.com/rahulv2001/bookstore
$ yarn # or npm i
```
    
## Run Locally

### Prerequisites 

- MongoDB
- Node
- npm

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

### Client-side usage(PORT: 3000)

```
$ cd task-front-end          // go to task-front-end folder
$ yarn # or npm i    // npm install packages
$ npm start        // run it locally
// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

### Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a MONGO_URL in .env to connect to MongoDB)

- create a .env file in task-back-end
- write your MONGO_URL = YOUR_MONGO_URL

### Start

```
$ cd task-back-end  // go to task-back-end folder
$ npm i       // npm install packages
$ node index.js // run it locally
```
## Screenshots

#Home Screen
![Screenshot (372)](https://user-images.githubusercontent.com/91122689/213912885-65fdb7ba-0bc7-4898-8c60-f43c8110acf6.png)

#Adding Books
![Screenshot (370)](https://user-images.githubusercontent.com/91122689/213912929-0c683e98-3a50-4f27-8a06-bc9806f1c00e.png)

#All Books Screen
![Screenshot (371)](https://user-images.githubusercontent.com/91122689/213912902-c085e6f6-1c4e-4058-92cf-5c4af2b1a53f.png)

###End


