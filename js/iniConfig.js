
//Desactiva estos componentes al inicio de la página
document.getElementById("barBorrar").hidden = true;
document.getElementById("divProyectoGeneral").hidden = true;


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
    setPersistence, browserLocalPersistence, browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import { getFirestore, collection, doc, addDoc, setDoc, getDocs, getDoc, deleteDoc, updateDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

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
const coleccionObjetivos = collection(db, "objetivos");

//Función para crear proyectos
async function NuevoProyecto() {
    //Usa las propiedades importadas en la linea 8  
    const docRef = await addDoc(coleccionProyectos, PlantillaProyecto);
    verProyectos()
}
GLOBAL.NuevoProyecto = NuevoProyecto;

async function BorrarProyecto(id) {
    //Función global para borrar proyectos por su id
    const docRef = await deleteDoc(doc(db, "proyectos", id));
}
GLOBAL.BorrarProyecto = BorrarProyecto;

async function GuardarProyecto(keyActivo) {
    const nProyecto = document.getElementById("inputNProyecto").value;
    const objGProyecto = document.getElementById("inputObjGeneral").value;
    const admProyecto = document.getElementById("inputAdministrador").value;
    document.getElementById("tTitulo").textContent=nProyecto;

    //Guardamos los datos del proyecto, datos generales
    const ref = doc(db, "proyectos", keyActivo)
    await updateDoc(
        ref, {
        nProyecto: nProyecto,
        objGProyecto: objGProyecto,
        admProyecto: admProyecto,
    })
}
GLOBAL.GuardarProyecto = GuardarProyecto;

async function GuardarObjetivo(key){
    const ref = doc(db, "objetivos", key)
    await updateDoc(
        ref, {
        Referencia: document.getElementById("ref|"+key).value,
        Titulo: document.getElementById("tit|"+key).value,
        pAvanceObjetivo:document.getElementById("ava|"+key).value
})
}
GLOBAL.GuardarObjetivo = GuardarObjetivo;


async function verProyectos() {
    const Proyectos = [];
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

}
GLOBAL.verProyectos = verProyectos;

//*******************************************************************************//
//Sección para los objetivos

//Función para crear objetivos
async function NuevoObjetivo() {
    //Creamos una tabla objetivo con una plantilla objetivo
    PlantillaObjetivo.idProyecto = KeyActivo;
    const docRef = await addDoc(coleccionObjetivos, PlantillaObjetivo);
    LoadObjetivos(KeyActivo)
}
GLOBAL.NuevoObjetivo = NuevoObjetivo;

//Función borrar objetivos
async function borrarObjetivo(id) {
    //Función global para borrar objetivos por su id

    const docRef = await deleteDoc(doc(db, "objetivos", id));
    LoadObjetivos(KeyActivo)
}
GLOBAL.borrarObjetivo = borrarObjetivo;


async function LoadObjetivos(keyActivo) {
    const Objetivos = [];
    const todos = await getDocs(coleccionObjetivos)
        .then((querySnapshot) => {
            ;
            querySnapshot.forEach((doc) => {
                Objetivos.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            return Objetivos;
        });

    // FIltra segun una condicion true o false
    const filtrado = Objetivos.filter(proyecto => proyecto.idProyecto == keyActivo)
    CrearFichasObjetivos(filtrado)
}
GLOBAL.LoadObjetivos = LoadObjetivos;