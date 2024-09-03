let ounteArv = 14

let poiss = prompt("Mitu pöialpoissi tahab õunu?: ")
for (let i = 0; i < poiss; i++) {
	let poisSaiOunu = Math.round((Math.random() * 2) + 1)
  ounteArv -= poisSaiOunu
  console.log(ounteArv)
	//console.log(poiss = Math.floor(Math.random() * 2) + 1)
}
console.log("lumivalgekesele jäi " + ounteArv + " õuna")

