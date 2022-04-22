import { BrowserRouter,Switch, Route} from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/detail" exact component={DetailPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
