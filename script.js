let krastine1 = prompt("Įveskite trikampio stationio ilgį");
let krastine2 = prompt("Įveskite trikampio įstrižainės ilgį");
let krastine3 = statinioRadimas(krastine1, krastine2);
console.log("Statinio ilgis yra:" + krastine3);

function statinioRadimas(a, b){
    return Math.sqrt(pakeltiKvadratu(b) - pakeltiKvadratu(a));
}

function pakeltiKvadratu(a){
    return a * a;
}