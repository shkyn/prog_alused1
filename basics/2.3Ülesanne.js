let vanus
vanus = prompt("Sisestage vanus: ")

let sugu
sugu = prompt("Sisestage sugu: ")
sugu = sugu.toUpperCase()


let pulsisagedus

let pulss
if (sugu === "M") {
	pulss = 220 - vanus
} else if (sugu === "N") {
	pulss = 206 - vanus * 0.88
}

let treening
treening = prompt("Sisestage, 1 - tervisetreening:, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening: ")

if (treening === "1") {
    pulsisagedus = Math.round(pulss * 0.5) + " - " + Math.round(pulss * 0.7)
} else if (treening === "2") {
    pulsisagedus = Math.round(pulss * 0.7) + " - " + Math.round(pulss * 0.8)
} else if (treening === "3") {
    pulsisagedus = Math.round(pulss * 0.8) + " - " + Math.round(pulss * 0.87)
} else {
    pulsisagedus = "Vigane treeningu valik"
}

console.log("Teie pulsisagedus on: " + pulsisagedus)
