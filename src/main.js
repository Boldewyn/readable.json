'use strict';


import render_view from './render';

$('ul.tabs').tabs();

$('.modal-trigger').leanModal();

$('#render').on('click', function() {
  var json = document.getElementById('data').value;
  render_view(json, document.getElementById('stage'));
  document.location.hash = '#json='+encodeURIComponent(json);
  $('ul.tabs')
    .find('.disabled')
      .removeClass('disabled')
    .end()
    .tabs('select_tab', 'stage-container');
});

$('#back-to-edit').on('click', function() {
  $('ul.tabs')
    .tabs('select_tab', 'ctrl');
});

if (document.location.hash.search(/#json=/) === 0) {
  var qs = document.location.hash;
  var payload = decodeURIComponent(qs.substr(6));
  if (payload) {
    document.getElementById('data').value = payload;
    $('#render').trigger('click');
  }
}
