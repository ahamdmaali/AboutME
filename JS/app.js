'use srtict';
alert('Welcome to my site')
let username= prompt('Please, Enter your name!')
document.getElementById('Greet').innerHTML = 'Welcome ' + username;
let Q1= prompt('Ahmad, is it my name?').toLowerCase();
if (Q1=== 'yes') {
    alert("You guess my name!")
    document.getElementById('CA1').innerHTML = '1';
} else if(Q1 === 'y'){
    alert("You guess my name!")
    document.getElementById('CA1').innerHTML = '1';
}else if(Q1 === 'Y'){
    alert("You guess my name!")
    document.getElementById('CA1').innerHTML = '1';
} else if(Q1 === 'YES'){
    alert("You guess my name!")
    document.getElementById('CA1').innerHTML = '1';
}else if(Q1 === 'Yes'){
    alert("You guess my name!")
    document.getElementById('CA1').innerHTML = '1';
} else if (Q1 === 'no' ){
    alert('Not right')
    document.getElementById('CA1').innerHTML = '0';
}else if(Q1 === 'n'){
    alert('Not right')
    document.getElementById('CA1').innerHTML = '0';
}
let Q2= prompt('civil engineer, am I a civil engineer?').toLowerCase();
if (Q2=== 'yes') {
    alert("You guess my job!")
    document.getElementById('CA2').innerHTML = '1';
} else if(Q2 === 'y'){
    alert("You guess my job!")
    document.getElementById('CA2').innerHTML = '1';
}else if(Q2 === 'Y'){
    alert("You guess my job!")
    document.getElementById('CA2').innerHTML = '1';
} else if(Q2 === 'YES'){
    alert("You guess my job!")
    document.getElementById('CA2').innerHTML = '1';
}else if(Q2 === 'Yes'){
    alert("You guess my job!")
    document.getElementById('CA2').innerHTML = '1';
} else if(Q2 === 'no'){
    alert('Not right')
    document.getElementById('CA2').innerHTML = '0';
} else if(Q2 === 'n'){
    alert('Not right')
    document.getElementById('CA2').innerHTML = '0';
}


let Q3= prompt('26, is it my age?').toLowerCase();
if (Q3 === 'yes') {
    alert("You guess my age!")
    document.getElementById('CA3').innerHTML = '1';
} else if(Q3 === 'y'){
    alert("You guess my age!")
    document.getElementById('CA3').innerHTML = '1';
}else if(Q3 === 'Y'){
    alert("You guess my age!")
    document.getElementById('CA3').innerHTML = '1';
} else if(Q3 === 'YES'){
    alert("You guess my age!")
    document.getElementById('CA3').innerHTML = '1';
}else if(Q3 === 'Yes'){
    alert("You guess my age!")
    document.getElementById('CA3').innerHTML = '1';
} else if(Q3 === 'no'){
    alert('Not right')
    document.getElementById('CA3').innerHTML = '0';
} else if(Q3 === 'n'){
    alert('Not right')
    document.getElementById('CA3').innerHTML = '0';
}

let Q4= prompt('Blue, is it my favorite color?').toLowerCase();
if (Q4 === 'yes') {
    alert("You guess my favorite color!")
    document.getElementById('CA4').innerHTML = '1';
} else if(Q4 === 'y'){
    alert("You guess my favorite color!")
    document.getElementById('CA4').innerHTML = '1';
}else if(Q4 === 'Y'){
    alert("You guess my favorite color!")
    document.getElementById('CA4').innerHTML = '1';
} else if(Q4 === 'YES'){
    alert("You guess my favorite color!")
    document.getElementById('CA4').innerHTML = '1';
}else if(Q4 === 'Yes'){
    alert("You guess my favorite color!")
    document.getElementById('CA4').innerHTML = '1';
} else if(Q4 === 'no'){
    alert('Not right')
    document.getElementById('CA4').innerHTML = '0';
} else if(Q4 === 'n'){
    alert('Not right')
    document.getElementById('CA4').innerHTML = '0';
}


let Q5= prompt('did you think that you know some thing about me?').toLowerCase();
if (Q5 === 'yes') {
    alert("Great!")
    document.getElementById('CA5').innerHTML = '1';
} else if(Q5 === 'y'){
    alert("Great!")
    document.getElementById('CA5').innerHTML = '1';
} else if(Q5 === 'Y'){
    alert("Great!")
    document.getElementById('CA5').innerHTML = '1';
} else if(Q5 === 'YES'){
    alert("Great!")
    document.getElementById('CA5').innerHTML = '1';
}else if(Q5 === 'Yes'){
    alert("Great!")
    document.getElementById('CA5').innerHTML = '1';
} else if(Q5 === 'no'){
    alert('Not right')
    document.getElementById('CA5').innerHTML = '0';
} else if(Q5 === 'n'){
    alert('Not right')
    document.getElementById('CA5').innerHTML = '0';
}
let i= 0 

while (i< 4) {
    let dollars = prompt('Can you guess how much dollars I have right now')
    if(parseInt(dollars)>= 1000){
    alert('ohhhh, its huge, please try again! ');
    document.getElementById('CA6').innerHTML = '0';

}else if(parseInt(dollars)< 100){
    alert('its little, please try again!');
    document.getElementById('CA6').innerHTML = '0';

}else if(parseInt(dollars)== 400){
    alert('you guess it');
    break;
    document.getElementById('CA6').innerHTML = '1';
}else if(parseInt(dollars)<1000){
    alert('you are close to guess!');
    document.getElementById('CA6').innerHTML = '0';

}else if(parseInt(dollars)>=100){
    alert('you are close to guess!');
    document.getElementById('CA6').innerHTML = '0';

}else if(i=== 4){
    alert('you loss the game, my dollars was 400');
}else{
    alert('you loss the game, my dollars was 400');
}
  i++;  
}



let carbrand= ['ford','bmw','kia'];

while(i< 10){
    let car= prompt('can you guess wthat car brand i like?').toLowerCase();
    if(car === carbrand[0]){
        alert('great, you guess it!');
        document.getElementById('CA7').innerHTML = '1';
        break;
    }else if(car === carbrand[1]){
        alert('great, you guess it!');
        document.getElementById('CA7').innerHTML = '1';
        break;
    }else if(car === carbrand[2]){
        alert('great, you guess it!');
        document.getElementById('CA7').innerHTML = '1';
        break;
    }else{
        alert('you didnt guess it');
        document.getElementById('CA7').innerHTML = '0';

    }
        
    document.getElementById('car').innerHTML ='my cars favorite brands is '+  carbrand + ' are you guessed them all?'
    i++;
  }






console.log(Q1,Q2,Q3,Q4,Q5)