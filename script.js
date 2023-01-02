let displayDate = $('#currentDay');
displayDate.text(moment().format('dddd MMMM Do'));
let currentHour = moment().format('HH');

// $(document).ready(function () {
//     //Moment.js code for current date and time
//     let CurrentMoment = moment().format("MMMM Do YYYY");
//     let displayDate = document.getElementById("currentDay");
//     let currentHour = moment().format("HH");
// })