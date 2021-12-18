var numbOne = "", numbTwo = "";
var operator = false, plus = false, subtract = false, multiply = false, divide = false, equal = false, negative = false,
negCheck1 = false, negCheck2 = false, operator2 = false, plus2 = false, subtract2 = false, multiply2 = false, divide2 = false;
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
var counter = 0;
//   // var stores current value in calculator (variable store)
//   // store = currently there + input
//   // (double) store --> cast to double 
//   //  double(store)
setText("whereNumbersGo",numbOne);
function createNumber(str)
{
  //creating the first number
  if(operator == false && numbOne == "")
  {
     numbOne = str;
     setText("whereNumbersGo",numbOne);
  }
  else if(operator == false)
  {
   numbOne = numbOne + str;
   setText("whereNumbersGo",numbOne);
  }
  //creating the operator
  else if (operator == true && plus == true && numbTwo == undefined)
  {
    numbTwo = "";
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    operator = false;
    
  }
  else if (operator == true && subtract == true && numbTwo == undefined)
  {
    numbTwo = "";
    setText("whereNumbersGo",numbOne + " - " + numbTwo);
    operator = false;
    
  }
  else if(operator == true && multiply == true && numbTwo == undefined)
  {
    numbTwo = "";
    setText("whereNumbersGo",numbOne + " x " + numbTwo);
    operator = false;
    
  }
  else if(operator == true && divide == true && numbTwo == undefined)
  {
    numbTwo = "";
    setText("whereNumbersGo",numbOne + " ÷ " + numbTwo);
    operator = false;
    
  }
  //creating the second number
  else if (operator == true && plus == true && numbTwo == "")
  {
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    operator2 = true;
    plus2 = true;
    
  }
  else if (operator == true && subtract == true && numbTwo == "")
  {
    numbTwo = str;
    setText("whereNumbersGo",numbOne + " - " + numbTwo);
    operator2 = true;
    subtract2 = true;
    
  }
  else if(operator == true && multiply == true && numbTwo == "")
  {
    numbTwo = str;
    setText("whereNumbersGo",numbOne + " x " + numbTwo);
    operator2 = true;
    multiply2 = true;
    
  }
  else if(operator == true && divide == true && numbTwo == "")
  {
    numbTwo = str;
    setText("whereNumbersGo",numbOne + " ÷ " + numbTwo);
    operator2 = true;
    divide2 = true;
    
  }
  else if (operator == true && plus == true)
  {
    
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    
  }
  else if (operator == true && subtract == true)
  {
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " - " + numbTwo);
    
  }
  else if(operator == true && multiply == true)
  {
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " x " + numbTwo);
    
  }
  else if(operator == true && divide == true)
  {
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " ÷ " + numbTwo);
  }
}

function equalSign(str) 
{
  var numbOneDouble = parseFloat(numbOne);
  var numbTwoDouble = parseFloat(numbTwo);
  
  if(equal == true && plus == true || equal == true && plus2 == true)
  {
    
    setText("whereNumbersGo", numbOne + " + " + numbTwo + "\n\n" + (numbOneDouble + numbTwoDouble) + "\n");
    plus = false;
    //console.log(numbOneDouble);
  }
  else if(equal == true && subtract == true || equal == true && subtract2 == true)
  {
    setText("whereNumbersGo", numbOne + " - " + numbTwo + "\n\n" + (numbOneDouble - numbTwoDouble) + "\n");
    subtract = false;
    //console.log(numbOneDouble);
  }
  else if(equal == true && multiply == true || equal == true && multiply2 == true)
  {
    setText("whereNumbersGo", numbOne + " x " + numbTwo + "\n\n" + (numbOneDouble * numbTwoDouble) + "\n");
    multiply = false;
    //console.log(numbOneDouble);
  }
  else if(equal == true && divide == true || equal == true && divide2 == true)
  {
    setText("whereNumbersGo", numbOne + " ÷ " + numbTwo + "\n\n" + (numbOneDouble / numbTwoDouble) + "\n");
    divide = false;
    //console.log(numbOneDouble);
  }
  
}
function isNegative(str)
{
  if (negative == true && negCheck1 == true)
  {
    numbOne = str;
    setText("whereNumbersGo", numbOne);
    negCheck1 = false;
  }
 else if (operator == true && plus == true && negCheck2 == true || operator2 == true && plus2 == true)
  {
    
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    negCheck2 = false;
    
  }
  else if (operator == true && subtract == true && negCheck2 == true || operator2 == true && subtract2 == true)
  {
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " - " + numbTwo);
    negCheck2 = false;
    
  }
  else if(operator == true && multiply == true && negCheck2 == true || operator2 == true && multiply2 == true)
  {
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " x " + numbTwo);
    negCheck2 = false;
    
  }
  else if(operator == true && divide == true && negCheck2 == true || operator2 == true && divide2 == true)
  {
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " ÷ " + numbTwo);
    negCheck2 = false;
  }
}
function isPositive(str)
{
  if (negative == true && negCheck1 == true)
  {
    numbOne = str;
    setText("whereNumbersGo", numbOne);
    negCheck1 = false;
  }
  else if(operator == true && plus == true && negCheck2 == true)
  {
    
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    negCheck2 = false;
    
  }
  else if (operator == true && subtract == true && negCheck2 == true)
  {
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " - " + numbTwo);
    negCheck2 = false;
    
  }
  else if(operator == true && multiply == true && negCheck2 == true)
  {
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " x " + numbTwo);
    negCheck2 = false;
    
  }
  else if(operator == true && divide == true && negCheck2 == true)
  {
    numbTwo = str;
    setText("whereNumbersGo", numbOne + " ÷ " + numbTwo);
    negCheck2 = false;
  }
}
function sendToError()
{
  if(operator == true && plus == true)
  {
    setText("whereNumbersGo", "ERROR");
    operator = false;
    plus = false;
  }
  else if(operator == true && subtract == true)
  {
    setText("whereNumbersGo", "ERROR");
    operator = false;
    subtract = false;
  }
  else if(operator == true && multiply == true)
  {
    setText("whereNumbersGo", "ERROR");
    operator = false;
    multiply = false;
  }
  else if(operator == true && divide == true)
  {
    setText("whereNumbersGo", "ERROR");
    operator = false;
    divide = false;
  }
}
function moreThanTwoNumbers(str) 
{
  var numbOneDouble = parseFloat(numbOne);
  var numbTwoDouble = parseFloat(numbTwo);
  numbTwo = "";
  if(operator2 == true && plus2 == true)
  {
    numbOne = numbOneDouble + numbTwoDouble;
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    plus = false;
    plus2 = false;
    subtract2 = false;
    multiply2 = false;
    divide2 = false;
    //console.log(numbOneDouble);
  }
  else if(operator2 == true && subtract2 == true)
  {
    numbOne = numbOneDouble - numbTwoDouble;
    setText("whereNumbersGo", numbOne + " - " + numbTwo);
    subtract = false;
    plus2 = false;
    subtract2 = false;
    multiply2 = false;
    divide2 = false;
    //console.log(numbOneDouble);
  }
  else if(operator2 == true && multiply2 == true)
  {
    numbOne = numbOneDouble * numbTwoDouble;
    setText("whereNumbersGo", numbOne + " x " + numbTwo);
    multiply = false;
    plus2 = false;
    subtract2 = false;
    multiply2 = false;
    divide2 = false;
    //console.log(numbOneDouble);
  }
  else if(operator2 == true && divide2 == true)
  {
    numbOne = numbOneDouble / numbTwoDouble;
    setText("whereNumbersGo", numbOne + " ÷ " + numbTwo);
    divide = false;
    plus2 = false;
    subtract2 = false;
    multiply2 = false;
    divide2 = false;
    //console.log(numbOneDouble);
  }
}
function theSecondNumber(str)
{
  
  if(operator2 == true && plus2 == true)
  {
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    plus = false;
    //console.log(numbOneDouble);
  }
  else if(operator2 == true && subtract2 == true)
  {
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " - " + numbTwo);
    subtract = false;
    //console.log(numbOneDouble);
  }
  else if(operator2 == true && multiply2 == true)
  {
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " x " + numbTwo);
    //console.log(numbOneDouble);
  }
  else if(operator2 == true && divide2 == true)
  {
    numbTwo = numbTwo + str;
    setText("whereNumbersGo", numbOne + " ÷ " + numbTwo);
    //console.log(numbOneDouble);
  }
}

onEvent("zeroButton", "click", function(event) {
  a = "0";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
//  worksPerfectly();
});
onEvent("oneButton", "click", function(event) {
  a = "1";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});  

onEvent("twoButton", "click", function(event) {
  a = "2";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("threeButton", "click", function(event) {
  a = "3";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("fourButton", "click", function(event) {
  a = "4";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("fiveButton", "click", function(event) {
  a = "5";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("sixButton", "click", function(event) {
  a = "6";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("sevenButton", "click", function(event) {
  a = "7";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("eightButton", "click", function(event) {
  a = "8";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("nineButton", "click", function(event) {
  a = "9";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("decimalButton", "click", function(event) {
  a = ".";
  if(operator == false && operator2 == true)
  {
    theSecondNumber(a);
  }
  else
  {
    createNumber(a);
  }
  // worksPerfectly();
});
onEvent("negativeButton", "click", function(event) {
  var positive = true;
  var x;
  negCheck1 = true;
  var numbOneDouble = parseFloat(numbOne);
  var numbOneDouble = parseFloat(numbTwo);
  counter++;
  x = counter;
  if(numbOne >= 0 && operator == false && negCheck1 == true && operator2 == false)
  {
    a = "-";
    b = numbOne;
    numbOne = a;
    c = numbOne + b;
    negative = true;
    positive = false;
    isNegative(c);
  }
  else if(operator = true && numbTwo >= 0)
  {
    negCheck2 = true;
    a = "-";
    b = numbTwo;
    numbTwo = a;
    c = numbTwo + b;
    negative = true;
    negCheck1 = false;
    isNegative(c);
  }

  
  // worksPerfectly();
});
onEvent("plusButton", "click", function(event) {
  a = "";
  operator = true;
  plus = true;
  if(numbOne == "")
  {
    sendToError();
  }
  if(operator = true && plus == true && operator2 == false)
  {
    createNumber(a);
  }
  else//(operator2 == true && plus2 == true && operator == false)
  {
    moreThanTwoNumbers(a);
    setText("whereNumbersGo", numbOne + " + " + numbTwo);
    plus2 = true;
  }
  
});
onEvent("minusButton", "click", function(event) {
  a = "";
  operator = true;
  subtract = true;
  
  if(numbOne == "")
  {
    sendToError();
  }
  if(operator = true && subtract == true && operator2 == false)
  {
    createNumber(a);
  }
  else//(operator2 == true && subtract2 == true && operator == false)
  {

    moreThanTwoNumbers(a);
    setText("whereNumbersGo", numbOne + " - " + numbTwo);
    subtract2= true;
  }
  
});
onEvent("multiplyButton", "click", function(event) {
  a = "";
  operator = true;
  multiply = true;
 
  if(numbOne == "")
  {
    sendToError();
  }
  if(operator = true && multiply == true && operator2 == false)
  {
    createNumber(a);
  }
  else
  {

    moreThanTwoNumbers(a);
    setText("whereNumbersGo", numbOne + " x " + numbTwo);
    multiply2 = true;
  }
  
});
  
onEvent("divideButton", "click", function(event) {
  a = "";
  operator = true;
  divide = true;
  
  if(numbOne == "")
  {
    sendToError();
  }
  if(operator = true && divide == true && operator2 == false)
  {
    createNumber(a);
  }
  else//(operator2 == true && divide2 == true && operator == false)
  {
    
    moreThanTwoNumbers(a);
    setText("whereNumbersGo", numbOne + " ÷ " + numbTwo);
    divide2 = true;
  }
  
});
onEvent("equalButton", "click", function(event) {
  a = "";
  operator = false;
  equal = true;
  equalSign(a);
});
onEvent("resetBTN", "click", function(event) 
{
  numbOne = "";
  numbTwo = "";
  setText("whereNumbersGo", numbOne);
  operator = false;
  negative = false;
  equal = false;
  plus = false;
  subtract = false;
  multiply = false;
  divide = false;
  negCheck1 = false;
  negCheck2 = false;
  operator2 = false;
  plus2 = false;
  subtract2 = false;
  multiply2 = false;
  divide2 = false;

});
