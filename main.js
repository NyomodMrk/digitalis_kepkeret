import './style.css'

document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("url").addEventListener("change", kepkeretKeszit);
  document.getElementById("kep_szelessege").addEventListener("input",kepkeretKeszit);
  document.getElementById("kepkeret_vastagsaga").addEventListener("input", kepkeretKeszit);
  document.getElementById("kepkeret_szine").addEventListener("input", kepkeretKeszit);
}

function kepkeretKeszit() {
  //Értékek kiolvasása a beviteli mezőkből
  const url = document.getElementById("url").value;
  const kepSzelessege = document.getElementById("kep_szelessege").value;
  const kepKeretVastagsaga = document.getElementById("kepkeret_vastagsaga").value;
  const kepkeretSzine = document.getElementById("kepkeret_szine").value;
  //Kép tulajdonságainak szerkesztése
  const kep = document.getElementById("kep");
  kep.src = url;
  kep.style.width = kepSzelessege + "px";
  kep.style.border =`${kepKeretVastagsaga}px solid ${kepkeretSzine}`; 
}
