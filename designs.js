
const pixelCanvas = $("#pixel_canvas");
const colorValue = $("#colorPicker");


// When size is submitted by the user, call makeGrid()

function makeGrid(){
  pixelCanvas.children("tr").remove();
  pixelCanvas.children("td").remove();
let nbColumns = $("#input_width");
let nbRows = $("#input_height");
let gridWidth = nbColumns.val();
let gridHeight = nbRows.val();

// Your code goes here!
for (let i = 0; i < gridHeight; i++) {
  pixelCanvas.append("<tr>");
}
  for (let j = 0; j <gridWidth; j++) {
  pixelCanvas.children().append("<td></td>");
}
}
$("form").submit(function(event){
  event.preventDefault();
  makeGrid();
});

// When click modify color
pixelCanvas.on("click","td",function() {
  var colorGrid = colorValue.val();
  $(this).css("background-color", colorGrid);
});

// Right-click clean cell
pixelCanvas.on("contextmenu","td",function(event) {
  event.preventDefault();
  var colorGrid = "";
  $(this).css("background-color", colorGrid);
});
