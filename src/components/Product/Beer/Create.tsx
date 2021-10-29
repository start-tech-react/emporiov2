import { FormEvent, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { Beer } from "../../../models/interfaces";

export function Create() {
  let history = useHistory();
  const { beerId } = useParams<any>();

  const [beer, setBeer] = useState<Beer>({ id: beerId ?? null, name: '' });

  if (beerId) {
    // ToDo: fazer a busca na API.
  }

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
    history.push('/beers');
  }

  return (
    <form onSubmit={saveBeer}>
      <input
        type="text"
        value={beer.name}
        required
        minLength={3}
        onChange={(ev) => setBeer((state) => {
          return {
            ...state,
            ...{ name: ev.target.value }
          }
        })}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}