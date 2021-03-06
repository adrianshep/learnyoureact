


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
                    <td style={{border: "1px solid black"}}>
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                    </td>
                    <td style={{border: "1px solid black"}}>{this.props.title}</td>
                    <td style={{border: "1px solid black"}}>{this.props.children}</td>
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


STATE
 Exercise 5 of 11

Let's define mutable values!

So far we've rendered components with immutable properties using this.props.
But what if we want to update components?

this.state is private to each component and allows us to define mutable
values. Let's set the initial value of checkbox to false and define
a function to control the behavior of check events.

# Challenge

-------------------------------------------------------------------------------
Modify Todo in index.jsx like below.

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
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <tr>
                    <td style={{border: "1px solid black"}}>
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
                    </td>
                    <td style={{border: "1px solid black"}}>{this.props.title}</td>
                    <td style={{border: "1px solid black"}}>{this.props.children}</td>
                </tr>
            );
        }
    }
    Todo.propTypes = {
        title: React.PropTypes.string.isRequired
    };

    class TodoForm extends React.Component {
      // Omitted
    }

Write code to set the initial value of checked and define handleChange.
Within handleChange, you should update the component's state by using this.setState.

The resources are always recommended, but may be especially helpful here:
Component API: [https://facebook.github.io/react/docs/component-api.html]
(https://facebook.github.io/react/docs/component-api.html)
Component Specs and Lifecycle: [https://facebook.github.io/react/docs/component-specs.html]
(https://facebook.github.io/react/docs/component-specs.html)

From codecademy:

A React component can access dynamic information in two ways: props and state.

Unlike props, a component's state is not passed in from the outside. A component
decides its own state.

To make a component have state, write a getInitialState function:

var Example = React.createClass({
  getInitialState: function () {
    return { mood: 'decent' };
  },

  render: function () {
    return <div></div>;
  }
});

<Example />

getInitialState should return an object, like in the example above.

Look at the bottom of the above code. <Example /> has a state of { mood: 'decent' }.

To read a component's state, use the expression this.state.name-of-property:

var TodayImFeeling = React.createClass({
  getInitialState: function () {
    return { mood: 'decent' };
  },

  render: function(){
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
});

The above component class reads a property in its state from inside of its render function.

Just like this.props, you can use this.state from any property on the instructions object.

After fixing your code, test it locally by running node program.js and
visiting http://localhost:3000 in your browser.

Once you're confident, run learnyoureact verify program.js.

*/
