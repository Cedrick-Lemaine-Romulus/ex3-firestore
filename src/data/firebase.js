import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  // apiKey: "AIzaSyBDOzSQ32IppQYoxoorH5G7jByzBTuZLeE",
  // authDomain: "clr-react.firebaseapp.com",
  // projectId: "clr-react",
  // storageBucket: "clr-react.appspot.com",
  // messagingSenderId: "985665399748",
  // appId: "1:985665399748:web:ef2120093c846b47bf9291",
  // measurementId: "G-ZJKSJ920JE"
};  

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;