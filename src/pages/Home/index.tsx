import React from 'react';
import { IonApp, IonRouterOutlet, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonList, IonItem, IonThumbnail, IonImg, IonLabel,  } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './home.css';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

/*
 * Link falando sobre rotas em react
 * https://ionicframework.com/docs/react/navigation
 * https://www.youtube.com/watch?v=t4P09iOUiKs
 */

const Home: React.FC = () => (
  <IonApp>

    <IonContent className="ion-padding">
      <div className="container-title-page-inicial">
        <IonTitle className="title-page-inicial">Assista<br/>Animes</IonTitle>
      </div>
    </IonContent>

    <IonFooter className="container-ionfooter">
      <IonToolbar>
        <IonButton routerLink="/SegundaPag" className="button-footer" color="light">Continuar</IonButton>
      </IonToolbar>
    </IonFooter>

  </IonApp>
);

export default Home;