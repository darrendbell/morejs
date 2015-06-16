var moneyinput =document.getElementById('money_made');
var moneyButton =document.getElementById('money_made_button');
var totalMoney=0;

moneyButton.addEventListener('click',function(){
  totalMoney =moneyinput.value;
  console.log(totalMoney);
});
