
//Desactiva estos componentes al inicio de la página
document.getElementById("barBorrar").hidden=true;
document.getElementById("divProyectoGeneral").hidden=true;


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
    setPersistence, browserLocalPersistence, browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import { getFirestore, collection, doc, addDoc, setDoc, getDocs, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Usa las claves y accesos de mi db firebase
const firebaseConfig = {
    apiKey: "AIzaSyDpAJ6PAMfIe-fZ5TSh1NO_bi3Gnkk5LWI",
    authDomain: "modtense.firebaseapp.com",
    projectId: "modtense",
    storageBucket: "modtense.appspot.com",
    messagingSenderId: "780787597404",
    appId: "1:780787597404:web:198f32a864505b22812699"
};

// Initializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Hace referencia a la tabla proyectos
const coleccionProyectos = collection(db, "proyectos");


//Creamos una función [addRegistro] interna, que se accede desde el archivo utils
async function addRegistro(objeto) {

    //objeto.nProyecto="Caminos"; //Si deseo colocar un valor antes de crear
    //objeto.nWilson="Caminos"; //Si quiero agregar una propiedad adicional al campo
    //Usa las propiedades importadas en la linea 8  
    const docRef = await addDoc(coleccionProyectos, objeto);   
}

async function delRegistro(key) {
    //Usa las propiedades importadas en la linea 8
    const docRef = await deleteDoc(doc(db, "proyectos", key));
}

async function viewProyects() {
    const Proyectos=[];
    //Limpiamos la variable o array
    // Lee todos los registros de una coleccion y lo guarda en un array con todos los objetos
    //const refDatos = await getDocs(coleccionProyectos);
    const todos = await getDocs(coleccionProyectos)
        .then((querySnapshot) => {
            ;
            querySnapshot.forEach((doc) => {
                Proyectos.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            return Proyectos;
        });
        CrearFichas(Proyectos)
        DataGlobal=Proyectos;
}

//Agregamos en UTILS, a la variable global, las funciones que estan aquí
GLOBAL.addRegistro = addRegistro;
GLOBAL.viewProyects = viewProyects;
GLOBAL.delRegistro = delRegistro;


