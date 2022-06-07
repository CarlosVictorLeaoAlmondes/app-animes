import React, { useState } from "react";
import {
  IonApp,
  IonButton,
  IonInput,
  IonToolbar,
  IonContent,
  IonFooter,
  IonItem,
  IonLabel,
  IonPage,
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

import "./estilo.css";

const CriarConta: React.FC = () => (
  <IonApp>
    <IonContent className="ion-padding">
      <div className="div-pai-criarconta">
        <div className="div-filha-criarconta">
          <IonItem className="container-criarconta">
            <IonLabel>Nome:</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="container-criarconta">
            <IonLabel>Email:</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="container-criarconta">
            <IonLabel>Senha:</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
          <IonItem className="container-criarconta">
            <IonLabel>Confirmar senha:</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
          <IonButton
            routerLink="/Login"
            className="button-cadastrar"
            color="light"
          >
            Cadastrar agora
          </IonButton>
        </div>
      </div>
    </IonContent>

    <IonFooter className="container-ionfooter">
      <IonToolbar>
        <IonButton
          routerLink="/SegundaPag"
          className="button-voltar-footer"
          color="light"
        >
          Voltar
        </IonButton>
      </IonToolbar>
    </IonFooter>
  </IonApp>
);

export default CriarConta;
