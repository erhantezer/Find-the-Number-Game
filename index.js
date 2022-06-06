//?=========== SELECTORS ===========
let guess = document.getElementById("guess");

let enterNumber = document.getElementById("number");

let check = document.getElementById("check");

let reset = document.getElementById("reset");

let attempt = document.getElementById("attempt");

let message=document.querySelector(".message");

//! ===== RANDOM SAYI OLUŞTURMA
const randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber);

//? ========= CLİCK OLAYINDA DEĞİŞİKLİKLER =======

check.addEventListener("click", ()=>{
    
   if(enterNumber.value>0 && enterNumber.value<=100){

    if(Number(enterNumber.value)>randomNumber){
   
       guess.innerHTML=`(1-${enterNumber.value})`;
       attempt.innerHTML--
       enterNumber.value="";
    }else if(Number(enterNumber.value)<randomNumber){
        
        guess.innerHTML=`(${enterNumber.value}-100)`;
        attempt.innerHTML--
        enterNumber.value="";
    }else if(Number(enterNumber.value)==randomNumber){
         message.innerHTML= `Tebrikler 🥳` ;
         enterNumber.value="";
    }
 
        
        
    }else{
        alert("Lütfen Uygun Aralıkta Sayı Giriniz");
        enterNumber.value="";
    }






})
reset.addEventListener("click", () => {
    window.location.reload(false);

});