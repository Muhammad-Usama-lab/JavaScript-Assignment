


//Q2
// document.write('<br><br> <h2>Answer to Question 2</h2><br><br>');       

var a=+prompt('Check','Enter first number...');
var b=+prompt('Check','Enter second number...');

if(a===b){
alert('Both are Equal');
}else if(a>b){
    alert(a+' is Greater');
    }else if(b>a){
        alert(b+' is Greater');
    }

//Q3

var a=+prompt('POSITIVE / NEGATIVE','Enter number...');
if(a<0){
    alert('Number is Negative');
}else if(a==0){
    alert('Number is Zero');
}else if(a>0){
    alert('Number is Positive');
}


//Q4

function getValue(){

    var valueget=document.getElementById("get").value;   
     
    switch(valueget){

        case 'a':{
            alert('You entered Vowel');
            break;
        }
        case 'e':{
            alert('You entered Vowel');
            break;
        }
        case 'I':{
            alert('You entered Vowel');
            break;
        }
        case 'o':{
            alert('You entered Vowel');
            break;
        }
        case 'u':{
            alert('You entered Vowel');
            break;
        }
        case 'A':{
            alert('You entered Vowel');
            break;
        }
        case 'E':{
            alert('You entered Vowel');
            break;
        }
        case 'I':{
            alert('You entered Vowel');
            break;
        }
        case 'O':{
            alert('You entered Vowel');
            break;
        }
        case 'U':{
            alert('You entered Vowel');
            break;
        }
        default:{
            alert('False');
        }

    }
   

}          
//Q5

var pass = prompt("Create Password");
var pass1 = prompt("Enter Password");


if (pass != pass1) {
    window.alert(" Wrong Password ");
}
else if (pass == pass1) {
    alert("  match ");
}
else if (pass == pass1) {
    alert("  match ");
}
else {
    alert(" Enter Password  ");
}
//Q6


var greeting;
var hour = 13;

if (hour < 18) {
    alert("Good day");
}
else {
    alert("Good evening");
}

//Q7



var tim = 1900;

if (tim >= 0000 && tim<1200 ) 
{
    alert("Good Morning");
}
else if (tim >= 1200 && tim < 1700 ) 
{
    alert("Good Afternoon");
}
else if (tim >= 1700 && tim < 2100 ) 
{
    alert("Good Evening");
}
else if (tim >= 2100 && tim < 2359 ) 
{
    alert("Good Night");
}



