	var l=0;
function dark()
{
	if(l%2==0)
	{
   document.getElementsByTagName("h1")[0].setAttribute("id","dark");
   document.body.style.backgroundColor="black";
   document.getElementById("head").setAttribute("id","headd");
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
document.getElementsByTagName("h3")[0].style.color="white";
document.getElementById("last").style.color="white";
l=l+1;
//window.alert(l);
 }
 else
 {
 	document.getElementsByTagName("h1")[0].removeAttribute("id");
 	document.body.style.backgroundColor="white";
 	document.getElementById("headd").setAttribute("id","head");
 	document.getElementById("mid").style.backgroundColor="rgb(24, 0, 54)";
 	var x=document.getElementsByTagName("button");
 	document.getElementsByClassName("cente")[0].style.color="black";
 	var i;
   for(i=0;i<x.length;i++)
   {
   	x[i].style.backgroundColor="white";
   	x[i].style.color="black";
   }
    x=document.getElementsByTagName("a");
   for(i=0;i<x.length;i++)
   {
   	x[i].style.color="#0000EE";
   }
   document.getElementById("lb1").style.color="black";
   x=document.getElementsByTagName("h4");
   for(i=0;i<x.length;i++)
   {
   	x[i].style.color="black";
   }
document.getElementsByClassName("at")[0].style.color="black";
document.getElementsByTagName("h3")[0].style.color="black";
document.getElementById("last").style.color="black";
 	//window.alert(l);
 	l=l+1;
 }
}