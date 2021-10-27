import { useEffect, useState } from "react";
import { Alert, Button, Spinner, Table } from "react-bootstrap";
import { Wine } from "../../../models/interfaces";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";

export function List() {
  const [wines, setWines] = useState<Wine[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8080/wines')
      .then((response) => response.json())
      .then((data: Wine[]) => {
        if (Array.isArray(data)) {
          setWines(data);
        } else {
          setWines([]);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!wines.length) {
    return (
      <Alert variant="secondary">
        Nenhum vinho cadastrado.
      </Alert>
    );
  }

  return (
    <>
      <Button variant="outline-light" onClick={() => history.push('/wines/create')}>Adicionar</Button>
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
            wines.map((wine: Wine) =>
              <tr key={wine.id}>
                <td>{wine.id}</td>
                <td>{wine.name}</td>
                <td>
                  <Button variant="outline-primary">
                    <MdModeEdit />
                  </Button>
                  {' '}
                  <Button variant="outline-danger">
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
