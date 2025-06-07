const elenco = [
  { nome: "Marco", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Tommaso", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Giovanni", cognome: "Pigani", tavolo: "Trackmania" },
  { nome: "Elena", cognome: "Govetto", tavolo: "Trackmania" },
  { nome: "Marco", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Didier", cognome: "Pasini", tavolo: "Trackmania" },
  { nome: "Alessia", cognome: "...", tavolo: "Trackmania" },
  { nome: "Michele", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Elisabetta", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Emanuele", cognome: "Pigani", tavolo: "Warcraft III" },
  { nome: "Benedetta", cognome: "Pigani", tavolo: "Warcraft III" },
  
  { nome: "Luca", cognome: "Bianchi", tavolo: "234-567-8901" },
  { nome: "Anna", cognome: "Verdi", tavolo: "345-678-9012" },
  { nome: "Giulia", cognome: "Rossi", tavolo: "456-789-0123" },
  { nome: "Marco", cognome: "Neri", tavolo: "567-890-1234" },
  { nome: "Sara", cognome: "Bruni", tavolo: "678-901-2345" },
  { nome: "Paolo", cognome: "Gialli", tavolo: "789-012-3456" }
];

function filtraElenco() {
  const input = document.getElementById("ricerca").value.trim().toLowerCase();
  const tabella = document.getElementById("risultati");
  tabella.innerHTML = "";

  if (input === "") {
    return;
  }

  const risultati = elenco.filter(persona => {
    const fullName = `${persona.nome} ${persona.cognome}`.toLowerCase();
    const invertedName = `${persona.cognome} ${persona.nome}`.toLowerCase();
    const tavolo = persona.tavolo.toLowerCase();
    return (
      fullName.includes(input) ||
      invertedName.includes(input) ||
      tavolo.includes(input)
    );
  }).slice(0, 10);

  risultati.forEach(persona => {
    const riga = document.createElement("tr");

    const cellaCognome = document.createElement("td");
    cellaCognome.textContent = persona.cognome;
    riga.appendChild(cellaCognome);

    const cellaNome = document.createElement("td");
    cellaNome.textContent = persona.nome;
    riga.appendChild(cellaNome);

    const cellaTavolo = document.createElement("td");
    cellaTavolo.textContent = persona.tavolo;
    riga.appendChild(cellaTavolo);

    tabella.appendChild(riga);
  });
}


// function filtraElenco() {
//   const input = document.getElementById("ricerca").value.trim().toLowerCase();
//   const tabella = document.getElementById("risultati");
//   tabella.innerHTML = "";

//   // Se input è vuoto, non mostrare nulla
//   if (input === "") {
//     return;
//   }

//   const risultati = elenco.filter(persona => {
//     const fullName = `${persona.nome} ${persona.cognome}`.toLowerCase();
//     const invertedName = `${persona.cognome} ${persona.nome}`.toLowerCase();
//     const tavolo = persona.tavolo.toLowerCase();
//     return (
//       fullName.includes(input) ||
//       invertedName.includes(input) ||
//       tavolo.includes(input)
//     );
//   }).slice(0, 10); // Mostra massimo 10 risultati

// //   const tabella = document.getElementById("risultati");
//   tabella.innerHTML = "";

//   risultati.forEach(persona => {
//     const riga = document.createElement("tr");
//     const cella = document.createElement("td");
//     cella.textContent = `${persona.cognome},\t ${persona.nome}:\t ${persona.tavolo}`;
//     riga.appendChild(cella);
//     tabella.appendChild(riga);
//   });
// }
