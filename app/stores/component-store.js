var _ = require('lodash');
var AppConstants = require('../constants/app-constants');
var createStore = require('./create-store');

var _components = [
  { name: 'react-draggable', displayName: 'React Draggable', example: 'Drag your stuff!', docs: 'This is documentation', repo: 'https://github.com/mzabriskie/react-draggable' }
];

var _actionResponders = {};
_actionResponders[AppConstants.ADD_ITEM] = function addItemResponder() {
  console.log('add item here');
};

var ComponentStore = createStore(_actionResponders, {
  getComponents: function() {
    return _components;
  },
  getComponentByName: function(name) {
    return _.find(_components, {name: name});
  }
});

module.exports = ComponentStore;