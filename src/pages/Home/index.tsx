import React from 'react';
import { IonApp, IonButton, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/react';

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

/*
 * Link falando sobre rotas em react
 * https://ionicframework.com/docs/react/navigation
 * https://www.youtube.com/watch?v=t4P09iOUiKs
 */

const Home: React.FC = () => (
  <IonApp>

    <IonContent className="ion-padding">
      <div className="container-title-page-inicial">
        <IonTitle className="title-page-inicial">Registre<br/>Seus<br/>Animes</IonTitle>
      </div>
    </IonContent>

    <IonFooter className="container-ionfooter">
      <IonToolbar>
        <IonButton routerLink="/Login" className="button-footer" color="light">Continuar</IonButton>
      </IonToolbar>
    </IonFooter>

  </IonApp>
);

export default Home;