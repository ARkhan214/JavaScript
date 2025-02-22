

function fofmadd(event) {


    let uName = document.getElementById("name");
    let uContact = document.getElementById("content");
    let textarea1 = document.getElementById("textarea1");

    let gender = document.getElementById.querySelector('input="gender":checked');
    let checkbox1 = document.getElementById.querySelector('input="Courses":checked');

    // let uContact = document.getElementById("content");
    // let uContact = document.getElementById("content");

    let output = "Name: " + uName + "\n"
    "Contact: " + uContact + "\n"

    let newWindow = window.open(_blank);
    newWindow.document.write(output + " ")
}