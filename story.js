playerName = prompt("Tell me your name."); 
alert(`Welcome ${playerName}`);

function questStart() {
    let quest = prompt(introText);

    if(quest.toUpperCase() === "Y"){
        alert(`Now set forth, ${playerName}, and make this world yours.`);
    }else if(quest.toUpperCase() === "N") {
        alert(`Then return from whence you came, ${playerName}.`);
    }else{
        alert("Uncouth.");
        questStart();
    }
}

questStart();
