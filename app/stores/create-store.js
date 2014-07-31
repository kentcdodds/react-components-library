var AppDispatcher = require('../dispatchers/app-dispatcher');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

module.exports = function createStore(actionResponders, extras) {

  var storeExtras = merge({
    emitChange: function() {
      this.emit(CHANGE_EVENT)
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback)
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
      var action = payload.action;
      if (actionResponders[action.actionType]) {
        actionResponders[action.actionType](action);
        this.emitChange();
      }
      return true;
    })
  }, extras);

  return merge(EventEmitter.prototype, storeExtras);
};