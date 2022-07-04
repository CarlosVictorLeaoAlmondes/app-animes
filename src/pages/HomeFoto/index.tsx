import React, { useState } from "react";
import {
  IonApp,
  IonButton,
  IonContent,
  IonFooter,
  IonToolbar,
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

/* Theme variables */
import "./estilo.css";

import supabase from "../../supabase-client";

import App from "../../App";

import ReactDOM from "react-dom";

import { Camera, CameraResultType } from "@capacitor/core";

const HomeFoto: React.FC = () => {
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

    if(error){
      alert(error?.message);
    }else{
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

  return (
    <IonApp>
      <IonContent>
        <div className="container-button-pai">
          <div className="container-button">
            <IonButton
              className="button-home-page"
              color="light"
              onClick={takePicture}
            >
              Tirar foto
            </IonButton>
          </div>
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
};

export default HomeFoto;
