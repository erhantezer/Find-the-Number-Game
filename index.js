//?=========== SELECTORS ===========
window.onload=function (){
let guess1 = document.getElementById("guess1");

let guess2 = document.getElementById("guess2");

let enterNumber = document.getElementById("number");

let check = document.getElementById("check");

let reset = document.getElementById("reset");

let attempt = document.getElementById("attempt");

let message=document.querySelector(".message");

let bas =document.querySelector(".bas");



//! ===== RANDOM SAYI OLUŞTURMA
const randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber);

//? ========= CLİCK OLAYINDA DEĞİŞİKLİKLER =======
enterNumber.focus();
check.addEventListener("click", ()=>{
  
   if(enterNumber.value>0 && enterNumber.value<=100){

    if(Number(enterNumber.value)>randomNumber){
   
       guess2.innerHTML=`${enterNumber.value}`;
       attempt.innerHTML--
       enterNumber.value="";
       
    }else if(Number(enterNumber.value)<randomNumber){
        
        guess1.innerHTML=`${enterNumber.value}`;
        attempt.innerHTML--
        enterNumber.value="";
    }else if(Number(enterNumber.value)==randomNumber){
         message.innerHTML= `Tebrikler 🥳` ;
         enterNumber.value="";
    }
    if(+ attempt.innerHTML==0){
        document.querySelector("section").style.display="none";
        bas.innerHTML=`Bugünde Ölmedim Anne`
        
    }
        
    
    }else{
        alert("Lütfen Uygun Aralıkta Sayı Giriniz");
        enterNumber.value="";

       
    }
 
reset.addEventListener("click", () => {
    window.location.reload(false);
    enterNumber.focus();
});

});enterNumber.addEventListener('keydown', (e) => {
    // console.log(e);
    if (e.code === "Enter") {
      check.click();
    }
})

}
