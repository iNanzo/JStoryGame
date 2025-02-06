updateName();

function questStart() {
    let quest = prompt(introText);

    if (quest.toUpperCase() === "Y") {
        alert(path1Text1);
        secondDecision();  // Next decision point
    } else if (quest.toUpperCase() === "N") {
        alert(path1Text2);
        thirdDecision();  // Alternative path decision
    } else {
        alert("Uncouth.");
        questStart(); // Repeats the first prompt if input is invalid
    }
}

function secondDecision() {
    let choice = prompt(introText2);

    if (choice.toUpperCase() === "Y") {
        alert(path2Text1);
        thirdDecision();
    } else if (choice.toUpperCase() === "N") {
        alert(path2Text2);
        thirdDecision();
    } else {
        alert("Uncouth.");
        secondDecision();
    }
}

function thirdDecision() {
    let finalChoice = prompt(introText3);

    if (finalChoice.toUpperCase() === "STAND") {
        alert(path3Text1);
    } else if (finalChoice.toUpperCase() === "FLEE") {
        alert(path3Text2);
    } else {
        alert("Uncouth.");
        thirdDecision();
    }
}

questStart();
