'use srtict';
alert('Welcome to my site')
let username= prompt('Please, Enter your name!')
document.getElementById('Greet').innerHTML = 'Welcome ' + username;
let Q1= prompt('Ahmad, is it my name?');
if (Q1=== 'yes') {
    alert("You guess my name!")
} else if(Q1 === 'y'){
    alert("You guess my name!")
}else if(Q1 === 'Y'){
    alert("You guess my name!")
} else if(Q1 === 'YES'){
    alert("You guess my name!")
}else if(Q1 === 'Yes'){
    alert("You guess my name!")
} else {
    alert('Not right')
}
let Q2= prompt('civil engineer, am I a civil engineer?');
if (Q2=== 'yes') {
    alert("You guess my job!")
} else if(Q2 === 'y'){
    alert("You guess my job!")
}else if(Q2 === 'Y'){
    alert("You guess my job!")
} else if(Q2 === 'YES'){
    alert("You guess my job!")
}else if(Q2 === 'Yes'){
    alert("You guess my job!")
} else {
    alert('Not right')
}

let Q3= prompt('26, is it my age?');
if (Q3 === 'yes') {
    alert("You guess my age!")
} else if(Q3 === 'y'){
    alert("You guess my age!")
}else if(Q3 === 'Y'){
    alert("You guess my age!")
} else if(Q3 === 'YES'){
    alert("You guess my age!")
}else if(Q3 === 'Yes'){
    alert("You guess my age!")
} else {
    alert('Not right')
}

let Q4= prompt('Blue, is it my favorite color?');
if (Q4 === 'yes') {
    alert("You guess my favorite color!")
} else if(Q4 === 'y'){
    alert("You guess my favorite color!")
}else if(Q4 === 'Y'){
    alert("You guess my favorite color!")
} else if(Q4 === 'YES'){
    alert("You guess my favorite color!")
}else if(Q4 === 'Yes'){
    alert("You guess my favorite color!")
} else {
    alert('Not right')
}

let Q5= prompt('did you think that you know some thing about me?');
if (Q5 === 'yes') {
    alert("Great!")
} else if(Q5 === 'y'){
    alert("Great!")
}else if(Q5 === 'Y'){
    alert("Great!")
} else if(Q5 === 'YES'){
    alert("Great!")
}else if(Q5 === 'Yes'){
    alert("Great!")
} else {
    alert('If you want, please try reading the first word in every question')
}
console.log(Q1,Q2,Q3,Q4,Q5)