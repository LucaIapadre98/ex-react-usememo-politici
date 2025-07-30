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


// Effettua una chiamata API a
// http://localhost:3333/politicians

// Salva la risposta in uno stato React (useState).

// Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

// Nome (name)
// Immagine (image)
// Posizione (position)
// Breve biografia (biography)

// Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.