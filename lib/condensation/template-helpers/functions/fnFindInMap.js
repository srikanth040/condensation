var _ = require("lodash");
var cValue = require("../cValue");

/**
 * Fn::FindInMap definition
 * @function fnFindInMap
 * @memberof "IntrinsicFunctions"
 * @type {function}
 * @param {string} mapName - logicalId of the map in the template
 * @param {string} topLevelKey - The top-level key name. Its value is a list of key-value pairs
 * @param {string} secondLevelKey - The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey
 * @param {Object} options - options for creting the logicalId reference
 * @return {string} A JSON compliant string for CloudFormation
 */
module.exports = function fnFindInMap(mapName, topLevelKey, secondLevelKey, options) {
  options = _.merge({hash: {}}, options);

  mapName = cValue(mapName, options);
  topLevelKey = cValue(topLevelKey, options);
  secondLevelKey = cValue(secondLevelKey, options);

  return '{"Fn::FindInMap": ['+[mapName,topLevelKey,secondLevelKey].join(",")+']}';

};

