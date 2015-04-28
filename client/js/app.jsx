var React = require('react');
var Header = require('./components/Header');
var Content = require('./components/Content');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
});

React.render(<App />, document.body);