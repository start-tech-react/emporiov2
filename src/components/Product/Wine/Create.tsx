import { FormEvent, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Wine } from "../../../models/interfaces";

export function Create() {
  let history = useHistory();

  const [wine, setWine] = useState<Wine>({ name: '' });

  const saveWine = async (ev: FormEvent<HTMLFormElement>) => {
    if (wine.name.length < 3) {
      alert('digite ao menos 3 caracteres');
      return;
    }

    ev.preventDefault();

    await fetch('http://localhost:8080/wines', {
      method: 'POST', // usado para criar um novo registro (padrão REST)
      headers: {
        'Content-Type': 'application/json' // define que o dado enviado é um json
      },
      body: JSON.stringify(wine) // transformando um objeto em texto-json
    });
    history.push('/wines');
  }

  return (
    <form onSubmit={saveWine}>
      <input
        type="text"
        value={wine.name}
        required
        minLength={3}
        onChange={(ev) => setWine({ name: ev.target.value })}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}