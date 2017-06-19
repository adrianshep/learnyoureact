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
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    class Todo extends React.Component {
        render() {
            return (
                <tr>
                    <td style={{border: "1px solid black"}}>{this.props.title}</td>
                    <td style={{border: "1px solid black"}}>{this.props.children}</td>
                </tr>
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


PROPS
 Exercise 3 of 11

Now let's learn to pass values from a parent component to a child component.

A child component can have values handed to it either through attributes, or
through nested content.

<ChildComponent some-attribute="this gets passed">So does this</ChildComponent>

# Challenge

-------------------------------------------------------------------------------
Modify TodoList in index.jsx like below, adding Todo.

Before you start, you may want to check your current index.jsx into source
control, or create a new index.jsx for this exercise.

    import React from 'react';

    export default class TodoBox extends React.Component {
      // Omitted
    }

    class TodoList extends React.Component {
        render() {
            return (
                <div className="todoList">
                    <table style={{border: "2px solid black"}}>
                        <tbody>
                        <Todo title="Shopping">Milk</Todo>
                        <Todo title="Hair cut">13:00</Todo>
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    class Todo extends React.Component {
      // Write code here
    }

    class TodoForm extends React.Component {
      // Omitted
    }

Now at each of the "Write code here" comments, write some JSX that results in
the following HTML.

Within Todo, you can get the value of the title attribute set in TodoList
(the parent component) by using {this.props.title}. Likewise, you can get the
values Milk and 13:00 by using {this.props.children}.

Note: you don't have to change server-side code (program.js).

    <div class="todoList">
      <table style="border:2px solid black;">
        <tbody>
          <tr>
            <td style="border:1px solid black;">Shopping</td>
            <td style="border:1px solid black;">Milk</td>
          </tr>
          <tr>
            <td style="border:1px solid black;">Hair cut</td>
            <td style="border:1px solid black;">13:00</td>
          </tr>
        </tbody>
      </table>
    </div>

After writing code, run node program.js and visit http://localhost:3000 to
make sure it looks right.

Once you're confident, run learnyoureact verify program.js.

From codecademy:

Every component has something called props.

A component's props is an object. It holds information about that component.

To see a component's props object, you use the expression this.props. Here's an
example of this.props being used inside of a render function:

render: function () {

  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}

Most of the information in this.props is pretty useless! But some of it is
extremely important.

*/
