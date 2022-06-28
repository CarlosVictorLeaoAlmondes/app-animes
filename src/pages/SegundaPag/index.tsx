import React from "react";
import {
  IonApp,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
} from "@ionic/react";

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
import "./estilo.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const SegundaPag: React.FC = () => {

  return (
    <IonApp>
      <IonContent className="ion-padding">
        <div className="container-button-pai-segunda-pag">
          <div className="container-button-segunda-pag">
            <IonButton
              routerLink="/Login"
              className="button-segunda-page"
              color="light"
            >
              Fazer Login
            </IonButton>
            <IonButton
              routerLink="/CriarConta"
              className="button-segunda-page"
              color="light"
            >
              Criar uma Conta
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default SegundaPag;
