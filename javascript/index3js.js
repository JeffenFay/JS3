var firstname = prompt("Tape ton prénom, stp :");
//Fonction qui vérifie et affiche le résultat
function verifName(saisie){
  //Expression régulière de vérification
  const regex =  /^[a-zA-ZäãåçéèêëíìîïñóòôöõúùûüÿÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜŸ-]+$/;
  //Condition de saisie
  if(!regex.test(saisie)||saisie==null){
    //PAS BON
    alert("C'est pas un prénom ça !");
    saisie = prompt("Tape encore ton prénom, stp :");
    verifName(saisie );
  }else{
    //BON
    alert("Bonjour, "+saisie+" !");
  }
};
//exécution de la fonction
verifName(firstname);
