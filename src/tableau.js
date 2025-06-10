const elenco = [
  // 2 
  { nome: "Chiara", cognome: "Cautero", tavolo: "It takes two" },
  { nome: "Massimiliano", cognome: "Mauro", tavolo: "It takes two" },

  // 9
  { nome: "Marco", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Irene", cognome: "Passera", tavolo: "Trackmania" },
  { nome: "Antonio", cognome: "Cautero", tavolo: "Trackmania" },
  { nome: "Allegra", cognome: "Chirco", tavolo: "Trackmania" },
  { nome: "Giovanni", cognome: "Pigani", tavolo: "Trackmania" },
  { nome: "Elena", cognome: "Govetto", tavolo: "Trackmania" },
  { nome: "Didier", cognome: "Pasini", tavolo: "Trackmania" },
  { nome: "Alessia", cognome: "Prest", tavolo: "Trackmania" },
  { nome: "Tommaso", cognome: "Cautero", tavolo: "Trackmania" },

  // 7
  { nome: "Michele", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Francesco", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Elisabetta", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Emanuele", cognome: "Pigani", tavolo: "Warcraft III" },
  { nome: "Benedetta", cognome: "Pigani", tavolo: "Warcraft III" },
  { nome: "Susanna", cognome: "Cautero", tavolo: "Warcraft III" },
  { nome: "Pietro", cognome: "Pigani", tavolo: "Warcraft III" },

  // 9
  { nome: "Valentina", cognome: "Fantin", tavolo: "Call of Duty" },
  { nome: "Andrea", cognome: "Cussigh", tavolo: "Call of Duty" },
  { nome: "Sara", cognome: "Marzio", tavolo: "Call of Duty" },
  { nome: "Davide", cognome: "Olivieri", tavolo: "Call of Duty" },
  { nome: "Anna", cognome: "Tamburini", tavolo: "Call of Duty" },
  { nome: "Simone", cognome: "Vidotti", tavolo: "Call of Duty" },
  { nome: "Veronica", cognome: "Tonin", tavolo: "Call of Duty" },
  { nome: "Federico", cognome: "Ariabis", tavolo: "Call of Duty" },
  { nome: "Johann", cognome: "Fontanini", tavolo: "Call of Duty" },

  // 10
  { nome: "Giovanni", cognome: "Comelli", tavolo: "Bridge Baron" },
  { nome: "Antonella", cognome: "Dorì", tavolo: "Bridge Baron" },
  { nome: "Marco", cognome: "Peronio", tavolo: "Bridge Baron" },
  { nome: "Cosetta", cognome: "Bertolani", tavolo: "Bridge Baron" },
  { nome: "Paolo", cognome: "Comelli", tavolo: "Bridge Baron" },
  { nome: "Marina", cognome: "Bonazza", tavolo: "Bridge Baron" },
  { nome: "Piero", cognome: "Pasini", tavolo: "Bridge Baron" },
  { nome: "Debora", cognome: "Biavaschi", tavolo: "Bridge Baron" },
  { nome: "Angela", cognome: "Comelli", tavolo: "King's Bounty" },
  { nome: "Lucia", cognome: "Comelli", tavolo: "King's Bounty" },

  // 9
  { nome: "Laura", cognome: "Brombin", tavolo: "King's Bounty" },
  { nome: "Giuseppe", cognome: "Cautero", tavolo: "King's Bounty" },
  { nome: "Laura", cognome: "Corona", tavolo: "King's Bounty" },
  { nome: "Alberto", cognome: "Brombin", tavolo: "King's Bounty" },
  { nome: "Stefano", cognome: "Pigani", tavolo: "King's Bounty" },
  { nome: "Angela", cognome: "Peronio", tavolo: "King's Bounty" },
  { nome: "Luigina", cognome: "Rigo", tavolo: "King's Bounty" },
  { nome: "Giovanni", cognome: "Cautero", tavolo: "Bridge Baron" },
  { nome: "Isabella", cognome: "Pegoraro", tavolo: "Bridge Baron" },

  // 8
  { nome: "Andrea", cognome: "Martinis", tavolo: "Overcooked" },
  { nome: "Chiara", cognome: "Monai", tavolo: "Overcooked" },
  { nome: "Celeste", cognome: "--", tavolo: "Overcooked" },
  { nome: "Aurora", cognome: "Pavon", tavolo: "Overcooked" },
  { nome: "Deborah", cognome: "Iacotti", tavolo: "Overcooked" },
  { nome: "Alessia", cognome: "Battaglia", tavolo: "Overcooked" },
  { nome: "Valentina", cognome: "Borghesan", tavolo: "Overcooked" },
  { nome: "Davide", cognome: "Mozzon", tavolo: "Overcooked" },

  // 10
  { nome: "Mirea", cognome: "Pasini", tavolo: "Minecraft" },
  { nome: "Alberto", cognome: "Gamberini", tavolo: "Minecraft" },
  { nome: "Giuditta", cognome: "Micossi", tavolo: "Minecraft" },
  { nome: "Daniele", cognome: "Bertossio", tavolo: "Minecraft" },
  { nome: "Alexa", cognome: "Rossi", tavolo: "Minecraft" },
  { nome: "Luca Luigi", cognome: "Pontelli", tavolo: "Minecraft" },
  { nome: "Matteo", cognome: "Marini", tavolo: "Minecraft" },
  { nome: "Eleonora", cognome: "Santoianni", tavolo: "Minecraft" },
  { nome: "Alberto", cognome: "Jr. Bianchini", tavolo: "Minecraft" },
  { nome: "Bianca", cognome: "Hodoroaba", tavolo: "Minecraft" },

  // 7
  { nome: "Mattia", cognome: "Sermonico", tavolo: "FIFA 2013" },
  { nome: "Alice", cognome: "Pividor", tavolo: "FIFA 2013" },
  { nome: "Luca", cognome: "Merlino", tavolo: "FIFA 2013" },
  { nome: "Elisa", cognome: "Clochiatti", tavolo: "FIFA 2013" },
  { nome: "Viola", cognome: "Merlino", tavolo: "FIFA 2013" },
  { nome: "Enea", cognome: "Milocco", tavolo: "FIFA 2013" },
  { nome: "Chiara", cognome: "Marcuzzi", tavolo: "FIFA 2013" },

  // 10
  { nome: "Giulia", cognome: "Copetti", tavolo: "Metal Gear Solid" },
  { nome: "Marco", cognome: "Novello", tavolo: "Metal Gear Solid" },
  { nome: "Fabio", cognome: "Mansutti", tavolo: "Metal Gear Solid" },
  { nome: "Barbara", cognome: "Stoklosinska", tavolo: "Metal Gear Solid" },
  { nome: "Andrea", cognome: "Cernoia", tavolo: "Metal Gear Solid" },
  { nome: "Marta", cognome: "Girardi", tavolo: "Metal Gear Solid" },
  { nome: "Nicholas", cognome: "Piccini", tavolo: "Metal Gear Solid" },
  { nome: "Valentina", cognome: "Maietta", tavolo: "Metal Gear Solid" },
  { nome: "Davide", cognome: "Cocco", tavolo: "Metal Gear Solid" },
  { nome: "Sofia", cognome: "Dallorto", tavolo: "Metal Gear Solid" },

  // 8
  { nome: "Bepina", cognome: "Foschiani", tavolo: "Pokemon Blu" },
  { nome: "Andrea", cognome: "Cozzi", tavolo: "Pokemon Blu" },
  { nome: "Ilia", cognome: "Marini", tavolo: "Pokemon Blu" },
  { nome: "Lorenzo", cognome: "Tecco", tavolo: "Pokemon Blu" },
  { nome: "Fabio", cognome: "Tecco", tavolo: "Pokemon Blu" },
  { nome: "Valentina", cognome: "Mauro", tavolo: "Pokemon Blu" },
  { nome: "Damiano", cognome: "Tecco", tavolo: "Pokemon Blu" },
  { nome: "Ismaele", cognome: "Tecco", tavolo: "Pokemon Blu" },

  // 7
  { nome: "Mirko", cognome: "Babuin", tavolo: "Guitar Hero" },
  { nome: "Marco", cognome: "Gariazzo", tavolo: "Guitar Hero" },
  { nome: "Enrico", cognome: "Pagliarini", tavolo: "Guitar Hero" },
  { nome: "Alessandro", cognome: "Dri", tavolo: "Guitar Hero" },
  { nome: "Fabio", cognome: "Petris", tavolo: "Guitar Hero" },
  { nome: "Federico", cognome: "Scridel", tavolo: "Guitar Hero" },
  { nome: "Luisa", cognome: "Bonaccorsi", tavolo: "Guitar Hero" },

  // 8
  { nome: "Lucia", cognome: "Scridel", tavolo: "Candy Crush" },
  { nome: "Paola", cognome: "Miconi", tavolo: "Candy Crush" },
  { nome: "Fausto", cognome: "Zampis", tavolo: "Candy Crush" },
  { nome: "Sergio", cognome: "Scridel", tavolo: "Candy Crush" },
  { nome: "Monica", cognome: "Clochiatti", tavolo: "Candy Crush" },
  { nome: "Lorenzo", cognome: "Scridel", tavolo: "Candy Crush" },
  { nome: "Giancarlo", cognome: "Pilon", tavolo: "Candy Crush" },
  { nome: "Annamaria", cognome: "Di Poi", tavolo: "Candy Crush" },

  // 10
  { nome: "Pierino", cognome: "Scridel", tavolo: "TETRIS" },
  { nome: "Caroline", cognome: "Medard", tavolo: "TETRIS" },
  { nome: "Renato", cognome: "Cattarossi", tavolo: "TETRIS" },
  { nome: "Giulio", cognome: "Scridel", tavolo: "TETRIS" },
  { nome: "Thomas", cognome: "Scridel", tavolo: "TETRIS" },
  { nome: "Melissa", cognome: "Scridel", tavolo: "TETRIS" },
  { nome: "Ermanno", cognome: "Mauro", tavolo: "TETRIS" },
  { nome: "Anna", cognome: "Doronzo", tavolo: "TETRIS" },
  { nome: "Cristina", cognome: "Mauro", tavolo: "TETRIS" },
  { nome: "Fabio", cognome: "Not", tavolo: "TETRIS" }

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
