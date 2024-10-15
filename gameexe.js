
let input=document.getElementById("input");
function exe()
{
    if(input.value)
    {
        let playerOne=input.value.trim().toLowerCase();
        if(playerOne=="rock" || playerOne=="paper" || playerOne=="scissors")
        {
            let computerChoice=Math.floor(Math.random()*3+1);
            let computer= computerChoice===1 ?"rock": computerChoice===2?"paper":"scissors";
            if(computer===playerOne || playerOne==="rock"&&computer==="paper" || playerOne==="paper"&&computer==="scissors" || playerOne==="scissors"&&computer==="rock")
            {
                result="Computer Wins!!!";
            }
            else
            {
                result="Player Wins!!!";
            }    
        }
        else{
            result="INVALID INPUT";
        }
        document.getElementById("demo").innerHTML=result;
    }
}