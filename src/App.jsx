import { useState, useEffect } from 'react';
function App(){
  const [politicians, setPoliticians] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(response => response.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error('Error fetching politicians:', error));
  }, []);
  console.log(politicians);
  
  
  return(
    <div className="container">
      <h1>Lista politici:</h1>
      {politicians.map((politician) => (
        <div key={politician.id} className="card">
          <img src={politician.image} alt={politician.name} />
          <h2>{politician.name}</h2>
          <p><strong>Posizione:</strong> {politician.position}</p>
          <p><strong>Biografia:</strong> {politician.biography}</p>
        </div>
      ))}
    </div>

  )
};

export default App;

// Milestone 1: Recuperare e visualizzare i dati
// Effettua una chiamata API a
// http://localhost:3333/politicians

// Salva la risposta in uno stato React (useState).

// Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

// Nome (name)
// Immagine (image)
// Posizione (position)
// Breve biografia (biography)

// Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

// Milestone 2: Implementare la ricerca ottimizzata
// Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
// Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
// Non usare useEffect per aggiornare l’array filtrato.

// Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.