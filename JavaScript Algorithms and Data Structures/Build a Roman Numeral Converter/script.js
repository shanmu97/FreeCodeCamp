const number = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

btn.addEventListener("click",()=>{
  if(!number.value){
    output.innerText="Please enter a valid number";
    output.style.border="4px solid red";
    output.style.fontSize="2.2rem";
    output.style.color="red";
    output.style.backgroundColor="#ffadad";
    return;
  }
  else if(number.value<1){
    output.innerText="Please enter a number greater than or equal to 1";
    output.style.border="4px solid red";
    output.style.fontSize="2rem";
    output.style.height="6rem";
    output.style.color="red";
    output.style.backgroundColor="#ffadad";
    return;
  }
  else if(number.value>3999){
    output.innerText="Please enter a number less than or equal to 3999";
    output.style.border="4px solid red";
    output.style.fontSize="2rem";
    output.style.height="6rem";
    output.style.color="red";
    output.style.backgroundColor="#ffadad";
    return;
  }
  else{
    output.innerText=String(numberToBinary(number.value));
  }
  });

  const numberToBinary=(input)=>{
    const n = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const s=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let i=0;
    let str="";
    while(input>0){
      if(input>=n[i]){
        str+=s[i];
        input-=n[i];
      }
      else{
        i++;
      }
    }
    return str;
  };
number.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    btn.click();
  }
});

