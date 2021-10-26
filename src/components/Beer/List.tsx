import { useEffect, useState } from "react";

// ToDo: interface duplicada
interface Beer {
  id: number,
  name: string
}

export function List({
  refresh,
  onRefreshed
}: { refresh: boolean, onRefreshed: Function }) {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    if (!refresh) { // limita a atualização da tela apenas quando refresh == true
      return;
    }

    fetch('http://localhost:8080/beers')
      .then((response) => response.json())
      .then((data: Beer[]) => {
        setBeers(data);
        onRefreshed(); // após atualizar a listagem, seta o refresh = false
      });
  }, [refresh]); // faz com que a função desse useEffect seja chamada sempre que a prop refresh mude de valor

  return (
    <ul className="Beer-List">
      {
        beers.map((beer: Beer) => <li key={beer.id}>{beer.name}</li>)
      }
    </ul>
  );
}
