
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
