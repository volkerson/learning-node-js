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

# using express.js: router, path and static
A first workin example using router, path and static for the learning project.

# Template Engines: Pug
Pug is a template egines that uses a very minimised syntax of html that required no closing-tags.
```
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title Example Page
    body 
        h1 Some example heading 


```
Visual Studio Code offers of course makes your life easier and offers snippets and syntax support.<br>
At first I was really confused by the syntax. But if you have a huge and complex html document, an easy syntax like that can be a game changer because you don't need to worry about closing tags.<br>
The official PUG documentation: https://pugjs.org/api/getting-started.html


# Template Enginges: Handlebars
Handlebars is closer to what you might expect from a Template Engine. You keep your html as it it and you just add some handlebars template expression. A result can look like that:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ pageTitle }}</title>
</head>
<body>
    <h1>{{ pageHeading }}</h1>
    <ul>
        {{# each product }}
            <li>{{ this.title}}</li>
        {{/ each}}
    </ul>
</body>
</html>
```
When it come to if-condition, Handelbars con only handle booleans. That forces you to keep the logic outside of templates. <br>
Handlebars Documentation: https://handlebarsjs.com/guide/#what-is-handlebars

# Template Engines: EJS
EJS is the template engine that offers the biggest flexibility. While Pug and Handlebars have their limitations when it comes to seperate or import code into files because they work more like classes that extend on other classes, EJS uses partials. But it is more complex than Handlebars and PUG.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= pageTitle %></title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <%- include('includes/header'); %>
    <main>
        <h1>Product Overview</h1>
        <% if(items.length > 0) { %>
        <div class="grid">
            <% for(let item of items) { %>
            <article class="card product-item">
                <header class="card__header">
                    <h1 class="product__title"><%= item.product__name %></h1>
                </header>
                <div class="card__image">
                    <img src="<%= item.product__imgurl %>" alt="">
                </div>
                <div class="card__content">
                    <h2 class="product__price"><%= item.product__price %></h2>
                    <p class="product__description"><%= item.product__description %></p>
                </div>
                <div class="card__actions">
                    <button class="btn">Add to card</button>
                </div>
            </article>
            <% } %>
        </div>
        <% } else { %>
        <p>No products found!</p>
        <% } %>
    </main>
</body>
</html>
```
Official documentation: https://ejs.co/#docs
