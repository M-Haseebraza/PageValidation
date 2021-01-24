let arr = [];
function valid() {
    len = b1.value.length;
    if (len == 0) {
        document.getElementById('userid').innerText = "This Field can't be null"
    }
    else if (len < 5 || len >= 12) {
        console.log(len)
        document.getElementById('userid').innerText = "The user ID must Be between 5 and 12 charactors"
    }
    else if (len >= 5 || len <= 12) {
        document.getElementById('userid').innerText = ""
    }
}
function valpas() {
    len = b2.value.length;
    if (len == 0) {
        document.getElementById('userpas').innerText = "Please Enter Password"
    }
    else if (len < 7 || len >= 12) {
        console.log(len)
        document.getElementById('userpas').innerText = "The Password must Be between 7 and 12 charactors"
    }
    else if (len >= 7 || len <= 12) {
        document.getElementById('userpas').innerText = ""
    }
}
function valnam() {
    len = b3.value;
    if (len.match(/^[A-Za-z]+$/)) {
        document.getElementById('usernam').innerText = ""
    } else if (len.length == 0) {
        document.getElementById('usernam').innerText = "Please Enter Name"
    }
    else {
        console.log("false")
        document.getElementById('usernam').innerText = "You can write only alphabatic letters"
    }
}
function valzip() {
    len = b6.value
    if (len.match(/^[0-9]+$/)) {
        document.getElementById('userzip').innerHTML = ""
    }
    else if (len.length == 0) {
        document.getElementById('userzip').innerHTML = "Please Enter Zip code"
    }
    else {
        document.getElementById('userzip').innerHTML = "Please Enter Valid Zip"
    }
}
function valem() {
    len = b7.value
    if (len.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        document.getElementById('userem').innerHTML = ""
    }
    else if (len.length == 0) {
        document.getElementById('userem').innerHTML = "Please Enter Email"
    }
    else {
        document.getElementById('userem').innerHTML = "Please Enter valid Email"
    }

}
function val() {
    if (b8.checked == false || b9.checked == false){
        document.getElementById('usergen').innerHTML="Select your Gendar"
    }
    if(count.value==""){
        document.getElementById('usercont').innerHTML="Select your Country"

    }
    valid();
    valpas();
    valnam();
    valzip()
    valem();

}