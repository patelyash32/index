function myfun(){

    var correct_way = /^[A-za-z]+$/;

    var a = document.getElementById("fname").value;

    if(a==""){
        document.getElementById("Message").innerHTML=" *** Please fill First Name ***"
        return false;
    }
    if(a.length<3){
        document.getElementById("Message").innerHTML=" *** first name must be more than 3 characters ***"
        return false;
    }
    if(a.length>20){
        document.getElementById("Message").innerHTML=" *** first name must be less than 20 characters ***"
        return false;
    }
    if(a.match(correct_way))
        true;
        else{
        document.getElementById("Message").innerHTML=" *** only alphabets are allowed *** "
        return false;
        }
}    