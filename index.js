const { getOptions } = require('loader-utils');
const pathize = require('svg-pathize');

module.exports = function(contents) {
  const data = pathize(contents, Object.assign({}, getOptions(this)));
  return `module.exports = ${JSON.stringify(data)};`;
};
