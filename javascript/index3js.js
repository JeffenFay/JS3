var firstname = prompt("Tape ton prénom, stp :");
function verifName(saisie){
     var regex = new RegExp("[a-zA-Z-éèùÿïç]","g");
   if(!regex.test(saisie)|saisie==null){
     alert("C'est pas un prénom ça !");
     var saisie2 = prompt("Tape encore ton prénom, stp :");
     verifName(saisie2);
   }else{
     alert("Bonjour, "+saisie+" !");
   }
};
verifName(firstname);
