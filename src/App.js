import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";
import { useLocalStorage } from "./hooks";
import BiorhythmCard from "./components/BiorhythmCard";

function App() {
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && targetDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime
            onIonChange={(e) => {
              setBirthDate(e.detail.value);
            }}
            value={birthDate}
            displayFormat="D MMM YYYY"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime
            onIonChange={(e) => {
              setTargetDate(e.detail.value);
            }}
            value={targetDate}
            displayFormat="D MMM YYYY"
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
