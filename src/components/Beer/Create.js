import { useState } from "react";

export function Create() {
  const [beerName, setBeerName] = useState('');

  const saveBeer = async (ev) => {
    if (beerName.length < 3) {
      alert('digite ao menos 3 caracteres');
      return;
    }

    ev.preventDefault();

    await fetch('http://localhost:8080/beers', {
      method: 'POST', // usado para criar um novo registro (padrão REST)
      headers: {
        'Content-Type': 'application/json' // define que o dado enviado é um json
      },
      body: JSON.stringify({ name: beerName, price: 10 }) // transformando um objeto em texto-json
    });
  }

  return (
    <form onSubmit={saveBeer}>
      <input type="text" required minLength={3} onChange={(ev) => setBeerName(ev.target.value)} />
      <button type="submit">Salvar</button>
    </form>
  );
}