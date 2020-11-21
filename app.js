var q=0;
var p="";
var text="Hello there,  My  name  is  Aman  and  Welcome  to  my  website";

 
function load(){
   
    var id=setInterval(
    write,110);
}



function write(){

   p= document.querySelector(".write").innerText;
    document.querySelector(".write").innerText=text.substring(0,q);
if(q>70)
{
    clearInterval(id);
}
    

    if(text.charAt(q+1)==' ')
    {
        q=q+1;
        console.log("spacr");
    }
    if(text.charAt(q+1)==',')
    {
   
        q=q+2;
        console.log("spacr");
    }
    
    q++;
  
}
