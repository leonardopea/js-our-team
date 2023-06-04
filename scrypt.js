// MILESTONE 0: CREAZIONE DELL'ARRAY OBJECT

let team = [

    {
    "name" : "Wayne Barnett",
    "role" : "Founder & CEO",
    "image" : "wayne-barnett-founder-ceo.jpg",
    },

    {
    "name" : "Angela Caroll",
    "role" : "Chief Editor",
    "image" : "angela-caroll-chief-editor.jpg",
    },

    {
    "name" : "Walter Gordon",
    "role" : "Office Manager",
    "image" : "walter-gordon-office-manager.jpg",
    },
    
    {
    "name" : "Angela Lopez",
    "role" : "Social Media Manager",
    "image" : "angela-lopez-social-media-manager.jpg",
    },
    {
    "name" : "Scott Estrada",
    "role" : "Developer",
    "image" : "scott-estrada-developer.jpg",
    },
    
    {
    "name" : "Barbara Ramos",
    "role" : "Graphic Designer",
    "image" : "barbara-ramos-graphic-designer.jpg",
    }   



]   




// MILESTONE 1: STAMPA IN CONSOLE

for(let i=0 ; i<team.length; i++){

    console.log(team[i].name);

    console.log(team[i].role);

    console.log(team[i].image);

}



// MILESTONE 2: STAMPA IN DOM   

let squadra =''

squadra = document.getElementById('team');



for(let i=0 ; i<team.length; i++){

    squadra.innerHTML += team[i].name +`<br>` ;
    squadra.innerHTML += team[i].role +`<br>`;
    squadra.innerHTML += `<img src= "./img/${team[i].image}"> +<br>`    ;  // BONUS 1 : TRASFORMA LE IMMAGINI STRINGA IN VERE FOTO

    

}

