import React, { useContext, useEffect, useState } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonFab,
  IonFabButton,
  IonItemSliding,
  IonLabel,
  IonText,
  IonButton,
  IonCard,
  useIonViewDidEnter,
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

/*
https://www.youtube.com/watch?v=C8Jy76TbjWM
https://www.youtube.com/watch?v=guM__mfT9og
https://www.youtube.com/watch?v=EUIgC1D-qpM&list=PLuGF_IjvNklhWuFe6KfQFOIEphKhF8aIv&index=3
*/

/**
 * Supabase Storage Image Upload Tutorial Using Ionic React & Capacitor Camera
 * https://www.youtube.com/watch?v=MVy46MGmfOQ
 *
 * How to pick images from Camera & Gallery in React Native app
 * https://enappd.com/blog/pick-images-from-camera-gallery-in-react-native-app/78/#9e45
 */

// https://ionicframework.com/docs/v3/ionicons/
import { add, exit, trash, camera } from "ionicons/icons";
import { AuthContext } from "../../contexts/AuthContext";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Armazenamento da foto
import supabase from "../../supabase-client";
import { Camera, CameraResultType } from "@capacitor/core";

const HomeAnimes: React.FC = () => {
  // ---------------------------- FOTO ----------------------------

  const [storageItems, setStorageItems] = useState<any>([]);

  const [imagePath, setImagePath] = useState<any>("");

  useIonViewDidEnter(() => {
    getAllImages();
  });

  const getAllImages = async () => {
    const { data, error } = await supabase.storage
      .from("image-bucket")
      .list("", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      alert(error?.message);
    } else {
      setStorageItems(data);
      console.log(data);
    }
  };

  /**
   *
   * @param path
   */
  const uploadImage = async (path: string) => {
    const response = await fetch(path);
    const blob = await response.blob();

    const filename = path.substr(path.lastIndexOf("/") + 1);

    const { data, error } = await supabase.storage
      .from("image-bucket")
      .upload(`${filename}`, blob, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) alert(error?.message);

    console.log(data);

    return true;
  };

  const takePicture = async () => {
    try {
      const cameraResult = await Camera.getPhoto({
        quality: 90,
        // allowEditing: true
        resultType: CameraResultType.Uri,
      });

      const path = cameraResult?.path || cameraResult?.webPath;

      // set hook form prop for image
      setImagePath(path);

      console.log(imagePath);

      await uploadImage(path as string);

      return true;
    } catch (e) {
      console.log(e);
    }
  };

  // --------------------------------------------------------------

  const { logout } = useContext(AuthContext);

  const [listAnimesUseState, setListAnimesUseState] = useState<any>("");

  useEffect(refreshAnimes, []);

  const refBanco = firebase.firestore();
  const uid = localStorage.getItem("uid");

  const refAnimeList = refBanco.collection("/Usuários/" + uid + "/AnimeList/");

  function deleteAnime(id: string) {
    refAnimeList.doc(id).delete();
    refreshAnimes();
  }

  function refreshAnimes() {
    const uid = localStorage.getItem("uid");
    const refBanco = firebase.firestore();
    const refAnimeList = refBanco.collection("/Usuários/" + uid + "/AnimeList");
    var listAnimes = refAnimeList.get();
    listAnimes
      .then(function (event) {
        setListAnimesUseState(
          event.docs.map((doc, index) => (
            <IonItemSliding key={index}>
              <IonCard style={{ border: "5px solid grey" }}>
                <IonItem>
                  <IonLabel style={{ color: "white" }}>
                    <img
                      className="img-tela-anime"
                      src={doc.data().imgAnime}
                      alt="Foto do anime"
                    />
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel style={{ color: "white" }}>
                    <IonText>{doc.data().nomeAnime}</IonText>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel style={{ color: "white" }}>
                    <IonText>Temporada: {doc.data().temporada}</IonText>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel style={{ color: "white" }}>
                    <IonText>Episódio: {doc.data().episodio}</IonText>
                  </IonLabel>
                </IonItem>
                <IonItem>
                <IonText slot="start" style={{ color: "white" }} >CountAnimes: {index+1}</IonText>
                  <IonButton onClick={() => deleteAnime(doc.id)} slot="end">
                    <IonIcon icon={trash} />
                  </IonButton>
                </IonItem>
              </IonCard>
            </IonItemSliding>
          ))
        );
      })
      .catch(function (e) {
        console.log(e.message);
      });
  }

  return (
    <IonApp>
      <IonHeader className="container-ionheader">
        <IonToolbar>
          <IonTitle className="title-header-HomeAnimes">Animes</IonTitle>
          <IonFab vertical="bottom" horizontal="end">
            <IonFabButton routerLink="/HomeFoto" style={{height: "30px", width: "30px"}}>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFab>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList style={{ marginTop: "5px", padding: "15px" }}>
          {listAnimesUseState}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/AddAnime">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton routerLink="/" onClick={logout}>
            <IonIcon icon={exit} />
          </IonFabButton>
        </IonFab>
      </IonContent>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </IonApp>
  );
};

export default HomeAnimes;
