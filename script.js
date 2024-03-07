const randomContent = [
    "You will have to wait here for eternity because your internet is so slow. MWAHAHAHAHAHAHAHA!!!!",
    "Loading... Please wait patiently.",
    "Calculating the meaning of life... Just kidding, it's just loading.",
    "Counting down the seconds until your impatience grows... 5... 4... 3... 2... 1... Just kidding, it's still loading."
  ];
  function changeText() {
    const loadingText = document.querySelector('.loading-text');
    const randomIndex = Math.floor(Math.random() * randomContent.length);
    loadingText.style.opacity = 0;
    setTimeout(() => {
      loadingText.textContent = randomContent[randomIndex];
      loadingText.style.opacity = 1;
    }, 1000);
  }
  setInterval(changeText, 2000);
  
  setTimeout(() => {
    document.querySelector('.loading-container').style.display = 'none';
    document.querySelector('header').style.display = 'block';
    document.querySelector('.Main').style.display = 'block';
    document.querySelector('Body').style.backgroundImage = "url('Stage.jpeg')";
    document.querySelector("audio").pause();
    document.querySelector("audio").muted = true;
  }, 15000);
document.querySelector('.Main').style.backgroundColor = "transparent";

//For the easter egg

let sentences = [
"Life is like riding a(n) {1}. To keep your {0} balance, you must keep {2}ing.",
"To be or not to be {2}ing is the {0} {1}",
"Try not to become a man of success but rather try to become a(n) {0} {1} that is always {2}ing",
"{1} should be made as {0} as possible. But no simpler... {2} it!",
"Logic will get you from A to B. {0} {1}(s) will {2} you everywhere!",
"Be the {1} you that you wish to {2} in the {0} world."
];
let quotes = [
"Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstien", 
"To be or not to be is the question - William Shakespere",
"Try not to become a man of sucsess but rather a man of value - Albert Einstien",
"Everything should be made as simple as possible, but no simpler - Albert Einstien",
"Logic will get you from A to B, imagination will take you everywhere - Albert Einstien",
"Be the change you that you wish to see in the world - Mahatma Gandhi"
];

function handleIt() {
  
  var r = Math.floor(Math.random() * 6);
  var adjective = document.getElementById("adjective");
  var noun = document.getElementById("noun");
  var verb = document.getElementById("verb");

  var chosen = sentences[r];
  var updAdj =chosen.replace("{0}", adjective.value); 
  var updNoun = updAdj.replace("{1}", noun.value); 
  var updVrb = updNoun.replace("{2}", verb.value);
  
  document.getElementById("quote").innerHTML = "<b>Original Quote:</b> <i>" + quotes[r] + "</i>";
  document.getElementById("sentence").innerHTML = "<b>Your Madlib: </b>" + updVrb; 
  return false;
  
}
function reset() {

	document.getElementById("adjective").value = "";
	document.getElementById("noun").value = "";
	document.getElementById("verb").value = "";
	document.getElementById("sentence").innerHTML="";
	document.getElementById("quote").innerHTML="";
}
if(document.getElementById("adjective").value == 'scrumptious'){
	document.querySelector(".Button_Especial").style.display = "block";
}
