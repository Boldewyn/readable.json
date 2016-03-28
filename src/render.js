'use strict';


import h from 'hyperscript';
import hl from 'hyperscript-helpers';

import render_item from './render_types';

const { div, p, pre, } = hl(h);


export default function render_view(json, stage) {
  var tree = div('.json-root');

  try {
    var data = JSON.parse(json);
  } catch (e) {
    tree = div('.json-error');
    tree.appendChild(p('The provided data is invalid.'));
    tree.appendChild(pre(e.message));
    stage.appendChild(tree);
    return;
  }

  try {
    render_item(data, tree);
  } catch (e) {
    tree = div('.json-error');
    tree.appendChild(p('A processing error occurred:'));
    tree.appendChild(pre(e.message));
    console.log(e);
  }
  stage.innerHTML = '';
  stage.appendChild(tree);
}
