function show(){
    var value=document.querySelector("#celcius").value;
    var result=document.querySelector("#result");
    let x=value;
    var res=(x-32)*(5/9);
    result.value=res+" C";
}

function show2(){
    var value2=document.querySelector("#fahrenheit").value;
    var result=document.querySelector("#result2");
    let x2=value2;
    let res2=((x2*9/5)+32);
    result2.value = res2+" F";
}

function show3(){
    var value3=document.querySelector("#kelvin").value;
    var result3=document.querySelector("#result3");
    let y=value3
    let res3=y+(273);
    console.log(y);
    console.log(res3);
    result3.value = res3+" K";
    
}