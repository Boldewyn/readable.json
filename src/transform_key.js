'use strict';

/**
 * replace formatted key with human-readable version
 *
 * E.g., replace camelCase with camel case.
 */
export default function(str) {
  str = str.replace(/([a-z])([A-Z])/g, (m, l, u) => l+' '+u.toLowerCase());
  str = str.replace(/_/g, ' ');
  str = str.replace(/^[a-z]/, m => m.toUpperCase());
  if (str === 'Id') {
    str = 'ID';
  }
  return str;
}
