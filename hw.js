// ---------- 1 ------------

let hamburger = 4; //кількість гамбургерів у наявності
let fries = 1; //кількість картоплі у наявності

if (hamburger >= 4 && fries >= 1) {
    console.log ('Ми поїли')
}
else {
    console.log ("Ми йдемо до іншого ресторану")
}

// ---------- 2 ------------

let price = 1000; // Ціна товару
    
if (price>=1000 && price <=1900){
    console.log ('Ціна товару знаходиться між 1000 та 1900 включно')
}
else
{
    console.log ("Ціна товару не знаходиться в проміжку між 1000 та 1900 включно")
}

// ---------- 3 ------------

let price1 = 999.99999; // Ціна товару
    
if (price1<1000 || price1 >1900){
    console.log ('Ціна товару не знаходиться між 1000 та 1900 включно')
}
else
{
    console.log ("Ціна товару знаходиться в проміжку між 1000 та 1900 включно")
}

// --------------------------

let price2 = 1900.1; // Ціна товару

if (price2!=1000 && price2 !=1900 && price2<1000 || price2 >1900){
    console.log ('Ціна товару не знаходиться між 1000 та 1900 включно')
}
else
{
    console.log ("Ціна товару знаходиться в проміжку між 1000 та 1900 включно")
}

// ---------- 4 --------------

let season = 1; // Номер пори року
    
if (season == 1){
    console.log ('Зима')
}
else if (season == 2){
    console.log ('Весна')
}
else if (season == 3){
    console.log ('Літо')
}
else if (season == 4){
    console.log ('Осінь')
}
else
{
    console.log ("Номер пори року не знайдено")
}

// ---------- 5 ------------

let a = 0; // Перше число
let b = 50; // Друге число 
let c = -353.8; // Третє число

if (a<b){  
    if (b<c){  
        console.log ('Середнє число: '+b)
    }
    else if (c<b){
        if(a<c){
            console.log ('Середнє число: '+c)
            }
        else if (c<a){
            console.log ('Середнє число: '+a)
        }
    } 
}
else if (b<a){  
    if (a<c){
        console.log ('Середнє число: '+a)
    }
    else if (c<a){
        if (c<b){
            console.log ('Середнє число: '+b) 
         }
        else if (b<c){
            console.log ('Середнє число: '+c)
         }
     }
}

// ---------- 6 ------------

let day = 1;
let arr= ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
switch (day) {
  case 1:
    console.log(arr[0]);
    break;
  case 2:
    console.log(arr[1]);
    break;
  case 3:
    console.log(arr[2]);
    break;
  case 4:
    console.log(arr[3]);
    break;
  case 5:
    console.log(arr[4]);
    break;
  case 6:
    console.log(arr[5]);
    break;
  case 7:
    console.log(arr[6]);
    break;
  default:
    console.log("Day not found");
}

// ---------- 7 ------------

let num1=777;
let num2=-3;
let operation = "/";
let result;
switch (operation) {
  case "+":
    result = num1+num2;
    console.log("Результат додавання: ", result);
    break;
  case "-":
    result = num1-num2;
    console.log("Результат віднімання: ", result);
    break;
  case "*":
    result = num1*num2;
    console.log("Результат множення: ", result);
    break;
  case "/":
    result = num2/num1;
    console.log("Результат ділення: ", result);
    break;
  default:
    console.log("Операція недійсна");
    }

// ---------- 8 ------------

const string = 'Lotto UktreІу'
const regex = /[^уеїіаоєяиюaeiouyїєяи]/gi
let arrayLetter = string.match(regex)
let consonants = arrayLetter.join('');
console.log(consonants)

// ---------- 9 ------------

let meter = 1009;
let km = meter/1000;
let meterLastDigit = meter % 10;
let integ;
let endingM;
let endingKm;
let meterArr = Array.from(String(meter))
let preLastDigit = Number(meterArr[meterArr.length -2]);
let thirdDigit = Number(meterArr[meterArr.length -3]);
let forthDigit = Number(meterArr[meterArr.length -4]);
let fifthDigit = Number(meterArr[meterArr.length -5]);

/* if(meter == NaN){
	console.log(meter + " is not a number") } else */

 if (/\d+\.\d+/.test(meter)) {
(endingM = "а", endingKm = "a")
console.log(meter,'метр'+endingM, 'це', km,'кілометр'+endingKm) }
else {

switch (true) {
     case (meterLastDigit == 1): 
          (preLastDigit==1 ? (endingM = "ів", endingKm = "a") : endingM = "", endingKm = "a");
        break;

     case (meterLastDigit >= 2 && meterLastDigit <= 4):
      preLastDigit==1 ? (endingM = "ів", endingKm = "a"):( endingM = "и", endingKm = "a")
      break;

      case (meterLastDigit >4 && meterLastDigit <10):
        (endingM = "ів", endingKm = "a");      
        break;

      case (meterLastDigit == 0):

          switch (true){

            case (meter == 0):
              (endingM = "ів", endingKm = "ів");
               break;


            case (preLastDigit >= 1):
              (endingM = "ів", endingKm = "а");
               break;


            case (preLastDigit == NaN):
              (endingM = "ів", endingKm = "ів");
              break;

            case (preLastDigit == 0): 
                switch (true){
                  case (thirdDigit > 0): 
                    (endingM = "ів", endingKm = "a");
                    break;

                  case (thirdDigit == NaN):
                    (endingM = "ів", endingKm = "ів");
                    break;

                  case (thirdDigit == 0):
                          switch (true){
                              case (forthDigit == 1):

                                switch (true){
                                    case (meter == 1000  || fifthDigit > 1 && forthDigit == 1 || fifthDigit == 0 && forthDigit == 1):
                                    (endingM = "ів", endingKm = "");
                                    break;
                                 }
                              break;

                              case (forthDigit > 1 && forthDigit < 5): 
                                (endingM = "ів", endingKm = "и"); 
                              break;

                              case (forthDigit == 0 || forthDigit > 4 && forthDigit < 10 || forthDigit == NaN):
                                (endingM = "ів", endingKm = "ів");
                              break;
                            }
                    break;
              }
              break;
              }
              break;
              }
    console.log(meter,'метр'+endingM, 'це', km,'кілометр'+endingKm)
}