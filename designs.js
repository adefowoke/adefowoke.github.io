// Select color input
// Select size input
// create variable
var height, width, color;
// When size is submitted by the user, call makeGrid()
// use submit method to call the makeGrid
$('#sizePicker').submit(function(event) {
        event.preventDefault();
        // set height and width to allow for change when value is submitted
        height = $('#inputHeight').val();
        width = $('#inputWeight').val();
        makeGrid(height, width);
        //console.log('Height: ' + height + 'and width: ' + width);

    })
    // set parameter x, y
function makeGrid(x, y) {
    //clear table
    $('tr').remove();
    // Your code goes here!
    //create for loop for x, y
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (var j = 1; j <= y; j++) {
            $('tr:last').append('<td></td>');
        }
    }
    //add color 
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })

}