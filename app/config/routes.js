/** @jsx React.DOM */
var Route = require('react-router').Route;
var Routes = require('react-router').Routes;

function getHandler(path) {
  return require('../site_components/' + path);
}

module.exports = (
  <Routes>
    <Route location="history" handler={getHandler('app')}>
      <Route name="main" path="/" handler={getHandler('main/index')}>
        <Route name="component" path="components/:name" handler={getHandler('main/component/index')} />
      </Route>
    </Route>
  </Routes>
);
