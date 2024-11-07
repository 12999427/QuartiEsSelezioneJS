function conferma () {
    let imm = document.querySelector("img");
    let Luogo = document.querySelector("#TendinaLuogo").value;
    let Colore = document.querySelector("input[name='Colorazione']:checked").value;
    
    switch (Luogo) {
        case "Mare":
            imm.src = Colore=="Colori" ? "../img/Mare.jpg"  : "../img/MareG.jpg";
            break;
        case "Montagna":
            imm.src = Colore=="Colori" ? "../img/Montagna.jpg"  : "../img/MontagnaG.jpg";
            break;
        case "Città":
            imm.src = Colore=="Colori" ? "../img/Città.jpg"  : "../img/CittàG.jpg";
            break;
    }
    imm.style.display = "block";
}

function cancella (){
    let imm = document.querySelector("img");
    imm.style.display = "none";
    imm.src="";
}