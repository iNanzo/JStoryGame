let playerName = "";
let introText = "Before you, a blade sunken within a bonfire. Will you take it? (Y/N)";

let path1Text1 = "";
let path1Text2 = ""; 

function updateName() {
    playerName = prompt("Tell me your name.");
    alert(`Welcome, ${playerName}`);

    path1Text1 = `Now set forth, ${playerName}, and make this world yours.`;
    path1Text2 = `Then return from whence you came, ${playerName}.`; 
}

let introText2 = "You grasp the blade, and the withering flames whisper their secrets to you. Do you listen? (Y/N)";
let path2Text1 = "The whispers warn you of coming danger, preparing you for what's to come.";
let path2Text2 = "You suppress the whispers and press forward, unshaken.";

let introText3 = "A hooded figure blocks your path. Will you stand your ground or flee? (Stand/Flee)";
let path3Text1 = "With or without the blade, you stand firm and prepare for battle.";
let path3Text2 = "You turn and vanish into the darkness, your fate uncertain.";

console.log(path1Text1);
console.log(path1Text2);
