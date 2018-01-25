// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
  const designCanvas = $("#pixel_canvas");
  let table = $("table");
  let color = $('input[type="color"]');

  //canvas creation:
  function makeGrid() {
    let gridHeight = $("#input_height").val();
    let gridWidth = $("#input_width").val();
    table.html("");
    table.css("background-color", "white");
    for (let i = 1; i <= gridHeight; i++) {
      designCanvas.append("<tr><td></td></tr>");
    }
    for (let j = 1; j < gridWidth; j++) {
      $("tr").append("<td></td>");
    }
  }

  //the function make grid is called when we press the submit
  //button:
  $("form").submit(function(e) {
    e.preventDefault();
    makeGrid();
  });
  /*event listeners for:
coloring the grid cell*/
  $("table").on("click", "td", function(evt) {
    $(evt.target).css({ "background-color": color.val() });
  });
  //doubleclick for erasing the color of selected cell
  $("table").on("dblclick", "td", function(evt) {
    $(evt.target).css("background-color", "white");
  });
  //clear button to clear all the canvas
  $("#clear_button").on("click", function() {
    $("td").css("background-color", "white");
  });
});
