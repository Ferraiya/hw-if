// ---------- 1 ------------
function mcdonalds(hamburger,fries){

hamburger >= 4 && fries >= 1 ? console.log('Ми поїли') : console.log ('Ми йдемо до іншого ресторану')
}
mcdonalds(3,1);


// ---------- 2 ------------

let goodPrice = function (price){
    
if (price>=1000 && price <=1900){
    return true;
}
} 
goodPrice(1901) ? console.log ('Ціна товару знаходиться між 1000 та 1900 включно') 
: console.log ("Ціна товару не знаходиться в проміжку між 1000 та 1900 включно")



// ---------- 3 ------------
let goodPrice1 = function (price1){
    
if (price1<1000 || price1 >1900){
  return true;
}}

goodPrice1(1900) ? console.log ("Ціна товару не знаходиться в проміжку між 1000 та 1900 включно")
: console.log ('Ціна товару знаходиться між 1000 та 1900 включно') 

// --------------------------

let price2 = 999; // Ціна товару
let tsina = function (price2) {
if (price2!=1000 && price2!=1900 && price2<1000 || price2 >1900){
  return true;
}}
tsina(price2) ? console.log ("Ціна товару не знаходиться в проміжку між 1000 та 1900 включно") 
: console.log ('Ціна товару знаходиться між 1000 та 1900 включно')

// ---------- 4 --------------
function season(number) {
  let indexS = number-1;
  let arraySeason = ['Зима','Весна','Літо','Осінь'];
  if (indexS >= 0 && indexS < arraySeason.length) {
    return arraySeason[indexS];
  } else {
    return "Номер недійсний";
  }
}
console.log(season(1))



// ---------- 5 ------------

function minim (a,b,c){

if (a<b){  
    if (b<c){  
      return ('Середнє число: '+b)
    }
    else if (c<b){
        if(a<c){
          return ('Середнє число: '+c)
            }
        else if (c<a){
          return ('Середнє число: '+a)
        }
    } 
}
else if (b<a){  
    if (a<c){
      return ('Середнє число: '+a)
    }
    else if (c<a){
        if (c<b){
          return ('Середнє число: '+b) 
         }
        else if (b<c){
            return ('Середнє число: '+c)
         }
     }
}
}
console.log(minim(101,4,63))

// ---------- 6 ------------

function dayOfWeek (day){
let arrDay = day -1;
let arr= ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

    if (arrDay >=0 && arrDay < arr.length){
    return arr[arrDay];
  }
  else {
    return ("number is invalid")
  }
}

  console.log(dayOfWeek(2))

// ---------- 7 ------------

function result (num1, num2, operation){
  
switch (operation) {
  case "+":
   res = num1+num2;
break;
  case "-":
    res = num1-num2;
    break;
  case "*":
    res = num1*num2;
    break;
  case "/":
    res = num1/num2;
    break;
  default:
    res = "Операція недійсна";
    break;
    }
    return res;
  }
  console.log(result( 75, 10, "/"))
    
// ---------- 8 ------------

function extractConsonantsFromString(string) {
  const regex = /[^уеїіаоєяиюaeiouyїєяи]/gi;
  const arrayLetter = string.match(regex);
  const consonants = arrayLetter.join('');
  return consonants;
}

const string = 'ПКУЦУЩЛСАКцукупзщфіво';
const result = extractConsonantsFromString(string);
console.log(result);

// ---------- 9 ------------

let meter = 13000;
let km = meter/1000;

function ending(number){
  let end;
  if(number!= Math.round(number)) {
  return "а";
  }
  else {
    let twoNumbers = number % 100;

   (twoNumbers >= 5 && twoNumbers <= 20 || twoNumbers % 10 === 0) ? end = 'ів' : 
   ((number % 10 === 1) ? end = '' : (number % 10 === 2||3||4) ? end = 'и' : end = 'ів')
  }
  return end;
}

console.log(meter,'метр'+ending(meter), 'це', km,'кілометр'+ending(km))
