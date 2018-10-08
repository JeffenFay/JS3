var firstname = prompt("Tape ton prénom, stp :");
function verifName(saisie){
     const regex =  /^[a-zA-ZäãåçéèêëíìîïñóòôöõúùûüÿÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜŸ-]+$/;
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
verifName(firstname);
