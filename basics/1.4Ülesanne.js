let nimi;
nimi = prompt("Sisestage oma nimi: ");

let lubatud;
lubatud = prompt("Sisestage lubatud kiirus: ");
lubatud = Number(lubatud);  // Muudame sisendi numbriks

let kiirus;
kiirus = prompt("Sisestage tegelik kiirus: ");
kiirus = Number(kiirus);  // Muudame sisendi numbriks

let trahv;
if (kiirus <= lubatud) {
    trahv = 0;
} else {
    trahv = kiirus - lubatud;
}

let summa;
summa = trahv * 3;

console.log("Sisestage oma nimi: ", nimi);
console.log("Sisestage lubatud kiirus: ", lubatud);
console.log("Sisestage tegelik kiirus: ", kiirus);
console.log("Teie trahv: ", summa);
