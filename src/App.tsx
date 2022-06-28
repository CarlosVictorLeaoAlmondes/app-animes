import React from "react";
import { IonApp } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SegundaPag from "./pages/SegundaPag";
import Login from "./pages/Login";
import CriarConta from "./pages/CriarConta";
import HomeAnimes from "./pages/HomeAnimes";
import HomeFoto from "./pages/HomeFoto";
import Galeria from "./pages/Galeria";

/*
 * Links falando sobre rotas em react
 * https://ionicframework.com/docs/react/navigation
 * https://www.youtube.com/watch?v=t4P09iOUiKs
 */

const App: React.FC = () => (
  <IonApp>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SegundaPag" component={SegundaPag} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/CriarConta" component={CriarConta} />
          <Route exact path="/HomeAnimes" component={HomeAnimes} />
          <Route exact path="/HomeFoto" component={HomeFoto} />
          <Route exact path="/Galeria" component={Galeria} />
        </Switch>
      </div>
    </Router>
  </IonApp>
);

export default App;

