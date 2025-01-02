document.querySelector('#calculateButton').addEventListener('click', calculate);

function calculate() {
   let takenYear=0,takenMonth=0,takenDays=0,returnYear=0,returnDays=0,returnMonth=0,principal=0,rates=0,interest=0;
   let totalYear=0,totalMonth=0;totalDays=0;
   takenYear = Number(document.querySelector('#ATY').value);
   takenMonth =Number( document.querySelector('#ATM').value);
   takenDays = Number(document.querySelector('#ATD').value);
   returnYear =Number(document.querySelector('#ARY').value);
   returnMonth =Number(document.querySelector('#ARM').value);
   returnDays = Number(document.querySelector('#ARD').value);
   principal = Number(document.querySelector('#principal').value);
   rates =Number(document.querySelector('#rates').value);
   totalYear=returnYear-takenYear;
   totalMonth=returnMonth-takenMonth;
   totalDays=returnDays-takenDays;
   
   if(totalMonth<0)
   {
      totalYear--;
      totalMonth=totalMonth+12;
   }
   if(totalDays<0)
   {
      totalMonth--;
      totalDays=totalDays+30;
   }
   if(totalYear==0)
   {
      let time = (totalMonth/12)+(totalDays/365);
      interest=Calculation(principal,time,rates);
   }
   else{
      for(let i=0;i<totalYear;i++)
      {
         interest=Calculation(principal,1,rates);
         principal=interest+principal;
      }
      let time = (totalMonth/12)+(totalDays/365);
      interest=Calculation(principal,time,rates);
      principal=interest+principal;
   }
   alert(`total interest :${principal}`);
}
function Calculation(principal ,time,rate)
{
   let interest=0;
   interest=(principal*time*rate)/100;
   return interest;
}