$(function() {
  $("#luggage-container").sortable({
    revert: true
  });
  $("#luggage-container").disableSelection();

  $("#trolley").draggable({
    axis: "x"
  });
});