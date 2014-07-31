/** @jsx React.DOM */

var React = require('react');
var ComponentStore = require('../../../stores/component-store');

var ComponentPage = module.exports = React.createClass({
  render: function() {
    var component = ComponentStore.getComponentByName(this.props.params.name);
    if (!component) {
      return <h2>Component Not Found</h2>;
    }
    return (
      <div>
        <h2>Component Page for {component.displayName}</h2>
        <pre>{JSON.stringify(component, null, 2)}</pre>
      </div>
    );
  }
});