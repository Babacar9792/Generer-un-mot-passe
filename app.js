const nbreCaracter = document.querySelector("#nbreCaracter");
const btnMdp = document.querySelector("#btnMdp");
const majuscules = document.querySelector("#majuscules");
const minuscules = document.querySelector("#minuscules");
const nombre = document.querySelector("#nombre");
const caracSpeciaux = document.querySelector("#caracSpeciaux");
const mdp = document.querySelector("#mdp");
const copy = document.querySelector(".fa-copy");
const eye = document.querySelector(".fa-eye")
const Majuscules = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const Minuscules = "azertyuiopqsdfghjklmwxcvbn";
const Nombres = "1234567890";
const caractereSpeciaux = "é#!ù%*$à@=+<>^-"

copy.style.display = "none";
copy.addEventListener("click",()=>
{
    console.log("copie")
    // console.log(mdp.exeCommand('copy'));
})
eye.addEventListener("click",()=>
{
    if(mdp.type === "text")
    {
        mdp.type = "password";
    }
    else 
    {
        mdp.type = "text";
    }
})

btnMdp.addEventListener("click", () => {
    if (nbreCaracter.value == '') {
        console.log("Veuiller choisir la longueur du mot de passe")
    }
    else {
        let p = 0;
        let numberhecked = document.querySelectorAll(".input")
        numberhecked.forEach(element => {
            p = p + ischecked(element);

        });
        if(p <= parseInt(nbreCaracter.value)){
        let tabMod = [];
        // console.log(p)
        if (p !== 0) {
            let longueur = Math.floor(parseInt(nbreCaracter.value) / p)
            //console.log(longueur)
            if (majuscules.checked) {
              //  console.log("majuscule");
                for (let i = 0; i < longueur; i++) {

                    tabMod.push(Majuscules[Math.floor(Math.random() * Majuscules.length)])

                }
                

            }
            if (minuscules.checked) {
                for (let i = 0; i < longueur; i++) {

                    tabMod.push(Minuscules[Math.floor(Math.random() * Minuscules.length)])
                }
                
               // console.log("miniscule")
            } if (nombre.checked) {
                for (let i = 0; i < longueur; i++) {

                    tabMod.push(Nombres[Math.floor(Math.random() * Nombres.length)])
                }
                
               // console.log("nombre")
            } if (caracSpeciaux.checked) {
                for (let i = 0; i < longueur; i++) {


                    tabMod.push(caractereSpeciaux[Math.floor(Math.random() * caractereSpeciaux.length)])
                }
                //console.log("caracspeciaux")
            }


            let passWord = "";
            if(tabMod.length < parseInt(nbreCaracter.value))
            {
                let diff = -tabMod.length + parseInt(nbreCaracter.value)
                for (let i = 0; i < diff ; i++) {
                passWord+= tabMod[Math.floor(Math.random()*tabMod.length)];
                    
                    
                }
                let t = shuffle(tabMod)
                for (let i = 0; i < t.length; i++) {
                    
                    passWord+=t[i];
                }
                
                
            }
            else if(tabMod.length > parseInt(nbreCaracter.value))
            {
                //passWord+= tabMod[Math.floor(Math.random()*tabMod.length)];
                let difff = tabMod.length - parseInt(nbreCaracter.value)
                let t = shuffle(tabMod)
                for (let i = 0; i < t.length -difff; i++) {
                    
                    passWord+=t[i];
                }
                
                
            }
            else {
                let t = shuffle(tabMod)
                for (let i = 0; i < t.length ; i++) {
                    
                    passWord+=t[i];
                }
            }
            
           mdp.value = passWord;
           copy.style.display = "block";
        }

        else {
            console.log("veuiller choisir au moins un critere")
            copy.style.display = "none";
        }
    }
        else 
        {
            console.log("Le nombre de caractère doit etre superieur au nombre de checkbox choisi");
        }
    }


})


function ischecked(checkbox) {
    if (checkbox.checked) {
        return 1
    }
    return 0;


}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
