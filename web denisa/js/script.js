
var num=378;

console.log(num)

var greeting= "jam ne javascript"

console.log("greeting")

console.log(greeting);
console.log(greeting)

document.write("<p style='border:1px solid; padding:10px '>sot harxhova " +num+ "lek </p>")
/*ky
eshte nje coment*/

//alert(greeting)

var fjali = 'numri i pare eshte '+ num +' ';
var x=10;
var y=4;
var linebreak = "<br>";

document.write ("x+y =");
document.write (x+y);
document.write (linebreak);

var a=5
var b=6


document.write (linebreak);
document.write ("a+b=");
document.write (a+b);
document.write (linebreak);


a=15
b=5

document.write (linebreak);
document.write ("a%b=");
document.write (a%b);
document.write (linebreak);

a=12
b=5

document.write(linebreak);
document.write(a-b);
document.write(linebreak);

a=3
document.write(linebreak);
document.write(a+1);
document.write(linebreak);

a=3

document.write(linebreak);
document.write(a+=1);
document.write(linebreak);

document.write(linebreak);
document.write(a-=1);
document.write(linebreak);

document.write(linebreak);
document.write(a%=a);
document.write(linebreak);

//&& dhe ||

var a=true;
var b=false;

console.log(a && b) // nxjerr false
console.log(a || b) // nxjerr true 
console.log(!a || b) // nxjerr false 
console.log(!a && b) // nxjerr false 
console.log(!a || b) || (a&&!b)   // del true 


// struktura e kontrolllit: if statments 

//if(kushti) {
// // instr
//} else if(kushti2){
      //instr
// }else if (kushti 3){
    // // instr
// }
// else {
// instr
//}

var numri =8

if (numri >0) {
    console.log ('numri eshte pozitiv!');
}

else if (numri <0) {
    console.log ('numri eshte negativ!');

}
else  {
    console.log('numri eshte 0!')
}

var nr=1;


while(nr<=10) {

    document.write ('<br>'+nr +'<br>')
    nr++;
}


for( var i=1; i<= 10; i++){

    console.log (i);
}


var shuma=0
var j=1

while( j<=10) {

    shuma+=j; j++;
}
 document.write ('<br>shuma e 10 numrave te pare eshte :' +shuma);


 var sum=0;

 for(var k=1 ;k<=9;k++){

    sum+=k
 }

 document.write ('<br>shuma e 9 numrave te pare eshte :' +sum);

 var sum=0;

 for(var u=1 ;u<=8;u++){

    sum+=u
 }

 document.write ('<br>shuma e 8 numrave te pare eshte :' +sum);

 j=0;
 shuma=10;

 while(j<=10){
  if(j%2==0){
    shuma +=j ;
}
j++;
 }

 console.log(shuma);

 document.write ('<br> shuma e numrave qift eshte:' +shuma);

 j=2;
 shuma=20;

 while(j<=20){
  if(j%2==0){
    shuma +=j ;
}
j++;
 }

 console.log(shuma);

 document.write ('<br> shuma e numrave qift eshte:' +shuma);

 /* shuma e numrave qift finish*/


/* decrementim*/

for (var i=10; i>=8; i--) {

    console.log('javascript');
    
k++
}

for (var i=9; i>=8; i--) {

    console.log('javascript')
}

for (var i=8; i>=8; i--) {

    console.log('javascript')
}
/* ktu nuk del shkrimi javascript ne console*/
for (var i=7; i>=8; i--) {

    console.log('javascript')
}


/* per te treguar sa here eshte shkruar javascript*/

i=1

for(j=10; j>=8; j--){

    console.log ('javascript,hera e '+i);
    i=i+1
}


/* array */

var fruits=['apple','orange','cherry' ,'grape']

//console.log [size]
//fruits[0]=banana 
//console.log (typeof(fruits))
//var ifundit=fruits.pop() // fshin elementin e fundit
//var i_pare=fruits.shift () // fshin elementin e pare
//console.log(ifundit)
var size=fruits.length

document.write ('<br>elementi i pare eshte: <span style="color:red">'+ fruits[0] + '</span>')
document.write ('<br>elementi i dyte eshte: <span style="color:orange">'+ fruits[1] + '</span>')
document.write ('<br>elementi i trete eshte: <span style="color:yellow">'+ fruits[2] + '</span>')
document.write ('<br>elementi i katert eshte: <span style="color:coral">'+ fruits[3] + '</span>')

for(i=0 ; i<size ;i++) {

    console.log(fruits[0])
}


//break
/* kontrollo nese ekziston numri 6*/

var numrat=[ 0,9,6,4,1]
console.log (numrat);
var num =6;
var ugjet=false;

for( var k=0;k< numrat.length;k++){

    if(numrat[k==num]){

        document.write('numri u gjet ne pozicioni'+k)
        break;
    }

}

if(ugjet ==false){

    document.write('<br>numri nuk u gjet!')
}

