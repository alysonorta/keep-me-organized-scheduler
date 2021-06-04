var today = moment() ;
$("#currentDay").text(today.format("MMMM Do, YYYY"));

var timeblocks = [document.getElementById("8"), document.getElementById("9"), document.getElementById("10"), document.getElementById("11"), document.getElementById("12")];
var currentTime = moment().format("H");


// Function to color code time blocks depending on past, present, future

function compareTime () {
    var rowId = timeblocks.row.id, rowHour;
    if (rowId) {
        rowHour = parseInt(rowID);
    } 
    if (rowHour) {
        if (currentTime === rowHour) {
            changeColor(row, "green");
        } else if ((currentTime < rowHour) && (currentTime > rowHour - 6)) {
            changeColor(".present");
        } else if ((currentTime > rowHour) && (currentTime < rowHour + 6)) {
            changeColor(row, "pink");
        } else {
            changeColor(row, "black");
        }
    }
};

function changeColor(element, color) {
    element.style.backgroundColor = color;
}


