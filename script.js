let result = document.getElementById("result");
let main=[];
let source=[];
// Making Number adding function in result Box
let numbers;
function number(n){
    numbers =result.innerHTML += n ;
    return numbers  
}

// Making calculation function
function output(){
    let output = eval(result.innerHTML)
    if( result.innerHTML === ''){  return result.innerHTML+="Enter Number"}
    if( result.innerHTML == "7.7"){  return result.innerHTML+="= Taqui"}
    if(result.innerHTML){main.push(result.innerHTML+"="+output)};
    localStorage.setItem("main",main);
    result.innerHTML = ''
    result.innerHTML += output ;
    return
}
// making clear result box  function 
function cl(){
    
    return result.innerHTML=''  
}
function back(){
    return result.innerHTML+=localStorage.getItem("main")
}



