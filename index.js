var array=document.querySelectorAll("button");
for(var i =0;i<array.length;i++)
{array[i].addEventListener("click",handleClick);  
}
function handleClick(){
  alert("I Got Clicked");
}
