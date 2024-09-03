let iste
iste = prompt("Kas soovite istekohta ise valida? Sisestage (ise) või (loos)")

let ise

let loos
loos = Math.random()

if (loos < 1/3) {
	console.log("Istekoht loositi. Aknakoht")
} else { console.log("Istekoht loositi. Vahekaigukoht")}

let muu

if (iste === "ise") {
	ise = prompt("Kas soovite istuda akna ääres (aken) voi (muu)")
} if (ise === "aken") {
	console.log("Valisite aken. aknakoht")
} else if (ise === "muu") {
	console.log("Valisite muu. Vahekaigukoht")
} else if (iste === "loos") {
	console.log(loos)
}
