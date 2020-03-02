//create your own adventure app
const buttonChoice1 = document.getElementById('buttonChoice1')

function startGame (){
    displayIntros()
    displayButtons1()
    //display button 1 texts
}


function displayIntros (){
    let myForm = document.getElementById('myForm')
    let scifiIntro = document.getElementById('scifiIntro')
    let prehistoricIntro = document.getElementById('prehistoricIntro')
    let magicIntro = document.getElementById('magicIntro')

    let theValue1 = myForm.genre.value;

    console.log(theValue1)


// [ scifiIntro, prehistoricIntro, magicIntro ].forEach(intro => intro.classList.add("hidden"));


    switch (theValue1) {
        case "scifiIntro":
            scifiIntro.classList.remove("hidden");
            prehistoricIntro.classList.add("hidden");
            magicIntro.classList.add("hidden");
            break;
        case "prehistoricIntro":
            prehistoricIntro.classList.remove("hidden");
            scifiIntro.classList.add("hidden");
            magicIntro.classList.add("hidden");
            break;
        case "magicIntro":
            magicIntro.classList.remove("hidden");
            scifiIntro.classList.add("hidden");
            prehistoricIntro.classList.add("hidden");
            break;
        default: 
           console.log("error")
            break;
    }
}



function displayChoice1 (event){
    let scifi1 = document.getElementById('scifi1')
    let scifi2 = document.getElementById('scifi2')
    let scifi3 = document.getElementById('scifi3')
    let theValue2 = event.target.value

    switch (theValue2) {
        case "safe":
             scifi1.classList.remove("hidden");
             scifi2.classList.add("hidden");
             scifi3.classList.add("hidden");
            break;
        case "neutral":
            scifi2.classList.remove("hidden");
            scifi1.classList.add("hidden");
            scifi3.classList.add("hidden");
            break;
        case "risky":
            scifi3.classList.remove("hidden");
            scifi1.classList.add("hidden");
            scifi2.classList.add("hidden");
            break;
        default:
            console.log("error")
            break;
    }
}

function displayButtons1 (){
    let choice1Value = buttonChoice1.button1.forEach(element => element.classList.remove("hidden"))
}

function displayButtons1Text (event){
    let scifiSafe1 = document.getElementById('scifiSafe1')
    let scifiNeutral1 = document.getElementById('scifiNeutral1')
    let scifiRisk1 = document.getElementById('scifiRisk1')
    
    //include something that checks which intro was selected 

    let text1 = event.target.value
    
    switch(text1) {
        case "safe":
            scifiSafe1.classList.remove("hidden")
            scifiNeutral1.classList.add("hidden")
            scifiRisk1.classList.add("hidden")
            break;
        case "neutral":
            scifiNeutral1.classList.remove("hidden")
            scifiSafe1.classList.add("hidden")
            scifiRisk1.classList.add("hidden")
            break;
        case "risk":
            scifiRisk1.classList.remove("hidden")
            scifiSafe1.classList.add("hidden")
            scifiNeutral1.classList.add("hidden")
            break;
    }

}


//answers assigned to buttons should match the genre selected via radio
//depending on which path you choose, different answer choices-- that are related to the choice-- should appear
//3 rounds of button choices
//reset button
//background imagery changes depending on which genre and routes you choose