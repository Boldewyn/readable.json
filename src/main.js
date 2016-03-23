import h from 'hyperscript';
import hl from 'hyperscript-helpers';

const { div, dl, dt, dd, ol, li, span, p, pre, a } = hl(h);

const css_colors = [ 'black', 'silver', 'gray', 'white', 'maroon', 'red',
  'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue',
  'teal', 'aqua', 'orange', 'rebeccapurple', ];

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
    console.log(e);
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
  tree.appendChild(subtree);
}

render.string = function(data, tree) {
  tree.appendChild(span('.json-string', parse_string(data)));
}

function transform_key(str) {
  str = str.replace(/([a-z])([A-Z])/g, (m, l, u) => l+' '+u.toLowerCase());
  str = str.replace(/^[a-z]/, m => m.toUpperCase());
  if (str === 'Id') {
    str = 'ID';
  }
  return str;
}

function parse_string(str) {
  var frag = span('.p-string');
  frag.innerHTML = str.replace(new RegExp(
        /* url */
        '(https?:\\/\\/[a-zA-Z0-9#%&()*+,\\-.\\/:;=?@_~]+)|'+
        /* email */
        '([a-zA-Z0-9._\\-+:]+@[a-zA-Z0-9.\\-]+)|'+
        /* date */
        '([0-9]{4}-[0-9]{2}-[0-9]{2}(?:[T ][012][0-9]:[0-5][0-9](?::[0-5][0-9])?(?: [A-Z]+| [+}-][0-9:]+)?)?)|'+
        /* .NET date */
        '("\\\\\\/Date\\([0-9]+\\)\\\\\\/")|'+
        /* CSS color */
        '('+css_colors.join('|')+'|(?:rgb|hsl)a?\\([^)]+\\)|\\b#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?\\b)|'+
        /* Twitter handle */
        '(\\b@[a-z_0-9]{1,16})', 'g'),
    function (m, url, email, date, dNET_date, color, twitter) {
      if (url) {
        return '<a class="p-url" href="'+url+'">'+url.replace(/^https?:\/\//, '')+'</a>';
      }
      if (email) {
        return '<a class="p-email" href="mailto:'+email.replace('mailto:', '')+'">'+email.replace('mailto:', '')+'</a>';
      }
      if (date) {
        return '<abbr class="p-date" title="'+date+'">'+(new Date(date.replace(/ /, ''))).toLocaleString()+'</abbr>';
      }
      if (dNET_date) {
        return '<abbr class="p-date p-date--dotnet" title="'+dNET_date+'">'+(new Date(parseInt(dNET_date.replace(/"\\\/Date\(([0-9]+)\)\\\/"/, '$1'), 10))).toLocaleString()+'</abbr>';
      }
      if (color) {
        return '<span class="p-color" style="box-shadow: inset 0 0 4px '+color+'">'+color+'</span>';
      }
      if (twitter) {
        return '<a class="p-twittername" href="https://twitter.com/'+twitter.replace(/^@/, '')+'">'+twitter+'</a>';
      }
      return m;
    });
  return frag;
}

render.number = function(data, tree) {
  tree.appendChild(span('.json-number', data.toString()));
}

render.boolean = function(data, tree) {
  var value = '\u2713';
  if (! data) {
    value = '\u2717';
  }
  tree.appendChild(span('.json-bool.json-bool--'+(data? 'true' : 'false'), value));
}

render.null = function(data, tree) {
  tree.appendChild(span('.json-null', '\u2014'));
}

document.getElementById('render').addEventListener('click', render_view);
