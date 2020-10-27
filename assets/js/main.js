// Nettobetrag * 0.19 = Bruttobetrag
// Bruttobetrag / 0.19 = Nettobetrag
// Nettobetrag * 0,07 = Brutto
// Brutto / 0,07 = Netto
// Bruttobetrag – Nettobetrag = Mehrwertsteuerbetrag

// steuer hinzufügen
// mehrwertsteuerbetrag = brutto - input
// brutto = input * 0.19

// steuer abziehen 
// 

 // steuer abziehen

function steuerRechner() {
    event.preventDefault()
    let steuerSub = document.getElementById("steuerSub").checked
    let steuerAdd = document.getElementById("steuerAdd").checked // steuer hinzufügen
    let neunzehnProzent = document.getElementById("neunzehn").checked  // radio button 19% 
    let siebenProzent = document.getElementById("sieben").checked // radio button 7%
    let nettoInput = parseInt(document.getElementById("numInput").value) // inputfeld für betrag
    
    if ((steuerAdd == true) && (neunzehnProzent == true)) {
        let bruttobetrag = nettoInput * 0.19
        let mehrwertsteuerbetrag = (nettoInput + bruttobetrag) 
        document.getElementById("resultOne").innerHTML = bruttobetrag.toFixed(2) + "€"
        document.getElementById("resultTwo").innerHTML = mehrwertsteuerbetrag.toFixed(2) + "€"

    } else if ((steuerAdd == true) && (siebenProzent == true)) {
        let bruttobetragSieben = nettoInput * 0.07
        let mehrwertsteuerbetrag = (nettoInput + bruttobetragSieben)
        document.getElementById("resultOne").innerHTML = bruttobetragSieben.toFixed(2) + "€"
        document.getElementById("resultTwo").innerHTML = mehrwertsteuerbetrag.toFixed(2) + "€"
        
    } else if ((steuerSub == true) && (neunzehnProzent == true)) {
        let bruttobetrag = nettoInput * 0.19
        let mehrwertsteuerbetrag = (nettoInput - bruttobetrag) 
        document.getElementById("resultOne").innerHTML = bruttobetrag.toFixed(2) + "€"
        document.getElementById("resultTwo").innerHTML = mehrwertsteuerbetrag.toFixed(2) + "€"

    } else if ((steuerSub == true) && (siebenProzent == true)) {
        let bruttobetragSieben = nettoInput * 0.07
        let mehrwertsteuerbetrag = (nettoInput - bruttobetragSieben)
        document.getElementById("resultOne").innerHTML = bruttobetragSieben.toFixed(2) + "€"
        document.getElementById("resultTwo").innerHTML = mehrwertsteuerbetrag.toFixed(2) + "€"

    } else {
        document.getElementById("resultOne").innerHTML = "Bitte gib etwas ein" 
        document.getElementById("resultTwo").innerHTML = "Bitte gib etwas ein"
    }
}


