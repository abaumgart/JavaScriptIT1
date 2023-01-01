// JavaScript Document

// Event Handler per JavaScript definieren

function init()
	{
		const elementA = document.getElementById('seiteA');
		const elementB = document.getElementById('seiteB');
		
		elementA.addEventListener('input',calculate);
		elementB.addEventListener('input',calculate);
		elementA.addEventListener('input',draw);
		elementB.addEventListener('input',draw);	
	}
document.addEventListener('DOMContentLoaded', init);

function draw() {
	const elementA = document.getElementById('seiteA').value;
	const elementB = document.getElementById('seiteB').value;
	
  	const svg = document.getElementById('svg');
	const rechteck = svg.getElementById('rechteck');
	
	rechteck.setAttribute("x","0");
	rechteck.setAttribute("y","0");
	rechteck.setAttribute("width", elementA);
	rechteck.setAttribute("height",elementB);
	rechteck.setAttribute("fill","red");	
}

function calculate()
{
	let seiteA=document.getElementById('seiteA'); // Datentyp wird automatisch zugewiesen
	let seiteB=document.getElementById('seiteB');
	let flaeche = round(seiteA.value*seiteB.value,0);
	let umfang = round(((2*seiteA.value)+(2*seiteB.value)),0);
	let diagonale = round(Math.sqrt(Math.pow(seiteA.value,2)+Math.pow(seiteB.value,2)),1);	
	ergebnisAusgeben('flaeche', flaeche);
	ergebnisAusgeben('diagonale', diagonale);
	ergebnisAusgeben('umfang', umfang);	
	
}

function ergebnisAusgeben(elemId, wert){
	let elem = document.getElementById(`${elemId}`);
	let anzahlZeichen = elemId.length;
	
	let label = elemId.substr(0,anzahlZeichen);
    let text = label[0].toLocaleUpperCase()+label.slice(1)+': '+wert; 
    elem.textContent = text;
	
}

function round(ergebnis, nachKommaStelle)
{	
	const gerundetesErgebnis = ergebnis.toFixed(nachKommaStelle);
	return gerundetesErgebnis;
}