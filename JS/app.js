'use srtict';
alert('Welcome to my site');
let userscore = 0
let username = prompt('Please, Enter your name!')
document.getElementById('Greet').innerHTML = 'Welcome ' + username;
let Q1 = prompt('Ahmad, is it my name?').toLowerCase();

function myName(Q1) {
    if (Q1 === 'yes' || Q1 === 'y') {
        alert("You guess my name!");
        userscore += 1;
    } else if (Q1 === 'no' || Q1 === 'n') {
        alert('Not right');
    }

}
myName(Q1);

let Q2 = prompt('civil engineer, am I a civil engineer?').toLowerCase();
function myJob(Q2) {
    if (Q2 === 'yes' || Q2 === 'y') {
        alert("You guess my job!");
        userscore += 1;
    } else if (Q2 === 'no' || Q2 === 'n') {
        alert('Not right');
    }

}
myJob(Q2);



let Q3 = prompt('26, is it my age?').toLowerCase();

function myAge(Q3) {
    if (Q3 === 'yes' || Q3 === 'y') {
        alert("You guess my age!");
        userscore += 1;
    } else if (Q3 === 'no' || Q3 === 'n') {
        alert('Not right');
    }

}
myAge(Q3);

let Q4 = prompt('Blue, is it my favorite color?').toLowerCase();
function myColor(Q4) {
    if (Q4 === 'yes' || Q4 === 'y') {
        alert("You guess my color!");
        userscore += 1;
    } else if (Q4 === 'no' || Q4 === 'n') {
        alert('Not right');
    }

}
myColor(Q4);


let Q5 = prompt('did you think that you know some thing about me?').toLowerCase();
function aboutMe(Q5) {
    if (Q5 === 'yes' || Q5 == 'y') {
        alert("Great!");
        userscore += 1;
    } else if (Q5 === 'no' || Q5 === 'n') {
        alert('Not right');
    }

}
aboutMe(Q5);


function myDollar() {
  
    let i = 0;

    while (i < 4) {
        let dollars = prompt('Can you guess how much dollars I have right now');

        if (parseInt(dollars) >= 1000) {
            alert('ohhhh, its huge, please try again! ');
        } else if (parseInt(dollars) < 100) {

            alert('its little, please try again!');
        } else if (parseInt(dollars) == 400) {
            alert('you guess it');
            userscore += 1
            break;

        } else if (parseInt(dollars) < 1000) {
            alert('you are close to guess!');


        } else if (parseInt(dollars) >= 100) {
            alert('you are close to guess!');


        } else if (i === 4) {
            alert('you loss the game, my dollars was 400');
        }
        i++;
    }
}
myDollar();

function carBrand(){
let carbrand= ['ford','bmw','kia','audi','mercrdes','golf','bentley','honda','cadillac','jeep'];
let guesses= 0
let car= prompt('can you guess one of my favorite car brand ?').toLowerCase();
let usercorrect=false;
while(guesses<6){
    guesses++;
    for (let i = 0; i<carbrand.length; i++){
        if(car === carbrand[i]){
            alert('great, you guess it!');
            guesses=6;
            usercorrect=true;
            userscore+=1;
            break;  
        }

    } 

 if(guesses <= 6 && usercorrect===false){
     car= prompt('not correct, try again');
    }

 if(guesses === 6 && usercorrect===false){
     alert('You are out of trials, My Top 10 car brands is '+carbrand);
    }
}

alert('your correct answers is ' + userscore + ' so, your guessing me game score = ' + userscore);





}
carBrand();

