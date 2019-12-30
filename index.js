var array=document.querySelectorAll(".drum");
for(var i =0;i<array.length;i++)
{array[i].addEventListener("click",handleClick);
}
function handleClick(){
this.style.color="white";
var audio=new Audio('sounds/crash.mp3');
audio.play();
}
