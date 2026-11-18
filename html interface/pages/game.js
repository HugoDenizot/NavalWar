





function tirer(){
  let tableauAdversaire = document.getElementById("buttonsContainerad");
  let adversaireButtons = tableauAdversaire.getElementsByTagName("button");
  for (let i = 0; i < adversaireButtons.length; i++){
      adversaireButtons[i].onclick = function() {
          this.style.backgroundColor = "red";
         
      }
    }
}




const monBouton = document.getElementById('monBouton');
const monAudio = document.getElementById('monAudio');

monBouton.addEventListener('click', function() {
  monAudio.play();
});
