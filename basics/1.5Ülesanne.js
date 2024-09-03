let ained
ained = prompt("Sisestage ainepunktide arv: ")

let nadal
nadal = prompt("Sisestage nädalate arv: ")

let ainepunkt
ainepunkt = ained * 26

let jaga
jaga = ainepunkt / 10

console.log("Sisestage ainepunktide arv: ", ained)
console.log("Sisestage nädalate arv: ", nadal)
console.log(Math.round(jaga))
