///////////////////////////// Contact Us Page /////////////////////////////

function displayInfo() {

    var name = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    document.getElementById("name-here").innerHTML = name;
    document.getElementById("email-here").innerHTML = email;
    document.getElementById("phone-here").innerHTML = phone;
    document.getElementById("subject-here").innerHTML = subject;
    document.getElementById("message-here").innerHTML = message;

}

///////////////////////////// Reservation Page /////////////////////////////

var energyOpt, dailyPrice, transmissionPercent = 0, duration, total;

function bookingInput() {

    //filtering dropdown menus

    if (document.getElementById('motocycle').selected == true) {
        document.querySelector("#gasoline").style.display = "block";
        document.querySelector("#electric").style.display = "block";
        dailyPrice = 10;
    } else if (document.getElementById('city-car').selected == true) {
        document.querySelector("#electric").style.display = "block";
        document.querySelector("#hybird").style.display = "block";
        document.querySelector("#gasoline").style.display = "block";
        document.querySelector("#diesel").style.display = "block";
        document.querySelector("#manual").style.display = "block";
        dailyPrice = 12;
    } else if (document.getElementById('compact-car').selected == true) {
        document.querySelector("#hybird").style.display = "block";
        document.querySelector("#gasoline").style.display = "block";
        document.querySelector("#diesel").style.display = "block";
        document.querySelector("#manual").style.display = "block";
        dailyPrice = 14;
    } else if (document.getElementById('sedan-car').selected == true) {
        document.querySelector("#hybird").style.display = "block";
        document.querySelector("#gasoline").style.display = "block";
        document.querySelector("#diesel").style.display = "block";
        document.querySelector("#automatic").style.display = "block";
        dailyPrice = 20;
        transmissionPercent =0.19;
    } else if (document.getElementById('utility-car').selected == true) {
        document.querySelector("#diesel").style.display = "block";
        document.querySelector("#manual").style.display = "block";
        dailyPrice = 16;
    } else if (document.getElementById('heavy-equipment').selected == true) {
        document.querySelector("#gasoline").style.display = "block";
        document.querySelector("#diesel").style.display = "block";
        document.querySelector("#manual").style.display = "block";
        dailyPrice = 900;
    } else if (document.getElementById('truck').selected == true) {
        document.querySelector("#diesel").style.display = "block";
        document.querySelector("#automatic").style.display = "block";
        dailyPrice = 250;
        transmissionPercent =0.19;
    }

//Storing selected energy option

energyOpt = document.getElementById("energy-type").value;

}

function price(){

// Number of Days calculation

var pickdate = document.getElementById("startdate").value;
var returndate = document.getElementById("returndate").value;
var duration = (new Date(returndate) - new Date(pickdate)) / (1000 * 60 * 60 * 24);

// Price of booking calculation

total = (dailyPrice + (dailyPrice * energyOpt) + (dailyPrice * transmissionPercent)) * duration;

document.getElementById("priceis").innerHTML = total + " Euros";
}