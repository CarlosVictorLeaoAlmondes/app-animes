import React from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonImg,
  IonCard,
  IonThumbnail,
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

import naruto from "../../imagens/naruto-img.jpg";
import narutoShippuden from "../../imagens/naruto-shippuden-img.jpg";
import komiSam from "../../imagens/komi-san-img.jpg";
import mushokuTensei from "../../imagens/mushoku-tensei-img.jpg";
import jujutsuKaisen from "../../imagens/jujutsu-kaisen.jpg";
import kimetsuNoYaiba from "../../imagens/kimetsu-no-yaiba.jpg";
import bokuNoHero from "../../imagens/boku-no-hero-academia-img.jpg";
import spyXFamily from "../../imagens/spy-x-family-img.jpg";
import shingekiNoKyojin from "../../imagens/shingeki-no-kyojin-img.jpg";
import konoSubarashii from "../../imagens/kono-subarashii.jpg"
import onePunchMan from "../../imagens/one-punch-man-img.jpg";
import swordArtOnline from "../../imagens/sword-art-online-img.jpg";
import haikyuu from "../../imagens/haikyuu-img.jpg";
import darlingInTheFranXX from "../../imagens/darling-in-the-franXX-img.jpg";
import sonoBisqueDoll from "../../imagens/sono-bisque-doll.jpg";
import vinlandSaga from "../../imagens/vinland-saga-img.jpg";
import enenNoShouboutai from "../../imagens/enen-no-shouboutai-img.jpg";
import horimiya from "../../imagens/horimiya-img.jpg";
import tsukiGaKirei from "../../imagens/tsuki-ga-kirei-img.jpg";
import deathNote from "../../imagens/death-note-img.jpg";

const imgs = [
  {
    nome: "Naruto",
    caminho: naruto,
  },
  {
    nome: "Naruto Shippuden",
    caminho: narutoShippuden,
  },
  {
    nome: "Komi-san",
    caminho: komiSam,
  },
  {
    nome: "Mushoku Tensei",
    caminho: mushokuTensei,
  },
  {
    nome: "Jujutsu Kaisen",
    caminho: jujutsuKaisen,
  },
  {
    nome: "Kimetsu no Yaiba",
    caminho: kimetsuNoYaiba,
  },
  {
    nome: "Boku no Hero Academia",
    caminho: bokuNoHero,
  },
  {
    nome: "Spy x Family",
    caminho: spyXFamily
  },
  {
    nome: "Shingeki no Kyojin",
    caminho: shingekiNoKyojin
  },
  {
    nome: "Kono Subarashii",
    caminho: konoSubarashii
  },
  {
    nome: "One Punch Man",
    caminho: onePunchMan
  },
  {
    nome: "Sword Art Online",
    caminho: swordArtOnline
  },
  {
    nome: "Haikyuu!!",
    caminho: haikyuu
  },
  {
    nome: "Darling In The FranXX",
    caminho: darlingInTheFranXX
  },
  {
    nome: "Sono Bisque Doll",
    caminho: sonoBisqueDoll
  },
  {
    nome: "Vinland Saga",
    caminho: vinlandSaga
  },
  {
    nome: "Enen no Shouboutai",
    caminho: enenNoShouboutai
  },
  {
    nome: "Horimiya",
    caminho: horimiya
  },
  {
    nome: "Tsuki ga Kirei",
    caminho: tsukiGaKirei
  },
  {
    nome: "Death Note",
    caminho: deathNote
  }
];

const HomeAnimes: React.FC = () => (
  <IonApp>
    <IonHeader className="container-ionheader">
      <IonToolbar>
        <IonTitle className="title-header-HomeAnimes">
          Assista
          <br />
          Animes
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <IonList>
        {imgs.map((image, i) => (
          <IonItem className="imgs-home-animes" key={i}>
            <IonThumbnail slot="end">
              <IonImg src={image.caminho} />
            </IonThumbnail>
            <p className="corNomeAnimes">{image.nome}</p>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  </IonApp>
);

export default HomeAnimes;

