import h from 'hyperscript';
import hl from 'hyperscript-helpers';

const { div, dl, dt, dd, ol, li, span, p, pre, a } = hl(h);

function render_view() {
  var json = document.getElementById('data').value;
  var stage = document.getElementById('stage');
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
  }
  stage.innerHTML = '';
  stage.appendChild(tree);
}

function typeOf(obj) {
  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

const text = document.createTextNode.bind(document);

function render_item(data, tree) {
  render[typeOf(data)](data, tree);
}

var render = {};

render.object = function(data, tree) {
  var subtree = dl('.json-o');
  for (let key in data) {
    subtree.appendChild(dt('.json-o-key', key));
    var item = dd('.json-o-value');
    render_item(data[key], item);
    subtree.appendChild(item);
  }
  tree.appendChild(subtree);
}

render.array = function(data, tree) {
  var subtree = ol('.json-a',
    data.map(item => {
      var _li = li('.json-a-item');
      render_item(item, _li);
      return _li;
    })
  );
  tree.appendChild(subtree);
}

render.string = function(data, tree) {
  if (data.search(/https?:/) === 0) {
    var link = a({
      className: 'json-link',
      href: data.replace(/\s.*/, ''),
    }, data.replace(/\s.*/, ''));
    var tail = data.replace(/.*(\s)/, '$1');
    if (tail === data) {
      tail = null;
    }
    var data = document.createDocumentFragment();
    data.appendChild(link);
    if (tail) {
      data.appendChild(tail);
    }
  }
  tree.appendChild(span('.json-s', data));
}

render.number = function(data, tree) {
  tree.appendChild(span('.json-n', data.toString()));
}

render.boolean = function(data, tree) {
  var value = 'Yea!';
  if (! data) {
    value = 'Nay!';
  }
  tree.appendChild(span('.json-b.json-b--'+(data? 'true' : 'false'), value));
}

render.null = function(data, tree) {
  tree.appendChild(span('.json-null', 'nada'));
}

document.getElementById('render').addEventListener('click', render_view);
