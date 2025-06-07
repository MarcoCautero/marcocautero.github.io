const elenco = [
  // 2 
  { nome: "Chiara", cognome: "Cautero", tavolo: "It takes two" },
  { nome: "Massimiliano", cognome: "Mauro", tavolo: "It takes two" },

  // 9
  { nome: "Marco", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Irene", cognome: "Passera", tavolo: "Trackmania" },
  { nome: "Antonio", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Allegra", cognome: " ", tavolo: "Trackmania" },
  { nome: "Tommaso", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Giovanni", cognome: "Pigani", tavolo: "Trackmania" },
  { nome: "Elena", cognome: "Govetto", tavolo: "Trackmania" },
  { nome: "Didier", cognome: "Pasini", tavolo: "Trackmania" },
  { nome: "Alessia", cognome: " ", tavolo: "Trackmania" },

  // 7
  { nome: "Michele", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Francesco", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Elisabetta", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Emanuele", cognome: "Pigani", tavolo: "Warcraft III" },
  { nome: "Benedetta", cognome: "Pigani", tavolo: "Warcraft III" },
  { nome: "Susanna", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Pietro", cognome: "Pigani", tavolo: "Warcraft III" },

  // 9
  { nome: "Valentina", cognome: " ", tavolo: "Call of Duty" },
  { nome: "Andrea", cognome: "Cussigh", tavolo: "Call of Duty" },
  { nome: "Sara", cognome: "Marzio", tavolo: "Call of Duty" },
  { nome: "Davide", cognome: " ", tavolo: "Call of Duty" },
  { nome: "Anna", cognome: "Tamburini", tavolo: "Call of Duty" },
  { nome: "Simone", cognome: "Vidotti", tavolo: "Call of Duty" },
  { nome: "Veronica", cognome: "Tonin", tavolo: "Call of Duty" },
  { nome: "Federico", cognome: " ", tavolo: "Call of Duty" },
  { nome: "Johann", cognome: " ", tavolo: "Call of Duty" },

  // 10
  { nome: "Giovanni", cognome: "Comelli", tavolo: "Bridge Baron" },
  { nome: "Antonella", cognome: "Dorì", tavolo: "Bridge Baron" },
  { nome: "Marco", cognome: "Peronio", tavolo: "Bridge Baron" },
  { nome: "Cosetta", cognome: "Bertolani", tavolo: "Bridge Baron" },
  { nome: "Paolo", cognome: "Comelli", tavolo: "Bridge Baron" },
  { nome: "Marina", cognome: "Bonazza", tavolo: "Bridge Baron" },
  { nome: "Giovanni", cognome: "Cautero", tavolo: "Bridge Baron" },
  { nome: "Isabella", cognome: "Pegoraro", tavolo: "Bridge Baron" },
  { nome: "Piero", cognome: "Pasini", tavolo: "Bridge Baron" },
  { nome: "Debora", cognome: "Biavaschi", tavolo: "Bridge Baron" },

  // 9
  { nome: "Laura", cognome: "Brombin", tavolo: "King's Bounty" },
  { nome: "Giuseppe", cognome: "Cautero", tavolo: "King's Bounty" },
  { nome: "Laura", cognome: "Corona", tavolo: "King's Bounty" },
  { nome: "Alberto", cognome: "Brombin", tavolo: "King's Bounty" },
  { nome: "Stefano", cognome: "Pigani", tavolo: "King's Bounty" },
  { nome: "Angela", cognome: "Peronio", tavolo: "King's Bounty" },
  { nome: "Luigina", cognome: "Rigo", tavolo: "King's Bounty" },
  { nome: "Angela", cognome: "Comelli", tavolo: "King's Bounty" },
  { nome: "Lucia", cognome: "Comelli", tavolo: "King's Bounty" },

  // 8
  { nome: " ", cognome: "Martinis", tavolo: "Overcooked" },
  { nome: "Laura", cognome: "Monai", tavolo: "Overcooked" },
  // { nome: "Laura", cognome: "Monai", tavolo: "Overcooked" },
  { nome: "Aurora", cognome: "Brombin", tavolo: "Overcooked" },
  { nome: "Deborah", cognome: "Brombin", tavolo: "Overcooked" },
  { nome: "Alessia", cognome: "Battaglia", tavolo: "Overcooked" },
  { nome: "Valentina", cognome: "Borghesan", tavolo: "Overcooked" },
  { nome: "Davide", cognome: " ", tavolo: "Overcooked" },

  // 10
  { nome: "Mirea", cognome: "Pasini", tavolo: "Minecraft" },
  { nome: "Alberto", cognome: "Gamberini", tavolo: "Minecraft" },
  { nome: "Giuditta", cognome: "Micossi", tavolo: "Minecraft" },
  { nome: "Daniele", cognome: " ", tavolo: "Minecraft" },
  { nome: "Alexa", cognome: "Rossi", tavolo: "Minecraft" },
  { nome: "Luca Luigi", cognome: "Pontelli", tavolo: "Minecraft" },
  { nome: "Matteo", cognome: "Marini", tavolo: "Minecraft" },
  { nome: "Eleonora", cognome: " ", tavolo: "Minecraft" },
  { nome: "Alberto", cognome: " ", tavolo: "Minecraft" },
  { nome: "Bianca", cognome: " ", tavolo: "Minecraft" },

  // 7
  { nome: "Mattia", cognome: "Sermo", tavolo: "FIFA 2013" },
  { nome: "Alice", cognome: "Chiara", tavolo: "FIFA 2013" },
  { nome: "Luca", cognome: "Merlino", tavolo: "FIFA 2013" },
  { nome: "Elisa", cognome: " ", tavolo: "FIFA 2013" },
  // { nome: "Elisa", cognome: " ", tavolo: "FIFA 2013" },
  { nome: "Enea", cognome: " ", tavolo: "FIFA 2013" },
  { nome: "Chiara", cognome: " ", tavolo: "FIFA 2013" },

  // 10
  { nome: "Giulia", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Marco", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Fabio", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Barbara", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Andrea", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Marta", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Nicholas", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Valentina", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Davide", cognome: " ", tavolo: "Metal Gear Solid" },
  { nome: "Sofia", cognome: " ", tavolo: "Metal Gear Solid" },

  // 8
  { nome: "Pina", cognome: " ", tavolo: "Pokemon Blu" },
  { nome: "Andrea", cognome: " ", tavolo: "Pokemon Blu" },
  { nome: "Ilia", cognome: " ", tavolo: "Pokemon Blu" },
  { nome: "Lorenzo", cognome: " ", tavolo: "Pokemon Blu" },
  { nome: "Fabio", cognome: " ", tavolo: "Pokemon Blu" },
  { nome: "Valentina", cognome: "Scridel", tavolo: "Pokemon Blu" },
  { nome: "Damiano", cognome: " ", tavolo: "Pokemon Blu" },
  { nome: "Ismaele", cognome: " ", tavolo: "Pokemon Blu" },

  // 7
  { nome: "Mirko", cognome: " ", tavolo: "Guitar Hero" },
  { nome: "Marco", cognome: "Gariazzo", tavolo: "Guitar Hero" },
  { nome: "Enrico", cognome: "Pagliarini", tavolo: "Guitar Hero" },
  { nome: "Alessandro", cognome: "Dri", tavolo: "Guitar Hero" },
  { nome: "Fabio", cognome: "Petris", tavolo: "Guitar Hero" },
  { nome: "Federico", cognome: "Scridel", tavolo: "Guitar Hero" },
  { nome: "Luisa", cognome: "Bonaccorsi", tavolo: "Guitar Hero" },

  // 8
  { nome: "Lucia", cognome: "Scridel", tavolo: "Candy Crush" },
  { nome: "Paola", cognome: " ", tavolo: "Candy Crush" },
  { nome: "Fausto", cognome: " ", tavolo: "Candy Crush" },
  { nome: "Sergio", cognome: " ", tavolo: "Candy Crush" },
  { nome: "Monica", cognome: " ", tavolo: "Candy Crush" },
  { nome: "Lorenzo", cognome: " ", tavolo: "Candy Crush" },
  { nome: "Giancarlo", cognome: " ", tavolo: "Candy Crush" },
  { nome: "Annamaria", cognome: " ", tavolo: "Candy Crush" },

  // 10
  { nome: "Pierino", cognome: "Scridel", tavolo: "TETRIS" },
  { nome: "Caroline", cognome: " ", tavolo: "TETRIS" },
  { nome: "Renato", cognome: " ", tavolo: "TETRIS" },
  { nome: "Rosy", cognome: " ", tavolo: "TETRIS" },
  { nome: "Giulio", cognome: " ", tavolo: "TETRIS" },
  { nome: "Thomas", cognome: " ", tavolo: "TETRIS" },
  { nome: "Melissa", cognome: " ", tavolo: "TETRIS" },
  { nome: "Ermanno", cognome: " ", tavolo: "TETRIS" },
  { nome: "Anna", cognome: " ", tavolo: "TETRIS" },
  { nome: "Cristina", cognome: "Mauro", tavolo: "TETRIS" }

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
