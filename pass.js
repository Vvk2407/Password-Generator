const upperSet = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerSet  = "abcdefghijklmnopqrstuvxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()";


const passBox = document.getElementById("pass-box");
const totalInput = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");



const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length )];
}



const generatePass = (password = "")=>{
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }

    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }

    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    if(password.length <= totalInput.value){
        return generatePass(password)
    }
    passBox.innerText = (truncateString(password, totalInput.value));

}



document.getElementById("btn").addEventListener("click", function(){
    generatePass();
})

function truncateString(str ,  num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}
