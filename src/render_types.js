'use strict';


import h from 'hyperscript';
import hl from 'hyperscript-helpers';

import parse_string from './parse_string';
import type_of from './type_of';
import transform_key from './transform_key';

const { div, dl, dt, dd, ol, li, span, } = hl(h);

const render = {};

render.object = function(data, tree) {
  var subtree = dl('.json-object');
  for (let key in data) {
    let parsed_key = transform_key(key);
    let _dt = dt('.json-object-key', parsed_key);
    if (parsed_key !== key) {
      _dt.title = key;
    }
    subtree.appendChild(_dt);
    var item = dd('.json-object-value');
    render_item(data[key], item);
    subtree.appendChild(item);
  }
  if (! subtree.children.length) {
    subtree = div('.json-object.json-object--empty.json-empty', '(empty map)');
  }
  tree.appendChild(subtree);
}

render.array = function(data, tree) {
  var subtree = ol('.json-array',
    data.map(item => {
      var _li = li('.json-array-item');
      render_item(item, _li);
      return _li;
    })
  );
  if (! subtree.children.length) {
    subtree = div('.json-array.json-array--empty.json-empty', '(empty list)');
  }
  tree.appendChild(subtree);
}

render.string = function(data, tree) {
  tree.appendChild(span('.json-string' +
      (data?'':'.json-string--empty.json-empty'),
      parse_string(data)));
}

render.number = function(data, tree) {
  var method = data.toLocaleString? 'toLocaleString' : 'toString';
  var _span = span('.json-number', data[method]());
  if (method === 'toLocaleString') {
    _span.title = data.toString();
  }
  tree.appendChild(_span);
}

render.boolean = function(data, tree) {
  var value = '\u2713';
  if (! data) {
    value = '\u2717';
  }
  tree.appendChild(span('.json-bool.json-bool--'+(data? 'true' : 'false'), value));
}

render.null = function(data, tree) {
  tree.appendChild(span('.json-null', {
    title: 'null',
  }, '\u2014'));
}


export default function render_item(data, tree) {
  render[type_of(data)](data, tree);
}
