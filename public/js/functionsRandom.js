'use strict'
function urlEncodingJson(path) {
    var Json = String(path)
      .replace(/%20/g, ' ')
      .replace(/%3A/g, ':')
      .replace(/%22/g, '"')
      .replace(/%2C/g, ',')
      .replace(/%40/g, '@')
      .replace(/%7B/g, '{')
      .replace(/%7D/g, '}')
      .replace(/%5B/g, '[')
      .replace(/j:/g, '"data":')
      .replace(/%5D/g, ']');
  return JSON.parse("{"+Json+"}");
}