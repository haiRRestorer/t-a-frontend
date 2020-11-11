console.log("Hello World");
let x = 4;
console.log(x)
x = x + 2;
console.log(x)
/*
Insrtuctiuni de decizii
*/

let nota = 4;

if (nota === 10) {
    console.log("Bravo!");
}
else if (nota <10 && nota >= 5) {
    console.log("Inveti destul de bine");
}
else {
    console.log("Inveti rau");
}

console.log("For");
for ( let i = 0; i < 10; i++){
    console.log(i);
}

console.log("While");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log("do while");
i = 0;
do{
    console.log(i);
    i++;
}while (i < 10); 


console.log ("FOR Numere de la 100 pila la 0");

for(let i = 100 ; i >= 0; i--){
    console.log(i);
}

console.log ("While Numere de la 100 pila la 0");

while (i >= 0) {
    console.log(i);
    i--;
}

console.log("Numarele poare din inpare 50-100");
i = 0;
for(let i = 50; i <= 100; i++) {
    if ( i % 2 === 1)
    console.log(i);
}

console.log("IF Numare divizibile cu 5 si cu 10 inretval 50 -100");
i = 0;
for(let i = 50; i <= 100; i++) {
    if ( i % 5 === 0 && i % 10 === 0){
        console.log(i);
    }
    
}
