    
    var counter1=0;
    var first1=0;
    var counter2=0;
    var first2=0;
    var wait=0;
    var chance=1;
    var winner=0;
    var c;
    var fast=0;
    var nextstepover=0;
    var sn;


    function dice1(){

        var nextstepover=0;
        if(winner==1)
        {
            return;
        }
        if(chance==2)
        {
            document.getElementById("winner").classList.remove("pink");
            document.getElementById("winner").classList.add("red");
            document.getElementById("winner").innerText="Player2's turn ! Wait for your turn Player1";
            wait=1;
            return;
        }
        fast=0;
        c=counter1;
        


        

        if(wait==1)
        {
            document.getElementById("winner").classList.remove("red");
            document.getElementById("winner").classList.add("pink");
            document.getElementById("winner").innerText="All good, Player2's turn";
            wait=0;

        }
        chance=2;


        var p=Math.floor(Math.random()*6) +1;
        playsound("dicesound");
        $(".img1").fadeIn(180).fadeOut(180).fadeIn(180);
       
        document.querySelector(".img1").setAttribute("src","dice"+p+".png");


        if(first1==0)
        {
            
            document.getElementsByClassName("start1")[0].classList.add("hide");
        }
        first1=1;
        // if(first1>0 || counter1+p<=100)
        // {
        // document.getElementById(counter1).classList.remove("p");
        
        // }
       
        
  
        
        
        if(counter1+p>100)
        {
            document.getElementById("winner").innerText="All good, Player2's turn";
            return;
        }
        else if(counter1+p==100)
        {
            winner=1;
            document.getElementById("winner").classList.add("green");
            playsound("winner");
            nextstep(c,counter1,"p","player1");
            document.getElementById("winner").innerText="Congratulations! Player 1 is the winner";
            return;
        }


        // var pw=0
        // pw=w(counter1,counter1+p);
        // while(pw==0)
        // {

        // }




        counter1=counter1+p;

        
        if(counter1==18)
        {
            counter1=44; fast=460;
        }
        else if(counter1==15)
        {
            counter1=34; fast=460;
        }
        else if(counter1==39)
        {
            counter1=80; fast=460;
        }
        else if(counter1==55)
        {
            counter1=86; fast=460;
        }
        else if(counter1==69)
        {
            counter1=88; fast=460;
        }
        else if(counter1==99)
        {
            sn=counter1;
            nextstep(c,counter1,"p","player1");
            c=counter1;
            counter1=24; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter1,"p","player1");
            check("player1");
            return;
        }
        else if(counter1==77)
        {
            sn=counter1;
            nextstep(c,counter1,"p","player1");
            c=counter1;
            counter1=58; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter1,"p","player1");
            check("player1");
            return;
        }
        else if(counter1==73)
        {
            sn=counter1;
            nextstep(c,counter1,"p","player1");
            c=counter1;
            counter1=51; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter1,"p","player1");
            check("player1");
            return;
        }
        else if(counter1==45)
        {
            sn=counter1;
            nextstep(c,counter1,"p","player1");
            c=counter1;
            counter1=17; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter1,"p","player1");
            check("player1");
            return;
        }
        else if(counter1==48)
        {
            sn=counter1;
            nextstep(c,counter1,"p","player1");
            c=counter1;
            counter1=14; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter1,"p","player1");
            check("player1");
            return;
        }
        else if(counter1==40)
        {
            sn=counter1;
            nextstep(c,counter1,"p","player1");
            c=counter1;
            counter1=22; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter1,"p","player1");
            check("player1");
            return;
        }

       

        nextstep(c,counter1,"p","player1");

        // document.getElementById(counter1).classList.add("p");
        console.log(p);
        // document.getElementById("winner").innerText="All good, Player2's turn";
        console.log("c="+counter1);
        if(counter1==counter2)
        {
            document.getElementById(counter2).classList.remove("q");
            document.getElementsByClassName("start2")[0].classList.remove("hide");
            chance=1;
            playsound("cut");
            first2=0;
            document.getElementById("winner").innerText="All good, Player1's turn";
        }
        
    }






        
    function dice2(){
        var nextstepover=0;
        if(winner==1)
        {
            return;
        }

        if(chance==1)
        {
            document.getElementById("winner").classList.remove("pink");
            document.getElementById("winner").classList.add("red");
            document.getElementById("winner").innerText="Player1's turn! Wait for your turn Player2";
            wait=1;
            return;
        }

        fast=0;
        c=counter2;

        
        
       
        chance=1;
        if(wait==1)
        {
            wait=0;
            document.getElementById("winner").classList.remove("red");
            document.getElementById("winner").classList.add("pink");
            document.getElementById("winner").innerText="All good, Player1's turn";
        }
        if(first2==0)
        {
          
            document.getElementsByClassName("start2")[0].classList.add("hide");
        }

        
        first2=1;
        var q=Math.floor(Math.random()*6) +1;
        playsound("dicesound");
        $(".img2").fadeIn(180).fadeOut(180).fadeIn(180);
        document.querySelector(".img2").setAttribute("src","dice"+q+".png");

        // if(first2>0 || counter2+q<=100)
        // {
        // document.getElementById(counter2).classList.remove("q");
        
        // }
        
        if(counter2+q>100)
        {
            document.getElementById("winner").innerText="All good, Player1's turn";
            return;

        }
        else if(counter2+q==100)
        {
            document.getElementById("winner").classList.add("green");
            playsound("winner");
            nextstep(c,counter2,"q","player2");
            document.getElementById("winner").innerText="Congratulations! Player2 is the  winner";
            winner=1;
            return;
        }
        counter2=counter2+q;

        
         if(counter2==18)
        {
            counter2=44; fast=460;
        }
        else if(counter2==15)
        {
            counter2=34; fast=460;
        }
        else if(counter2==39)
        {
            counter2=80; fast=460;
        }
        else if(counter2==55)
        {
            counter2=86; fast=460;
        }
        else if(counter2==69)
        {
            counter2=88; fast=460;
        }
        else if(counter2==99)
        {
            sn=counter2;
            nextstep(c,counter2,"q","player2");
            c=counter2;
            counter2=24; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter2,"q","player2");
            check("player2");
            return;

            
        }
        else if(counter2==77)
        {
            sn=counter2;
            nextstep(c,counter2,"q","player2");
            c=counter2;
            counter2=58; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter2,"q","player2");
            check("player2");
            return;
        }
        else if(counter2==73)
        {
            sn=counter2;
            nextstep(c,counter2,"q","player2");
            c=counter2;
            counter2=51; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter2,"q","player2");
            check("player2");
            return;
        }
        else if(counter2==45)
        {
            sn=counter2;
            nextstep(c,counter2,"q","player2");
            c=counter2;
            counter2=17; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter2,"q","player2");
            check("player2");
            return;
        }
        else if(counter2==48)
        {
            sn=counter2;
            nextstep(c,counter2,"q","player2");
            c=counter2;
            counter2=14; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter2,"q","player2");
            check("player2");
            return;
        }
        else if(counter2==40)
        {
            sn=counter2;
            nextstep(c,counter2,"q","player2");
            c=counter2;
            counter2=22; fast=460;
            // while(nextstepover==0);
            prevstep(c,counter2,"q","player2");
            check("player2");
            return;
        }

        

        nextstep(c,counter2,"q","player2");
        // document.getElementById("winner").innerText="All good, Player1's turn";
        // document.getElementById(counter2).classList.add("q");
        console.log(q);
        console.log("c="+counter2);
        if(counter2==counter1)
        {
            document.getElementById(counter1).classList.remove("p");
            playsound("cut");
            document.getElementsByClassName("start1")[0].classList.remove("hide");
            chance=2;
            first1=0;
            document.getElementById("winner").innerText="All good, Player2's turn";
        }
    }



    // function w(i,f){
    //     console.log("i="+i);
    //     for(var g=i;g<=f;g++)
    //     {
    //     setTimeout(function(){
    //         nextstep(i+1,f);
    //     },1000)
    // }
    // if(g>f)
    // return 1;

    
    // }

     function nextstep(i,f,clas,player)
     {
         
           
            my=setInterval(() => {
                i=i+1;
                 document.getElementById(i).classList.add(clas);
            playsound(player);
                 if(i-1!=0)
                document.getElementById(i-1).classList.remove(clas);
                if(i==f)
                {
                    if(player=="player1" && counter1!=counter2)
                    {
                document.getElementById("winner").innerText="All good, Player2's turn";
                    }
                else if(player=="player1" && counter1==counter2)
                {
                    counter2=0;
                    first2=0;

                    document.getElementById("winner").innerText="All good, Player1's turn";
            }
            else if(player=="player2" && counter1!=counter2)
             {
                document.getElementById("winner").innerText="All good, Player1's turn";
             }
             else
             {
                 counter1=0;
                 first1=0;
                document.getElementById("winner").innerText="All good, Player2's turn"; 
             }
                clearInterval(my);
                nextstepover=1;
                
                }
                console.log("i="+i);
                console.log("f="+f);
                

            }, 670-fast);

           
        //     $("#g").fadeIn(900).fadeOut(900).fadeIn(900);
         
        //  $("#g").fadeIn(900).fadeOut(900).fadeIn(900);
        
         

     }


     function prevstep(i,f,clas,player)
     {
         
           
            myy=setInterval(() => {
                i=i-1;
                 document.getElementById(i+1).classList.remove(clas);
            playsound(player);
                 if(i-1!=0)
                document.getElementById(i).classList.add(clas);
                if(i==f)
                {
                    if(player=="player1" && counter1!=counter2)
                    {
                document.getElementById("winner").innerText="All good, Player2's turn";
                document.getElementById(sn).classList.remove("p");
                    }
                else if(player=="player2" && counter1!=counter2)
                {
                document.getElementById("winner").innerText="All good, Player1's turn";
                document.getElementById(sn).classList.remove("q");
                }
                clearInterval(myy);
                nextstepover=1;
                
                }
                console.log("i="+i);
                console.log("f="+f);
                

            }, 670-fast);

           
        //     $("#g").fadeIn(900).fadeOut(900).fadeIn(900);
         
        //  $("#g").fadeIn(900).fadeOut(900).fadeIn(900);
        
         

     }


     function check(player){
        if(player="player2" && counter2==counter1)
        {
            document.getElementById(counter1).classList.remove("p");
            playsound("cut");
            document.getElementsByClassName("start1")[0].classList.remove("hide");
            chance=2;
            first1=0;
            document.getElementById("winner").innerText="All good, Player2's turn";
        }


        else if(player="player1" && counter1==counter2)
        {
            document.getElementById(counter2).classList.remove("q");
            document.getElementsByClassName("start2")[0].classList.remove("hide");
            chance=1;
            playSound("cut");
            first2=0;
            document.getElementById("winner").innerText="All good, Player1's turn";
        }


     }


     function playsound(a){
        var audio = new Audio(a+".mp3");
        audio.play();
     }
