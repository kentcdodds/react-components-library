/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var ComponentList = React.createClass({
  render: function() {
    var links = this.props.components.map(function(component) {
      return <li key={component.name}><Link to="component" name={component.name}>{component.displayName}</Link></li>;
    });
    return <ul>{links}</ul>;
  }
});

module.exports = ComponentList;