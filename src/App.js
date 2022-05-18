import { Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout";

function App() {
  return (
    <div>
      <Layout>
        {/* <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cv" exact>
            <Cv />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch> */}
        hello
      </Layout>
    </div>
  );
}

export default App;
