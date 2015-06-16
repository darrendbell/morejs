var moneyinput =document.getElementById('money_made');
var moneyButton =document.getElementById('money_made_button');
var totalMoney=0;
var total =document.getElementById('total');


moneyButton.addEventListener('click',function(){
  totalMoney =moneyinput.value;
  console.log(totalMoney);
});


var billinput =document.getElementById('money_spent');
var billButton =document.getElementById('money_spent_button');
var totalBill=0;

billButton.addEventListener('click',function(){
  totalBill =billinput.value;
  console.log(totalBill);
  total.innerHTML =totalMoney - totalBill;
});