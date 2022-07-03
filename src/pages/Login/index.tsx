import React, { useState } from "react";
import {
  IonApp,
  IonButton,
  IonToolbar,
  IonFooter,
  IonImg,
  IonText,
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

import logoGoogle from "../../imagens/Login/logo-google.jpg";

import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
var providerGoogle = new firebase.auth.GoogleAuthProvider();
/*
erro no auth
https://stackoverflow.com/questions/69139443/property-auth-does-not-exist-on-type-typeof-import-firebase-auth
*/

const Login: React.FC = () => {
  
  let history = useHistory();

  function loginGoogle() {
    firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then((result: any) => {
        var uid = result.user?.uid;
        console.log("UID: " + uid);
        localStorage.setItem("uid", uid);
        history.push("/HomeAnimes");
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
      });
  }

  return (
    <IonApp>
      <div className="div-pai-login">
        <div className="div-filha-login">
          <IonButton
            color="light"
            className="button-login"
            onClick={loginGoogle}
          >
            <IonImg src={logoGoogle} style={{ width: "25px" }}></IonImg>
            <IonText>&nbsp;&nbsp;Sign in with google</IonText>
          </IonButton>
        </div>
      </div>

      <IonFooter className="container-ionfooter">
        <IonToolbar>
          <IonButton
            routerLink="/Home"
            className="button-voltar-footer"
            color="light"
          >
            Voltar
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
};
export default Login;

