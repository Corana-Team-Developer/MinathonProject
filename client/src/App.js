import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  SignupPage,
  DetailPage,
  HomePage,
  LoginPage,
  CustomerFillInfoPage,
  PTFillFormPage,
  FindCustomerPage,
} from "./pages";
import ConnectPTPage from "./pages/ConnectPTPage";
import DietPage from "./pages/DietPage";
import FindPtPage from "./pages/FindPtPage";
import PlanForCustomerPage from "./pages/PlanForCustomerPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact component={LoginPage}></Route>
        <Route path="/detail" exact component={DetailPage}></Route>
        <Route path="/signup" exact component={SignupPage}></Route>
        <Route path="/customer/diet" exact component={DietPage}></Route>
        <Route
          path="/customer/fill"
          exact
          component={CustomerFillInfoPage}
        ></Route>
        <Route
          path="/customer/plan"
          exact
          component={PlanForCustomerPage}
        ></Route>
        <Route path="/PT/fill" exact component={PTFillFormPage}></Route>
        <Route
          path="/PT/findcustomer"
          exact
          component={FindCustomerPage}
        ></Route>
        <Route
          path="/customer/findpt/suitable"
          exact
          component={FindPtPage}
        ></Route>
        <Route
          path="/customer/findpt/contact"
          exact
          component={ConnectPTPage}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
