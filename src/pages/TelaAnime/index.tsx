import React, { useState } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonButton,
  IonItem,
  IonText,
  IonLabel,
  IonItemSliding,
  useIonViewDidLeave,
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

import { getDatabase, ref, onValue, set } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

var imgAnimeAuxUseState = "";
var nomeAnimeAuxUseState = "";
var temporadaAuxUseState = "";
var episodioAuxUseState = "";

const TelaAnime: React.FC = () => (
    <IonApp>
      <IonHeader className="container-ionheader">
          <IonToolbar>
            <IonTitle style={{ color: "white" }}>Anime</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="div-tela-anime">
            <div className="div-tela-anime-img">
              <img
                className="img-tela-anime"
                src={imgAnimeAuxUseState}
                alt="Foto do anime"
              />
            </div>
            <br />
            <br />
            <IonItem>
              <IonText style={{ color: "white" }}>Nome do Anime: </IonText>
              <IonText>{nomeAnimeAuxUseState}</IonText>
            </IonItem>
            <IonItem>
              <IonText style={{ color: "white" }}>Temporada: </IonText>
              <IonText>{temporadaAuxUseState}</IonText>
            </IonItem>
            <IonItem>
              <IonText style={{ color: "white" }}>
                Último episódio assistido:
              </IonText>
              <IonText>{episodioAuxUseState}</IonText>
            </IonItem>
          </div>
        </IonContent>
        <IonFooter className="container-ionfooter">
          <IonToolbar>
            <IonButton
              routerLink="/HomeAnimes"
              className="button-voltar-footer"
              color="light"
            >
              Voltar
            </IonButton>
          </IonToolbar>
        </IonFooter>
    </IonApp>
);
export default TelaAnime;
