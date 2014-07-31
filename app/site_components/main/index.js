/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;
var ComponentList = require('./component-list');
var ComponentStore = require('../../stores/component-store');

var MainPage = module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Main Page</h2>
        Checkout this sweet list of components!
        <ComponentList components={ComponentStore.getComponents()} />
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});