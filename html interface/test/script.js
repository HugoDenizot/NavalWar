



function fcttest(){
  document.getElementById("texte").innerHTML = "Bonjour, vous avez cliqué sur le bouton !";

}


function fctinit(){
  var size =9;
  var map=[]
  var i=0;
  var j=0;
  document.getElementById("boat").innerHTML ="";
  for (i=0;i<size;i++){
      for (j=0;j<size;j++){
              document.getElementById("boat").innerHTML +=" bateau";
            }

      document.getElementById("boat").innerHTML +="\n";     
      }
}




