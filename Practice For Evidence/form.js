function she() {
    let name = document.getElementById('name').value;

    let remarks = document.getElementById('remarks').value;
    let contact = document.getElementById('contact').value;


    let gender = document.querySelector('input[name="gender"]:checked');

    let Courses = document.querySelectorAll('input[name="courses"]:checked');

    let CoursesValue = [];
    for (i = 0; i < Courses.length; i++) {
        CoursesValue.push(Courses[i].value);
    }
    let location = document.getElementById('location').value;

    let output = "Name: " + name + '\n'
        + "Remarks: " + remarks + '\n'
        + "Gender: " + gender.value + '\n'
        + "Courses: " + CoursesValue + '\n'
        + "Location: " + location + '\n'
        + "Contact: " + contact + '\n';

    let newWindow = window.open('', '_blank');
    newWindow.document.write('<pre>' + output + '</pre>');
}