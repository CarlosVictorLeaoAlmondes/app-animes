import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/react';

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
import './estilo.css';

const Galeria: React.FC = () => (
  <IonApp>
  <IonHeader className="container-ionheader">
    <IonToolbar>
      <IonTitle>Header</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonFooter>
    <IonToolbar>
      <IonTitle>Footer</IonTitle>
    </IonToolbar>
  </IonFooter>
  </IonApp>
);

export default Galeria;