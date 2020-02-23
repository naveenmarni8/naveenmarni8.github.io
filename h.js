<<<<<<< HEAD
function dark()
{
   document.getElementsByTagName("h1")[0].setAttribute("id","dark");
   document.body.style.backgroundColor="black";
   document.getElementById("head").setAttribute("id","headd")
   document.getElementById("mid").style.backgroundColor="black";
   var x=document.getElementsByTagName("button");
   document.getElementsByClassName("cente")[0].style.color="#F0E68C";
   var i;
   for(i=0;i<x.length;i++)
   {
   	x[i].style.backgroundColor="black";
   	x[i].style.color="white";
   }
   x=document.getElementsByTagName("a");
   for(i=0;i<x.length;i++)
   {
   	x[i].style.color="green";
   }
   document.getElementById("lb1").style.color="white";
   x=document.getElementsByTagName("h4");
   for(i=0;i<x.length;i++)
   {
   	x[i].style.color="white";
   }
document.getElementsByClassName("at")[0].style.color="white";
=======
function dark()
{
   document.getElementsByTagName("h1")[0].setAttribute("id","dark");
   document.body.style.backgroundColor="black";
   document.getElementById("head").setAttribute("id","headd")
   document.getElementById("mid").style.backgroundColor="black";
   var x=document.getElementsByTagName("button");
   document.getElementsByClassName("cente")[0].style.color="#F0E68C";
   var i;
   for(i=0;i<x.length;i++)
   {
   	x[i].style.backgroundColor="black";
   	x[i].style.color="white";
   }
   x=document.getElementsByTagName("a");
   for(i=0;i<x.length;i++)
   {
   	x[i].style.color="green";
   }
   document.getElementById("lb1").style.color="white";
   x=document.getElementsByTagName("h4");
   for(i=0;i<x.length;i++)
   {
   	x[i].style.color="white";
   }
document.getElementsByClassName("at")[0].style.color="white";
>>>>>>> 3df53a6d2e057e4dee19f0a60504d5513fe03fab
 }