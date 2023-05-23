# My joruney to learn Node.js
This code snippets is nothing I invented on my won. I'm learning with the YouTute-Tutorial by the amazing Dave Gray and a Udemy-Course by Maximillian Schwarzmüller and try to reproduce the code.
<br><br>
Node.js-Youtube-Course by Dave Gray: https://www.youtube.com/watch?v=f2EqECiTBL8&t=2957s<br><br>
Udemy Courses by M. Schwarzmüller, NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno), [https://www.udemy.com/user/maximilian-schwarzmuller/](https://www.udemy.com/course/nodejs-the-complete-guide/)

## create server
A short scripts that demonstrates how to create a server with node.js.

## routes and user input (1)
Challenge: Create a sever with a text-input on the root path. After submitting crate a .txt-file with that contents the user-input and go back to the root folder.

## routes and user input (2)
Challenge: 
1. Spin up a node.js-driven-server on port 3000
2. Handle 2 routes: "/" and "/users"
  - Return some greeting text on "/"
  - Return a list of dummy users
3. Add a form with "username" (text-input) to the "/"-page and submit a POST -request to "/create-user" upon a button click
4. Add the "create-user"-route and parse the incoming data (i.e. the username) and simply to log it to the console

## file operations
how to work with files the most efficient way

## event emitter
a simple log event emitter
