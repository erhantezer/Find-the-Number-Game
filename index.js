//?=========== SELECTORS ===========
window.onload=function (){
let guess = document.getElementById("guess");

let enterNumber = document.getElementById("number");

let check = document.getElementById("check");

let reset = document.getElementById("reset");

let attempt = document.getElementById("attempt");

let message=document.querySelector(".message");

let p1 =document.querySelector("p");

//! ===== RANDOM SAYI OLUŞTURMA
const randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber);

//? ========= CLİCK OLAYINDA DEĞİŞİKLİKLER =======
enterNumber.focus();
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
    if(+ attempt.innerHTML==0){
        document.querySelector("section").style.display="none"
    }
        
    
    }else{
        alert("Lütfen Uygun Aralıkta Sayı Giriniz");
        enterNumber.value="";
       
    }

reset.addEventListener("click", () => {
    window.location.reload(false);
    enterNumber.focus();
});

})
}
