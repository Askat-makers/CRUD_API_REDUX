import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import { store } from "./store";

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/" component={ListPage} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/edit/:id" component={EditPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
