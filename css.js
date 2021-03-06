
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
                  <table style={{border: "2px solid black"}}>
                    <tbody>
                      <Todo title="Shopping">Milk</Todo>
                      <Todo title="Hair cut">13:00</Todo>
                      <Todo title="Learn React">15:00</Todo>
                    </tbody>
                  </table>
                </div>
            );
        }
    }

    class Todo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {checked: false};
        }

        handleChange(e) {
            this.setState({checked: e.target.checked});
        }

        render() {
            return (
                <tr>
                    <td style={style.tableContent}>
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                    </td>
                    <td style={style.tableContent}>{this.props.title}</td>
                    <td style={style.tableContent}>{this.props.children}</td>
                </tr>
            );
        }
    }
    Todo.propTypes = {
        title: React.PropTypes.string.isRequired
    };

    class TodoForm extends React.Component {
        render() {
            return (
                <div className="todoForm">
                    I am a TodoForm.
                </div>
            );
        }
    }

    let style = {
        tableContent: {
            border: "1px solid black"
        }
    };


CSS
 Exercise 6 of 11

Let's define styles as variables!

Variables are a smart way to make changes to multiple places in our code.
Lets assign some styles to a variable and see which parts of our code we can
simplify.

# Challenge

-------------------------------------------------------------------------------
Add style to index.jsx like below.

Before you start, you may want to check your current index.jsx into source
control, or create a new index.jsx for this exercise.

    import React from 'react';

    export default class TodoBox extends React.Component {
      // Omitted
    }

    class TodoList extends React.Component {
      // Omitted
    }

    class Todo extends React.Component {
      // Omitted
    }
    Todo.propTypes = {
      // Omitted
    };

    class TodoForm extends React.Component {
      // Omitted
    }

    let style = {
        tableContent: {
            border: "1px solid black"
        }
    };

Now change the code to use the style variable you added.
NOTE Some code is a little different from this style - be careful!

Inline Styles: [https://facebook.github.io/react/tips/inline-styles.html]
(https://facebook.github.io/react/tips/inline-styles.html)

After fixing your code, test it locally by running node program.js and
visiting http://localhost:3000 in your browser.

Once you're confident, run learnyoureact verify program.js.

From codecademy:

An alternative that's often nicer is to store a style object in a variable, and
then inject that variable into JSX.

Look in the code editor for an example. The style object is defined on lines 3-6,
and then injected on line 11.

If you aren't used to using modules, then this code may have made you twitch
uncontrollably:

var style = {
  color: 'darkcyan',
  background: 'mintcream'
};
Defining a variable named style in the top-level scope would be an extremely bad
idea in many JavaScript environments! In React, however, it's totally fine.

Remember that every file is invisible to every other file, except for what you
choose to expose via module.exports. You could have 100 different files, all
with global variables named style, and there could be no conflicts.

*/
