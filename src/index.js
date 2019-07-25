'use strict';

var rollupPluginutils = require('rollup-pluginutils');

function jsonxReplace(codes) {
  var data = _f(codes);
  var replacedCodes = data.replacedCodes
  var matchedObj = data.matchedObj
  var kys = Object.keys(matchedObj)
  replacedCodes = replacedCodes.replace(/\s*\/\/.*$/mg, '');
  for (var i = 0; i < kys.length; i++) {
    replacedCodes = replacedCodes.replace(kys[i], matchedObj[kys[i]]);
  }
  return replacedCodes;

  function _f(codes) {
    var matchedObj = {};
    var replacedCodes = '';
    var regQuotation = /".*\/\/.*"/mg;
    var uniqueStr = 'QUOTATIONMARKS' + Math.floor(Math.random() * 10000);
    var index = 0;
    replacedCodes = codes.replace(regQuotation, function (match) {
      var s = uniqueStr + (index++);
      matchedObj[s] = match;
      return s;
    });
    return {
      replacedCodes,
      matchedObj
    };
  }
}

function jsonx(options) {
  if (options === void 0) options = {};

  var filter = rollupPluginutils.createFilter(options.include, options.exclude);
  var indent = 'indent' in options ? options.indent : '\t';

  return {
    name: 'jsonx',

    transform: function transform(jsonx, id) {
      if (id.slice(-6) !== '.jsonx' || !filter(id)) {
        return null;
      }

      return {
        code: rollupPluginutils.dataToEsm(JSON.parse(jsonxReplace(jsonx)), {
          preferConst: options.preferConst,
          compact: options.compact,
          namedExports: options.namedExports,
          indent: indent
        }),
        map: {
          mappings: ''
        }
      };
    }
  };
}

module.exports = jsonx;