function conferma () {
    let Stelle = document.querySelector("#TendinaStelle").value;
    let Consiglio = document.querySelector("input[name='Consiglio']:checked").value == "Si";
    let messaggio1 = Consiglio ? "Grazie per consigliare questo luogo :(" : "Ci spiace che non consigli questo luogo ;(";
    let messaggio2;
    switch (Stelle){
        case "1":
            messaggio2 = Consiglio ?
            "Ci dispiace che l'esperienza non sia stata perfetta, ma apprezziamo che comunque ci consiglieresti. Stiamo lavorando per migliorare."
            : "Ci dispiace per l'esperienza. Non consigli la nostra piattaforma, ma il tuo feedback è utile per migliorare.";
            break;
        case "2":
            messaggio2 = Consiglio ?
            "Ci scusiamo per i problemi riscontrati. Siamo contenti che comunque ci consiglieresti. Lavoreremo per migliorare!"
            : "Ci scusiamo per i disagi. Non ci consigli, ma apprezziamo il tuo feedback per migliorare."
            break;
        case "3":
            messaggio2 = Consiglio ?
            "Grazie per il feedback. Anche se la tua esperienza è stata nella media, siamo felici che ci consiglieresti. Cercheremo di migliorare!"
            : "Grazie per il feedback. La tua esperienza è stata nella media, e ci dispiace non ci consiglieresti. Cercheremo di fare meglio!"
            break;
        case "4":
            messaggio2 = Consiglio ?
            "Grazie per la valutazione! Siamo felici che tu ci consiglieresti. Faremo del nostro meglio per ottenere una valutazione a 5 stelle."
            : "Grazie per la valutazione positiva! Siamo felici che tu sia soddisfatto, anche se non ci consigli ancora. Ti invitiamo a darci ulteriori suggerimenti!"
            break;
        case "5":
            messaggio2 = Consiglio ?
            "Grazie mille per le 5 stelle! Siamo felici che ci consiglieresti. Il tuo feedback ci motiva a continuare a migliorare!"
            : "Grazie per le 5 stelle! Anche se non ci consigli ancora, siamo felici che la tua esperienza sia stata positiva!"
            break;
    }
    document.getElementById("output").innerText = `${messaggio1} \n ${messaggio2}`;
}