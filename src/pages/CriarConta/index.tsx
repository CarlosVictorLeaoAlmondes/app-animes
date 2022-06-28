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
  IonAlert,
  IonButtons,
  IonSelect,
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

/**
 * Ionic ReactJS Form Management & Validation With Formik
 * https://www.youtube.com/watch?v=ChttRF2p3Bc
 */

/// https://supabase.com/docs/guides/auth/auth-google

import { Field, useFormik, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { useForm } from "react-yup";

const CriarConta: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);

  return (
    <IonApp>
      <IonContent fullscreen className="ion-padding">
        <div className="div-pai-criarconta">
          <div className="div-filha-criarconta">
            
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
};

export default CriarConta;

///routerLink="/HomeFoto"

/*

<IonItem className="container-criarconta">
              <IonLabel>Username ou Email:</IonLabel>
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

*/

/*

const validationSchema = yup.object({
  username: yup
    .string()
    .nullable()
    .min(1)
    .required("Campo obrigatório"),
  senha: yup
    .string()
    .min(6)
    .required("Campo obrigatório"),
  confirmSenha: yup
    .string()
    .min(6)
    .test('passwords-match', 'Passwords must match', function(confirmSenha){
      return this.parent.senha === confirmSenha
    })
    .required("Campo obrigatório"),
});

<Formik
              initialValues={{
                username: null,
                senha: null,
                confirmSenha: null,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {(formikProps) => (
                <IonContent>
                  <form onSubmit={formikProps.handleSubmit}>
                    <IonItem>
                      <IonInput
                        className="cor-ion-input"
                        type="text"
                        name="username"
                        placeholder="Username:"
                        value={formikProps.values.username}
                        onIonChange={formikProps.handleChange}
                      />
                    </IonItem>
                    <p className="error">
                      {formikProps.touched.username &&
                        formikProps.errors.username}
                    </p>
                    <IonItem>
                      <IonInput
                        className="cor-ion-input"
                        type="password"
                        placeholder="Senha:"
                        name="senha"
                        value={formikProps.values.senha}
                        onIonChange={formikProps.handleChange}
                      />
                    </IonItem>
                    <br />
                    <IonItem>
                      <IonInput
                        className="cor-ion-input"
                        type="password"
                        placeholder="Confirmar senha:"
                        name="confirmSenha"
                        value={formikProps.values.confirmSenha}
                        onIonChange={formikProps.handleChange}
                      />
                    </IonItem>
                    <br />
                    <IonButton
                      type="submit"
                      expand="block"
                      onClick={() => setShowAlert1(true)}
                      className="button-cadastrar"
                      color="light"
                    >
                      Cadastrar
                    </IonButton>
                    <IonAlert
                      isOpen={showAlert1}
                      onDidDismiss={() => setShowAlert1(false)}
                      cssClass="my-custom-class"
                      message={"Cadastro feito com sucesso!"}
                      buttons={["OK"]}
                    />
                  </form>
                </IonContent>
              )}
            </Formik>

*/
