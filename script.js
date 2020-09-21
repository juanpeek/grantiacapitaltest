"use strict";

$('#principal').droppable({
  tolerance: 'fit'
});

$('.ext').draggable({
  revert: 'invalid',
  stop: function (e, ui) {
    $(this).draggable('option', 'revert', 'invalid');
    let bgcolor = getColor(ui.position.left);
    $(this).css('background', bgcolor);
  }
});

$('.ext').droppable({
  greedy: true,
  tolerance: 'touch',
  drop: function (event, ui) {
    ui.draggable.draggable('option', 'revert', true);
  }
});

function getColor(pos) {
  let posF = (pos * 230) / 500;
  console.log(posF);
  let col = `hsl(${posF-190}, 100%, 55%)`;
  return col;
}