var moneyInput =document.getElementById('money_made');
var moneyButton =document.getElementById('money_made_button');
var totalMoney=0;
var total =document.getElementById('total');


moneyButton.addEventListener('click',function(){
  totalMoney =moneyInput.value;
  console.log(totalMoney);
});

var billInput =document.getElementById('money_spent');
var billInput2 =document.getElementById('money_spent2');
var billInput3 =document.getElementById('money_spent3');
var billButton =document.getElementById('money_spent_button');
var totalBill=0;



billButton.addEventListener('click',function(){
  totalBill = parseInt(billInput.value) + parseInt(billInput2.value) 
  + parseInt(billInput3.value);
  console.log(totalBill);
  total.innerHTML= totalMoney - totalBill;
});

