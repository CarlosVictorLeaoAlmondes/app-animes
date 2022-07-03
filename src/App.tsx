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

import "./firebase";
import Routes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

/*
 * Links falando sobre rotas em react
 * https://ionicframework.com/docs/react/navigation
 * https://www.youtube.com/watch?v=t4P09iOUiKs
 */

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </IonApp>
);

export default App;

