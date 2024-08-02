const input=document.getElementById("text-input");
const btn=document.getElementById("check-btn");
const result=document.getElementById("result");
result.style.display='none';
btn.addEventListener("click",()=>{
  let text=input.value;
  let res=text;
  if(!res){
    alert("Please input a value");
    return;
  }
  result.style.display="block";
  if(isPalindrome(text)){
    result.innerText=`${text} is a palindrome.`
  }
  else{
    result.innerText=`${text} is not a palindrome.`
  }
  
  
});
const isPalindrome=(stri)=>{
  const str=good(stri).toLowerCase();
  let s="";
  for(let i=str.length-1;i>=0;i--){
    s+=str.charAt(i);
  }
  return s===str;
};
const good=(str)=>{
  const regex=/[-_\s,.:()]/g;
  return str.replace(regex,"");
};

