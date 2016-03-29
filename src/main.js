'use strict';


import $ from 'jquery';
import { Materialize } from 'materialize/dist/js/materialize.js';
import render_view from './render';

/* start tabbing interface */
$('ul.tabs').tabs();

/* init modal window triggers */
$('.modal-trigger').leanModal();

/* make "render" button do its thing */
$('#render').on('click', function() {
  var json = document.getElementById('data').value;
  if (! json) {
    Materialize.toast('Please enter some JSON.', 4000);
    document.getElementById('data').focus();
    return;
  }
  render_view(json, document.getElementById('stage'));
  document.location.hash = '#json='+encodeURIComponent(json);
  $('ul.tabs')
    .find('.disabled')
      .removeClass('disabled')
    .end()
    .tabs('select_tab', 'stage-container');
});

/* go back to input field */
$('#back-to-edit').on('click', function(evt) {
  evt.preventDefault();
  $('ul.tabs')
    .tabs('select_tab', 'ctrl');
  window.setTimeout(() =>
    document.getElementById('data').focus(), 100);
});

/* load data from location hash */
if (document.location.hash.search(/#json=/) === 0) {
  var qs = document.location.hash;
  var payload = decodeURIComponent(qs.substr(6));
  if (payload) {
    document.getElementById('data').value = payload;
    $('#render').trigger('click');
  }
}

/* add examples */
var $examples = $('<div>', {
  id: 'examples',
  'class': 'modal',
  html: `<div class="modal-content">
    <div class="progress-placeholder" style="height:4px; margin: .5rem 0 1rem">
      <div class="indeterminate"></div>
    </div>
    <p>Load one of the following examples:</p>
    <dl>
      <dt><a href="#json=%22Hello! A URL: http://www.google.com%22">Simple string</a></dt>
      <dd>Nothing fancy, just a simple string with a URL.</dd>
      <dt><a href="examples/example.json">example.json</a></dt>
      <dd>An example showing much of the functionality of this renderer.</dd>
      <dt><a href="examples/official.json">official.json</a></dt>
      <dd>An example of an web-app config file from the json.org homepage.</dd>
      <dt><a href="examples/json-ld.json">json-ld.json</a></dt>
      <dd>An example from the JSON-LD specification.</dd>
      <dt><a href="package.json">package.json</a></dt>
      <dd>This project’s <code>package.json</code> file.</dd>
    </dl>
  </div>
  <div class="modal-footer">
    <button type="button" class="modal-action modal-close waves-effect waves-green btn-flat"><i class="icon left"><svg width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></i> Not now.</button>
  </div>`,
})
  .on('click', 'a', function(evt) {
    var href = this.getAttribute('href');
    var promise;

    evt.preventDefault();
    $examples
      .find('.progress-placeholder')
        .addClass('progress');

    if (href.search('#json=') === 0) {
      promise = $.Deferred().resolve(decodeURIComponent(href.substr(6)));
    } else {
      promise = $.ajax(href, {
        dataType: 'text',
      });
    }

    promise
      .then(function(payload) {
        if (payload) {
          document.getElementById('data').value = payload;
          $('#render').trigger('click');
        } else {
          throw 'no data';
        }
      })
      .fail(() => Materialize.toast('Oops, something went wrong.', 2000))
      .always(() => {
        $examples
          .find('.progress')
            .removeClass('progress')
          .end()
          .closeModal();
      });
  })
  .appendTo(document.body);

$('<li>')
  .append($('<a>', {
      href: '#examples',
      text: 'Examples',
    })
      .leanModal())
  .prependTo('#topnav');
