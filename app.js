let rockImage= document.querySelector("#rockImage");
let paperImage= document.querySelector("#paperImage");
let scissorImage= document.querySelector("#scissorImage");
let myPlayImage= document.querySelector("#myPlayImage");
let compPlayImage= document.querySelector("#compPlayImage");
let userScore= document.querySelector("#userScore");
let compScore= document.querySelector("#compScore");
let displayDrawText= document.querySelector("#displayDrawText");

let currentUserScore= 0;
let currentCompScore= 0;

let compChoices= () => {
    let compOptions= ["rock", "paper", "scissor"];
    let choice= Math.floor(Math.random() *3);
    return compOptions[choice];
} 

rockImage.addEventListener("click", () => {
    myPlayImage.setAttribute("src", "my_rock.png");
    setTimeout(() => {
        let compInput= compChoices();
        if(compInput==="rock") {
            compPlayImage.setAttribute("src", "comp_rock.png");
            displayDrawText.innerText="Draw!...";
        } else if(compInput==="paper") {
            compPlayImage.setAttribute("src", "comp_paper.png");
            currentCompScore++;
            displayDrawText.innerText="You Lost :)";
            compScore.innerText=currentCompScore;
        } else {
            compPlayImage.setAttribute("src", "comp_sci.png");
            currentUserScore++;
            displayDrawText.innerText="You Win...!";
            userScore.innerText=currentUserScore;
        }
        console.log("Computer choice :",compInput);
    }, 0.5*1000);
});
paperImage.addEventListener("click", () => {
    myPlayImage.setAttribute("src", "my_paper.png");
    setTimeout(() => {
        let compInput= compChoices();
        if(compInput==="rock") {
            compPlayImage.setAttribute("src", "comp_rock.png");
            currentUserScore++;
            displayDrawText.innerText="You Win...!";
            userScore.innerText=currentUserScore;
        } else if(compInput==="paper") {
            compPlayImage.setAttribute("src", "comp_paper.png");
            displayDrawText.innerText="Draw!...";
        } else {
            compPlayImage.setAttribute("src", "comp_sci.png");
            currentCompScore++;
            displayDrawText.innerText="You Lost :)";
            compScore.innerText=currentCompScore;
        }    
        console.log("Computer choice :",compInput);
    }, 0.5*1000);
});
scissorImage.addEventListener("click", () => {
    myPlayImage.setAttribute("src", "my_sci.png");
    setTimeout(() => {
        let compInput= compChoices();
        if(compInput==="rock") {
            compPlayImage.setAttribute("src", "comp_rock.png");
            currentCompScore++;
            displayDrawText.innerText="You Lost :)";
            compScore.innerText=currentCompScore;
        } else if(compInput==="paper") {
            compPlayImage.setAttribute("src", "comp_paper.png");
            currentUserScore++;
            displayDrawText.innerText="You Win...!";
            userScore.innerText=currentUserScore;
        } else {
            compPlayImage.setAttribute("src", "comp_sci.png");
            displayDrawText.innerText="Draw!...";
        }
        console.log("Computer choice :",compInput);
    }, 0.5*1000);
});
