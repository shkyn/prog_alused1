let küsib
küsib = prompt("Sisestage kirja suurus(MB): ")

let pealkiri
pealkiri = prompt("Sisestage kirja pealkiri: ")

let kaasas
kaasas = prompt("Kas kirjaga on kaasas fail (jah/ei): ")

if (pealkiri === "") {
	console.log("Kiri on spämm")
} else if (kaasas === "jah", küsib >= 1) {
	console.log("Kiri on spämm")
}else {console.log("Kiri ei ole spämm")}
