import { useEffect, useState } from "react";

// ToDo: interface duplicada
interface Beer {
  id: number,
  name: string
}

export function List() {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/beers')
      .then((response) => response.json())
      .then((data: Beer[]) => {
        setBeers(data);
      });
  }, []);

  return (
    <ul className="Beer-List">
      {
        beers.map((beer: Beer) => <li key={beer.id}>{beer.name}</li>)
      }
    </ul>
  );
}
