//common string methods

//let email ='mario@thenetninja.co.uk'

//let result = email.lastIndexOf('n');

//let result = email.slice(2,5);


// let result = email.substr(4,10);


// let result= email.replace('m', 'w');

// let result  = email.replace('n'. 'w');


//let radius = 10; 
//const pi= 3.14;

//console.log (radius, pi);

//math operatirs +. -. * / ** %

//console.log(10 / 2);
//let result = radius % 3;

//let result = pi * radius **2;



//console.log(result);

//let likes = 10;
//likes= likes + 1;
//likes++;
//likes+=10 ;


//console.log(likes);


//let result = ' the blog has ' + likes + 'likes'; 
//console.log(result);


//const title = 'Best reads of 2019';
//const author = 'Mario';
//const likes = 30;

//concatenation way

//let result = ' the blog called' + title + 'by ' + author ' has ' + likes + 'likes';
//console.log(result);

//template way 
//let result = `the blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

//creating html templates

//let html = `
//<h2>${title}</h2>
//<p> By ${author}</p>
//<span> this blog has ${likes} likes</span>

//`;

//console.log(html);



//let ninjas = ['Shaun', 'ryu', 'chun-lit'];
//ninjas[1] = 'ken';
//console.log(ninjas[1]);

//let ages = [20,25,30,45];
//console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20];
//console.log(ninjas.length);

//array methods

//let result = ninjas.join('-');

//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
//let result = ninjas.push('ken');
// result = ninjas.pop();
//console.log(result);



//let age = null; 
//console.log(age, age + 3, 'the age is ${age}');


//booleans and comparisons

//console.log(true, false, "true", "false");

//methods can return booleans
//let email = 'liugi@theninja.co.uk';
//let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('!');
//let result = names.includes('luigi');
//console.log(result);

//comparsion operators

//let age = 25;
//console.log(age == 25);
//console.log(age == 30);
//console.log(age != 30);
//console.log(age < 20);

//let name = 'shaun';
//console.log(name == 'shaun');

//type conversion
//let score  = '100';

//score = Number(score);
//console.log(score + 1 );

//let result = String(50); 

//let result = Boolean(100);

//let result =  Boolean('0');  //makes it true or false
//console.log(result, typeof result);


// for loops 

//for(let i = 0; i < 5; i++){
//  console.log('in loop:', i);

//}

//console.log('loop finished');

//const names = ['shaun', 'mario', 'luigi'];

//for( let i = 0; i < names.length; i++){
//console.log(names[i]);
// let html = `<div>${names[i]} </div>`;
//console.log(html);
//}

//while loops
//const names = ['shaun', 'mario', 'luigi'];
//let i = 0;
//while( i < 5){
//  console.log('in loop: ', i);
// i++;
//}

//let i = 0;
//while(i < names.length){
// console.log(names[i]);
//  i++;
//}
//while loops
//let i = 5;
//do(
// console.log('val of i is: ', i);
// i++;
//} while(i < 5);

// if statements

//const age = 25;

//if(age > 20 ){
//  console.log('you are over 20 years old');
//}

//const ninjas = ['shaun','ryu', 'chun-li', 'yoshi'];

//if(ninjas.length > 3){
//  console.log("that's a lot of ninjas");
//}
//logical operators 
//const password = 'password1234';
//if(password.length >= 12 && password.includes('@')){
// console.log('that password is mighty strong');
//}else if(password.length >= 8 || password.includes('@')){
//  console.log('that password is strong enough! ');
//}else{
//  console.log('that password is not strong enough! ');
//}

                                  //logical NOT (!)
//let user = false;
//if(!user){
//  console.log('you must be logged in to continue');
//}

//console.log(true);
//console.log(false);


                                //breaks and continue

//const scores = [50, 25, 0, 30, 100, 20, 10];

//for(let i = 0; i < scores.length; i++){

//  if(scores [i] === 0)
// continue;
//}


// console.log('your score: ', scores[i]);

// if (scores[i]) === 100{
//   console.log('congrats you got the top score');
//  break;
// }

//}

                            //switch statements 
const grade = 'D';
switch (grade) {
  case 'A':
    console.log('you got an A');
    break;
  case 'B':
    console.log('you got an B');
     break;
  case 'C':
    console.log('you got an C');
     break;
  case 'D':
    console.log('you got an D');
     break;
  case 'E':
    console.log('you got an E');
     break;
  default:
     console.log('not a valid grade');
}
                      //variables & block scope
const age = 30;

if(true){
const  age= 40;
  const name = 'shaun';
  
  console.log('outside code block: ', age, name);
  const(true){
    console.log('inside 2nd code block: ', age);
  }
}
console.log('outside code block: ', age, name);


// function 


const speak = function(){
  
}