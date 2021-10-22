import { FormEvent, useState } from "react";

interface Beer {
  id?: number,
  name: string
}

export function Create() {
  const [beer, setBeer] = useState<Beer>({} as Beer);

  const saveBeer = async (ev: FormEvent<HTMLFormElement>) => {
    if (beer.name.length < 3) {
      alert('digite ao menos 3 caracteres');
      return;
    }

    ev.preventDefault();

    await fetch('http://localhost:8080/beers', {
      method: 'POST', // usado para criar um novo registro (padrão REST)
      headers: {
        'Content-Type': 'application/json' // define que o dado enviado é um json
      },
      body: JSON.stringify(beer) // transformando um objeto em texto-json
    });
  }

  return (
    <form onSubmit={saveBeer}>
      <input
        type="text"
        required
        minLength={3}
        onChange={(ev) => setBeer({ name: ev.target.value })}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}