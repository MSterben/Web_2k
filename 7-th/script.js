
let choise = prompt('Viberot  variant zavdania: 1 = 1 : 2 = 2 : 3=3 : ');
choise = parseInt(choise);
if(choise ===1){

function chech (num){
if(isNaN(num) === false){
    if(num%2 == 0) {
        console.log('Num is chotne')
    }
    else{
        console.log('Num is ne chotne')
    }
}
else{
    console.log('Pusta stroka tipa')
}
}
num = prompt("Enter numb dlia 1 zavd")
chech(num)
}

else if(choise===2){

function prosti(){
	let masiv  = [];
let sch = 0;
let flag = true;
let suma = 0;
for(let b = 1;b < 20; b++){
if(b===1){
	console.log("Prihodetsia skipati 1 odinichy bo kod lamaetsia")
}
else{
for (let i = 2; i < b; i++) {
	if (b % i == 0) {
		flag = false;
		break; // выйдем из цикла
	}
	else{
		flag = true;
	}
}
  
if(flag == true){
	masiv.push(b);
	sch++;
}
if(sch === 5){
	break;
}
}
}
console.log(masiv);
for(let z = 0 ;z<5;z++){
	suma += masiv[z];
}
console.log(suma);
}

prosti();
}

else if(choise===3){
let to = prompt('Etern num dlia 3 zavd: ');
function easy(to){
let go = 0;
let fa = '0';
let costil;
for(let y = 0 ; y<to;y++){
	 fa = fa + "1";
	 costil = parseInt(fa);
	 go = go + costil;
}
console.log(go)
}
easy(to);
}

else{
	console.log('ochi roszyi!!!')
}
