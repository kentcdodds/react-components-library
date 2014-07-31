var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

function getViewActionHandler(type, argName) {
  return function(arg) {
    var action = { actionType: type };
    action[argName] = arg;
    return AppDispatcher.handleViewAction(action);
  }
}

var AppActions = {
  addItem: getViewActionHandler(AppConstants.ADD_ITEM, 'item')
};

module.exports = AppActions;