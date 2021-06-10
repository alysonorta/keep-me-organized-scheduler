// Adding variable for date and add specific format
var today = moment() ;
$("#currentDay").text(today.format("MMMM Do, YYYY"));

//Adding array variable to get time rows from html
var timeblocks = [
    document.getElementById("8"), 
    document.getElementById("9"), 
    document.getElementById("10"), 
    document.getElementById("11"), 
    document.getElementById("12"),
    document.getElementById("13"),
    document.getElementById("14"),
    document.getElementById("15"),
    document.getElementById("16"),
    document.getElementById("17")
];

console.log(timeblocks);


//Adding variable to call current time and format same as timeblocks 
var currentTime = moment().format("H");

//Adding function for changing row color - currently not working
function changeRowColor () {
    for (var i = 0; i<10; i++) {
        if (timeblocks[i] == currentTime) {
            timeblocks.style.backgroundcolor= "#ff6961";
        } else if (timeblocks[i] == currentTime - 6) {
            timeblocks.style.backgroundcolor= "#d3d3d3";
        } else if (timeblocks[i] == currentTime +6) {
            timeblocks.style.backgroundcolor= "#77dd77";
        }
    }
}

changeRowColor(timeblocks);

// Adding variables and functions for input fields and save buttons to save to local storage on the click of the save button
var saveButton8 = document.getElementById("saveButton8");
var inputField8 = document.getElementById("8input");


saveButton8.addEventListener("click", function () {

    if (inputField8) {
        localStorage.setItem("Task 8", inputField8.value)
    }
})

var saveButton9 = document.getElementById("saveButton9");
var inputField9 = document.getElementById("9input");


saveButton9.addEventListener("click", function () {

    if (inputField9) {
        localStorage.setItem("Task 9", inputField9.value)
    }
})
var saveButton10 = document.getElementById("saveButton10");
var inputField10 = document.getElementById("10input");


saveButton10.addEventListener("click", function () {

    if (inputField10) {
        localStorage.setItem("Task 10", inputField10.value)
    }
})

var saveButton11 = document.getElementById("saveButton11");
var inputField11 = document.getElementById("11input");


saveButton11.addEventListener("click", function () {

    if (inputField11) {
        localStorage.setItem("Task 11", inputField11.value)
    }
})

var saveButton12 = document.getElementById("saveButton12");
var inputField12 = document.getElementById("12input");


saveButton12.addEventListener("click", function () {

    if (inputField12) {
        localStorage.setItem("Task 12", inputField12.value)
    }
})
var saveButton13 = document.getElementById("saveButton13");
var inputField13 = document.getElementById("13input");


saveButton13.addEventListener("click", function () {

    if (inputField13) {
        localStorage.setItem("Task 13", inputField13.value)
    }
})

var saveButton14 = document.getElementById("saveButton14");
var inputField14 = document.getElementById("14input");


saveButton14.addEventListener("click", function () {

    if (inputField14) {
        localStorage.setItem("Task 14", inputField14.value)
    }
})

var saveButton15 = document.getElementById("saveButton15");
var inputField15 = document.getElementById("15input");


saveButton15.addEventListener("click", function () {

    if (inputField15) {
        localStorage.setItem("Task 15", inputField15.value)
    }
})

var saveButton16 = document.getElementById("saveButton16");
var inputField16 = document.getElementById("16input");


saveButton16.addEventListener("click", function () {

    if (inputField16) {
        localStorage.setItem("Task 16", inputField16.value)
    }
})

var saveButton17 = document.getElementById("saveButton17");
var inputField17 = document.getElementById("17input");


saveButton17.addEventListener("click", function () {

    if (inputField17) {
        localStorage.setItem("Task 17", inputField17.value)
    }
})



