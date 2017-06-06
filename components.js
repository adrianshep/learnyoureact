/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
solution.js:

    var express = require('express');
    var app = express();

    app.set('port', (process.argv[2] || 3000));
    app.set('view engine', 'jsx');
    app.set('views', __dirname + '/views');
    app.engine('jsx', require('express-react-views').createEngine({transformViews: false}));

    require('babel/register')({
        ignore: false
    });

    app.use('/', function (req, res) {
        res.render('index', '');
    });

    app.listen(app.get('port'), function () {
    });

────────────────────────────────────────────────────────────────────────────────
index.jsx:

    import React from 'react';

    export default class TodoBox extends React.Component {
        render() {
            return (
                <div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
        }
    }

    class TodoList extends React.Component {
        render() {
            return (
                <div className="todoList">
                    I am a TodoList.
                </div>
            );
        }
    }

    class TodoForm extends React.Component {
        render() {
            return (
                <div className="todoForm">
                    I am a TodoForm.
                </div>
            );
        }
    }



COMPONENTS
 Exercise 2 of 11

Let's start using React components!

You can make web applications with React.js by combining several components.
These use HTML tags together with JSX notation.

To render a React Component, create a local variable that starts with an
upper-case letter.

React's JSX uses the upper vs. lower case convention to distinguish between
local component classes and HTML tags.

    export default class MyComponent extends React.Component {*...*};
    let myElement = <MyComponent someProperty={true} />;
    ReactDOM.render(myElement, document.getElementById('example'));

# Challenge

-------------------------------------------------------------------------------
Update index.jsx as shown below.

    import React from 'react';

    export default class TodoBox extends React.Component {
        render() {
            return (
                <div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
        }
    }

    class TodoList extends React.Component {
      // Write code here
      <div class="todoList">
        I am a TodoList.
      </div>
    }

    class TodoForm extends React.Component {
      // Write code here
      <div class="todoForm">
        I am a TodoForm.
      </div>
    }

Implement the missing code above using JSX notation to output the HTML below.
Note: you don't have to change server-side code (program.js).
Don't forget render and return! :-)

    <div class="todoList">
      I am a TodoList.
    </div>

    <div class="todoForm">
      I am a TodoForm.
    </div>

JSX Docs: [https://facebook.github.io/react/docs/getting-started.html]
(https://facebook.github.io/react/docs/getting-started.html)

When you are ready run node program.js and access http://localhost:3000 to
see the HTML output in the browser.

Finally, run learnyoureact verify program.js to check your solution.

*/
