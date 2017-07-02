

/*

Next, let's fix program.js.
You can also make a new program.js file and write all the code there.

First of all, let's add these require statements - like this:

    var React = require('react');
    var ReactDOMServer = require('react-dom/server');
    var DOM = React.DOM;
    var body = DOM.body;
    var div = DOM.div;
    var script = DOM.script;

    var browserify = require('browserify');
    var babelify = require("babelify");

Next, add a line that reads index.jsx under the sentence that require s babel/register.

    require('babel/register')({
        ignore: false
    });

    var TodoBox = require('./views/index.jsx');

*/
