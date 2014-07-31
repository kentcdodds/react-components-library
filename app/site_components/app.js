/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

var App = module.exports = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1><Link to="main">App</Link></h1>
        {this.props.activeRouteHandler()}
      </div>
    );
  }

});
