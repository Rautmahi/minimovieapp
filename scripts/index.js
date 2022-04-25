// Store the wallet amount to your local storage with key "amount"


let walletshow=document.getElementById("wallet")
let sum=0;
function addTowallet()
{
  let amount=document.getElementById("amount").value;
  // console.log(amount)

  sum=sum+(+amount)

  let exitamt=JSON.parse(localStorage.getItem("amount")) ||[]

  exitamt.push(sum)
  localStorage.setItem("amount",JSON.stringify(exitamt))
  walletshow.innerText=null;

  walletshow.append(exitamt[exitamt.length-1])
}




