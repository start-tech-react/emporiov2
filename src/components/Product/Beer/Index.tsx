import { Switch, Route, useRouteMatch } from "react-router-dom";
import { List, Create } from "./";

export function Index() {
  let { path } = useRouteMatch();

  return (
    <>
      <h1>Cervejas</h1>
      <Switch>
        <Route component={List} path={path} exact />
        <Route component={Create} path={`${path}/create`} />
      </Switch>
    </>
  );
}