var today = moment() ;
$("#currentDay").text(today.format("MMMM Do, YYYY"));

var timeRow = [
    8,9,10,11,12,13,14,15,16,17
];
var currentTime = moment().format("H");

console.log(timeRow);

// if (timeRow[0] == currentTime) {
//     console.log("8");
// } else if (timeRow[1] == currentTime) {
//     console.log("9");
// } else {
//     console.log("This isn't working!");
// }

var saveButton8 = document.getElementById("saveButton8");
var inputField8 = document.getElementById("8");


saveButton8.addEventListener("click", function () {

    if (inputField8) {
        localStorage.setItem("Task", inputField8.value)
    }
})


// var timeblocks = [
//     document.getElementById("#8"), 
//     document.getElementById("#9"), 
//     document.getElementById("#10"), 
//     document.getElementById("#11"), 
//     document.getElementById("#12"),
//     document.getElementById("#13"),
//     document.getElementById("#14"),
//     document.getElementById("#15"),
//     document.getElementById("#16"),
//     document.getElementById("#17")
// ];

// console.log(timeRow);