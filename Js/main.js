function donateBtn(){
    const donationBtn = document.getElementById('first-section');
    const historyBtn = document.getElementById('second-section');
    document.getElementById('donation-btn').classList.add('bg-primary');
    document.getElementById('history-btn').classList.remove('bg-primary');
    donationBtn.classList.remove('hidden');
    historyBtn.classList.add('hidden');
 }
 function donateBtn2(){
    const showDonation = document.getElementById('first-section');
    const historyShow = document.getElementById('second-section');
    document.getElementById('donation-btn').classList.remove('bg-primary');
    document.getElementById('history-btn').classList.add('bg-primary');
    showDonation.classList.add('hidden');
    historyShow.classList.remove('hidden');
 }

 // common function 
 
 function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
 function negTwoNumbers(num1, num2) {
    return num1 - num2;
  }

 document.getElementById('first-card-btn').addEventListener('click',function(){
    const inputField1 = parseFloat(document.getElementById('first-card-input').value);
    const mainBalance = parseFloat(document.getElementById('balance').innerText);
    const noakhaliMoney = parseFloat(document.getElementById('noakhali').innerText);
    if(isNaN(inputField1)){
       return  alert("Please enter a valid amount")
      }
    if(inputField1 > mainBalance){
       alert('Not Enough Balance');
       return ;
    }
    else{
       document.getElementById("my_modal_1").click()
       const newBalance = negTwoNumbers(mainBalance, inputField1) ;
       document.getElementById('balance').innerText = newBalance;
       const noakhaliBalance = addTwoNumbers(noakhaliMoney,inputField1);
       document.getElementById('noakhali').innerText = noakhaliBalance;
       const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
       const historyEntry = document.createElement('div');
       historyEntry.className = 'history-entry';
       historyEntry.classList.add('border');
       historyEntry.classList.add('rounded-md');
       historyEntry.classList.add('mt-3');
       historyEntry.classList.add('p-6');
       historyEntry.innerHTML = `
       <p class="text-center font-bold">${inputField1} Taka is donated for famine-2024 at noakhali, Bangladesh </p>
       <p class="text-center font-extralight">Date: ${now}</p>
   `;
   document.getElementById('donation-history').appendChild(historyEntry);
 
    }
 })
//  Feni

 document.getElementById('second-card-btn').addEventListener('click',function(){
 
    const  inputField22 = parseFloat(document.getElementById('second-card-input').value);
    const mainBalance = parseFloat(document.getElementById('balance').innerText);
    const feniMoney = parseFloat(document.getElementById('feni').innerText);
    if(isNaN(inputField22)){
     return  alert("Please enter a valid amount")
    }
    if( inputField22 > mainBalance ){
       alert('Not Enough Balance');
       return ;
    }
    else{
       document.getElementById("my_modal_2").click()
       const newBalance = negTwoNumbers(mainBalance, inputField22);
       document.getElementById('balance').innerText = newBalance;
       const feniBalance = addTwoNumbers(feniMoney, inputField22);
       document.getElementById('feni').innerText = feniBalance;
       const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
       const historyEntry = document.createElement('div');
       historyEntry.className = 'history-entry';
       historyEntry.classList.add('border');
       historyEntry.classList.add('rounded-md');
       historyEntry.classList.add('mt-3');
       historyEntry.innerHTML = `
       <p class="text-center font-bold">${ inputField22} Taka is donated for Flood Relief in Feni, Bangladesh </p>
       <p class="text-center font-extralight">Date: ${now}</p>
   `;
   document.getElementById('donation-history').appendChild(historyEntry);
 
    }
 })
 // ****Quota****
 document.getElementById('third-card-btn').addEventListener('click',function(){
 
    const  inputField33 = parseFloat(document.getElementById('third-card-input').value);
    const mainBalance = parseFloat(document.getElementById('balance').innerText);
    const quotaMoney = parseFloat(document.getElementById('quota').innerText);
    if(isNaN(inputField33)){
       return  alert("Please enter a valid amount")
      }
    if( inputField33 > mainBalance){
       alert('Not Enough Balance');
       return ;
    }
    else{
       document.getElementById("my_modal_3").click()
       const newBalance = negTwoNumbers(mainBalance, inputField33);
       document.getElementById('balance').innerText = newBalance;
       const quotaBalance = addTwoNumbers(quotaMoney, inputField33);
       document.getElementById('quota').innerText = quotaBalance;
       const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
       const historyEntry = document.createElement('div');
       historyEntry.className = 'history-entry';
       historyEntry.classList.add('border');
       historyEntry.classList.add('rounded-md');
       historyEntry.classList.add('mt-3');
       historyEntry.innerHTML = `
       <p class="text-center font-bold">${ inputField33} Taka is donated for Aid for Injured in the Quota Movement, Bangladesh </p>
       <p class="text-center font-extralight">Date: ${now}</p>
   `;
   document.getElementById('donation-history').appendChild(historyEntry);
 
    }
 })