






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
    var value=document.getElementById("get").value;    
    switch(value){

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



