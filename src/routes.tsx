import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CriarConta from "./pages/CriarConta";
import HomeAnimes from "./pages/HomeAnimes";
import HomeFoto from "./pages/HomeFoto";
import Galeria from "./pages/Galeria";
import AddAnime from "./pages/AddAnime";
import TelaAnime from "./pages/TelaAnime";

function isAuthenticated() {
  if (localStorage.getItem("uid") != null) {
    return true;
  }

  return false;
}

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() ? (
        rest.path === "/Login" ? (
            <Redirect to={{pathname: "/HomeAnimes"}} />
        ) : (
            <Component {...props} />
        )
      ) : (
        rest.path === "/Login" ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/Login"}} />
        )
      )
    )}
  />
);

const Routes = () => (
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/Home" component={Home} exact={true} />
            <PrivateRoute path="/Login" component={Login} exact={true} />
            <PrivateRoute path="/CriarConta" component={CriarConta} exact={true} />
            <PrivateRoute path="/HomeAnimes" component={HomeAnimes} exact={true} />
            <PrivateRoute path="/HomeFoto" component={HomeFoto} exact={true} />
            <PrivateRoute path="/Galeria" component={Galeria} exact={true} />
            <PrivateRoute path="/AddAnime" component={AddAnime} exact={true} />
            <PrivateRoute path="/TelaAnime" component={TelaAnime} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/Home" />} />
        </IonRouterOutlet>
    </IonReactRouter>
);

export default Routes;
