import {
  IonButton,
  IonCardContent,
  IonContent,
  IonFooter,
  IonInput,
  IonItem,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import "./estilo.css";
import { Camera, CameraResultType } from "@capacitor/core";

/*
https://www.youtube.com/watch?v=HxWfP2tDK94&list=PLuGF_IjvNklhWuFe6KfQFOIEphKhF8aIv&index=7
*/

const AddAnime: React.FC = () => {
  const [imagePath, setImagePath] = useState<any>("");

  /**
   *
   * @param path
   */

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

      return true;
    } catch (e) {
      console.log(e);
    }
  };

  function pegarImgDaGaleria() {
    document.getElementById("upload_img_anime")?.click();
  }

  const [nomeAnime, setNomeAnime] = useState<
    string | number | null | undefined
  >("");
  const [temporada, setTemporada] = useState<
    string | number | null | undefined
  >("");
  const [episodio, setEpisodio] = useState<string | number | null | undefined>(
    ""
  );
  const [imgAnime, setImgAnime] = useState<string>("");

  function saveAnime() {
    if (
      nomeAnime != null &&
      nomeAnime != "" &&
      temporada != null &&
      temporada != "" &&
      episodio != null &&
      episodio != "" &&
      imgAnime != null &&
      imgAnime != ""
    ) {
      const uid = localStorage.getItem("uid");
      const refBanco = firebase.firestore();
      const refAnimeList = refBanco.collection(
        "/Usuários/" + uid + "/AnimeList"
      );

      try {
        refAnimeList.add({
          nomeAnime,
          temporada,
          episodio,
          imgAnime,
        });
      } catch (e) {}
    }else{}
  }

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  const uid = localStorage.getItem("uid");
  // Create a storage reference from our storage service
  var storageRef = storage.ref("/" + uid);

  const upload_input = document.getElementById("upload_img_anime");

  upload_input?.addEventListener("change", function (event: any) {
    const file = event.target.files[0];

    console.log(file);
    var uploadTask = storageRef.child(file.name).put(file);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log("Upload is running");
            break;
        }
      },
      function (error) {
        console.log(error);
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log("File available at", downloadURL);
          setImgAnime(downloadURL);
        });
      }
    );
  });
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="div-form-add-anime">
          <div className="div-from-add-anime-filha">
            <br />
            <IonRow>
              <IonText
                style={{
                  fontSize: "2em",
                  textAlign: "center",
                  fontFamily: "Times New Roman",
                  width: "100%",
                }}
              >
                Adicionar Anime
              </IonText>
            </IonRow>
            <IonCardContent>
              <IonItem>
                <IonInput
                  placeholder="Nome do anime:"
                  value={nomeAnime}
                  onKeyUp={(event) => setNomeAnime(event.currentTarget.value)}
                  className="input-form-add-anime"
                />
              </IonItem>
              <IonItem>
                <IonInput
                  placeholder="Temporada:"
                  value={temporada}
                  onKeyUp={(event) => setTemporada(event.currentTarget.value)}
                  className="input-form-add-anime"
                />
              </IonItem>
              <IonItem>
                <IonInput
                  placeholder="Episódio:"
                  value={episodio}
                  onKeyUp={(event) => setEpisodio(event.currentTarget.value)}
                  className="input-form-add-anime"
                />
              </IonItem>
              <div className="div-escolher-foto-add-anime">
                <IonText className="input-form-add-anime">
                  Adicionar imagem para o Anime:
                </IonText>
                <IonButton
                  style={{marginTop: "15px"}}
                  onClick={pegarImgDaGaleria}
                  className="button-page-add-anime"
                  color="light"
                >
                  Ir para a galeria
                </IonButton>
                <input
                  type="file"
                  id="upload_img_anime"
                  name="upload_img_anime"
                  hidden
                  accept=".jpg, .jpeg, .png"
                />
                <div className="div-img-escolhida">
                  {!imgAnime && <IonText style={{color: "white"}}></IonText>}
                  {imgAnime && <img style={{marginTop: "15px"}} src={imgAnime} alt="Imagem escolhida" />}
                </div>
              </div>
              <br />
              <IonButton
                type="submit"
                expand="block"
                className="button-cadastrar"
                color="light"
                onClick={saveAnime}
              >
                Salvar
              </IonButton>
            </IonCardContent>
            <br /><br /><br />
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
    </IonPage>
  );
};

export default AddAnime;
