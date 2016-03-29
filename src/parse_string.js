/* jshint esnext:true */
'use strict';


/**
 * some prominent CSS colors
 */
const css_colors = [ 'black', 'silver', 'gray', 'white', 'maroon', 'red',
  'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue',
  'teal', 'aqua', 'orange', 'rebeccapurple', ];


/**
 * regular expression to search a text for occurences of common patterns
 */
const re = new RegExp(
  /* url */
  '(https?:\\/\\/[a-z0-9#%&()*+,\\-.\\/:;=?@_~]+)|'+
  /* email (see https://www.w3.org/TR/html5/forms.html#valid-e-mail-address) */
  '([a-z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*)|'+
  /* date */
  '([0-9]{4}-[0-9]{2}-[0-9]{2}(?:[T ][012][0-9]:[0-5][0-9](?::[0-5][0-9](?:\\.[0-9]+)?)?(?: ?[a-z]+| ?[+-][0-9:]+)?)?)|'+
  /* .NET date */
  '("\\\\\\/Date\\([0-9]+\\)\\\\\\/")|'+
  /* CSS color */
  '('+css_colors.join('|')+'|(?:rgb|hsl)a?\\([^)]+\\)|#[a-f0-9]{3}(?:[a-f0-9]{3})?\\b)|'+
  /* Twitter handle */
  '(@[a-z_0-9]{1,16})',
'gi');


/**
 * parse a string for occurences of URLs, emails, ...
 *
 * Return a <span> node with updated text.
 */
export default function parse_string(str, {
      prefix = 'p-',
      empty_text = '(empty)',
      parse_url = true,
      parse_email = true,
      parse_date = true,
      parse_color = true,
      parse_twitter = true,
    }={}) {

  var span = document.createElement('span');
  span.className = prefix+'string';

  if (str) {
    span.innerHTML = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(re,
      function (m, url, email, date, dNET_date, color, twitter) {
        if (url && parse_url) {
          return '<a class="'+prefix+'url" href="'+url+'">'+url.replace(/^https?:\/\//, '')+'</a>';
        }
        if (email && parse_email) {
          return '<a class="'+prefix+'email" href="mailto:'+email.replace('mailto:', '')+'">'+email.replace('mailto:', '')+'</a>';
        }
        if (date && parse_date) {
          return '<abbr class="'+prefix+'date" title="'+date+'">'+(new Date(date.replace(/ /g, ''))).toLocaleString()+'</abbr>';
        }
        if (dNET_date && parse_date) {
          return '<abbr class="'+prefix+'date '+prefix+'date--dotnet" title="'+dNET_date.replace(/"/g, '&quot;')+'">'+(new Date(parseInt(dNET_date.replace(/"\\\/Date\(([0-9]+)\)\\\/"/, '$1'), 10))).toLocaleString()+'</abbr>';
        }
        if (color && parse_color) {
          return '<span class="'+prefix+'color '+prefix+'color--'+encodeURIComponent(color)+'" style="box-shadow: inset 0 0 4px '+color+'">'+color+'</span>';
        }
        if (twitter && parse_twitter) {
          return '<a class="'+prefix+'twittername" href="https://twitter.com/'+twitter.replace(/^@/, '')+'">'+twitter+'</a>';
        }
        return m;
      });

  } else {

    span.className += ' '+prefix+'string--empty';
    span.textContent = '(empty)';

  }

  return span;
}
