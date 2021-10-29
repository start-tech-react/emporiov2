import { useEffect, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import { Beer } from "../../../models/interfaces";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";

export function List() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    loadBeers();
  }, []);

  const loadBeers = () => {
    setIsLoading(true);
    fetch('http://localhost:8080/beers')
      .then((response) => response.json())
      .then((data: Beer[]) => {
        if (Array.isArray(data)) {
          setBeers(data);
        } else {
          setBeers([]);
        }
      })
      .finally(() => setIsLoading(false));
  }

  const handleDeleteBeer = (beerId: number) => {
    console.log(beerId);

    const shouldDelete = window.confirm('Deseja realmente excluir esse item?');

    if (!shouldDelete) {
      return;
    }

    fetch(`http://localhost:8080/beers/${beerId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          loadBeers();
        }
      });
  }

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!beers.length) {
    return (
      <Alert variant="secondary">
        Nenhum vinho cadastrado.
      </Alert>
    );
  }

  return (
    <>
      <Button variant="outline-light" onClick={() => history.push('/beers/create')}>Adicionar</Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            beers.map((beer: Beer) =>
              <tr key={beer.id}>
                <td>{beer.id}</td>
                <td>{beer.name}</td>
                <td>
                  <Button variant="outline-primary">
                    <MdModeEdit />
                  </Button>
                  {' '}
                  <Button variant="outline-danger" onClick={() => handleDeleteBeer(beer.id)}>
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  );
}
