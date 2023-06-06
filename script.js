let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
//showing the slider value as password lenth also default value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{

    sliderValue.textContent=inputSlider.value;
});


let passBox=document.getElementById("passBox");
let uppercase=document.getElementById("uppercase");
let lowercase=document.getElementById("lowercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyicon= document.getElementById("copyicon")

//function to show genrated password in passbox
genBtn.addEventListener('click', ()=>{

    passBox.value =genratePassword();
});

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNumbers="0123456789";
let allSymbols="~!@#$%^&*";

//function to genrate password
function genratePassword(){
    let genPassword="";
    let allChars="";
    allChars+=lowercase.checked ? lowerChars :"";
    allChars+=uppercase.checked ? upperChars :"";
    allChars+=numbers.checked ? allNumbers :"";
    allChars+=symbols.checked ? allSymbols :"";
    if (allChars =="" || allChars.length == 0 ){
        return genPassword;
    }
    let i=1
    while(i<=inputSlider.value){
    genPassword +=allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    }
    return genPassword;
}

copyicon.addEventListener('click' , function(){

    if(passBox.value != "" || passBox.value.length<=1){

    navigator.clipboard.writeText(passBox.value);
    copyicon.innerText="check"
    copyicon.title= "Password copied"
        setTimeout(()=>{
            copyicon.innerText='content_copy'
        }, 2000)

    }
    

});
