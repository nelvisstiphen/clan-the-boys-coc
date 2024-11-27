const contenedorUser = document.querySelector(".container-user");

const fragment = document.createDocumentFragment();
const infieles = document.getElementById("infieles");
const template = document.querySelector(".template-players").content;
const titulo = document.querySelector(".titulo");
const iconClan = document.querySelectorAll(".icon-clan");

const nombreClan = document.querySelector(".nombre-clan");
const ligaClan = document.querySelector(".liga-clan");
const miembrosClan = document.querySelector(".miembros-clan");
const guerrasGanadas = document.querySelector(".ganados-clan");
const guerrasPerdidas = document.querySelector(".perdidas-clan");
const guerrasEmpatadas = document.querySelector(".empates-clan");
const totalGuerras = document.querySelector(".total-guerras-clan");

const iconClan1 = document.querySelector(".icon-clan1");
const iconClan2 = document.querySelector(".icon-clan2");
const iconClan3 = document.querySelector(".icon-clan3");

/* fetch("http://localhost:5000/player")
  .then((res) => res.json())
  .then((data) => {
    saludarPlayer(data);
    console.log(data);
  }); */

/* const saludarPlayer = (data) => {
  //nombre.textContent = `Hola ${data.name} tu TH es lvl ${data.townHallLevel} y tu clan se llama ${data.clan.name}`;
}; */

fetch("http://localhost:5000/clan")
  .then((res) => res.json())
  .then((data) => {
    saludarClan(data);
    console.log(data);
    titulo.textContent = data.name;
    iconClan.forEach((el) => el.setAttribute("src", data.badgeUrls.small));
    datosClan(data);
    //ligaClan.textContent = data.
    //datosClan.appendChild()
  });

const datosClan = (data) => {
  nombreClan.textContent = data.name;
  ligaClan.textContent = data.warLeague.name;
  miembrosClan.textContent = data.members;
  guerrasGanadas.textContent = data.warWins;
  guerrasPerdidas.textContent = data.warLosses;
  guerrasEmpatadas.textContent = data.warTies;
  let guerrasTotales = data.warWins + data.warLosses + data.warTies;
  totalGuerras.textContent = guerrasTotales;
  iconClan1.setAttribute("src", data.labels[0].iconUrls.small);
  iconClan2.setAttribute("src", data.labels[1].iconUrls.small);
  iconClan3.setAttribute("src", data.labels[2].iconUrls.small);
};

const saludarClan = (data) => {
  data = Object.values(data.memberList);
  data.forEach((el) => {
    //console.log(el.name);
    template.querySelector("img").setAttribute("src", el.league.iconUrls.small);
    //console.log(el.league.iconUrls.small);
    template.querySelector(".nombre").textContent = el.name;
    template.querySelector(".rango").textContent = el.role;
    template.querySelector(".th").textContent = el.townHallLevel;
    template.querySelector(".trofeos").textContent = el.trophies;

    let clone = document.importNode(template, true);
    fragment.appendChild(clone);
  });
  infieles.appendChild(fragment);
  //console.log(data.memberList);
};

//#GQR2UPLQO
