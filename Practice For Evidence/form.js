function she() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let passw = document.getElementById('passw').value;
    let remarks = document.getElementById('remarks').value;

    let gender =document.querySelector('input[name="gender"]:checked');

    let hobby =document.querySelectorAll('input[name="hobby"]:checked');

    let hobbyValue=[];
    for(i=0;i<hobby.length;i++){
        hobbyValue.push(hobby[i].value);
    }
    let location=document.getElementById('location').value;

    let output="Name: " +name+'\n'
    +"Email: "+email+'\n'
    +"password: "+passw+'\n'
    +"Remarks: "+remarks+'\n'
    +"Gender: "+gender.value+'\n'
    +"Hobby: "+hobbyValue+'\n'
    +"Location: "+location+'\n';

    let newWindow=window.open('','_blank');
    newWindow.document.write('<pre>'+output+'</pre>'); 
}