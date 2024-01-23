
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
    setPersistence, browserLocalPersistence, browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import { getFirestore, collection, doc, addDoc, setDoc, getDocs, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpAJ6PAMfIe-fZ5TSh1NO_bi3Gnkk5LWI",
    authDomain: "modtense.firebaseapp.com",
    projectId: "modtense",
    storageBucket: "modtense.appspot.com",
    messagingSenderId: "780787597404",
    appId: "1:780787597404:web:198f32a864505b22812699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const coleccionProyectos = collection(db, "proyectos");
const objetivo = {
    nombre: "Nombre objetivo",
    activas: {
        "1": {
            actividad: "nombre actvidad",
            evidencias: [
                "una",
                "dos",
            ]
        }
    }
}

(async () => {   
    // Guardar un objeto e imprimir su id automatico despues de guardar
    const docRef = await addDoc(coleccionProyectos, objetivo);
    const key = docRef.id;
    console.log(key);
    
    // Leer un documento en firebase en la coleccion proyectos con la id "key"
    //const objRef = await getDoc(doc(db, "proyectos", key));
    // Guarda los datos de la referencia del documento que cargamos y de paso le agrega la id
    //const obj = {
      //  id: objRef.id,
        //...objRef.data(),
    //}

    // Lee todos los registros de una coleccion y lo guarda en un array con todos los objetos
    //const refDatos = await getDocs(coleccionProyectos);
    //const datos = refDatos.map(obj => obj.data());

})();
