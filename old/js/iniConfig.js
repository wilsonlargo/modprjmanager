// Desactiva estos componentes al inicio de la página
document.getElementById("barBorrar").hidden = true;
document.getElementById("divProyectoGeneral").hidden = true;

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
    getFirestore,
    collection,
    doc,
    addDoc,
    setDoc,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
    deleteField,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Utiliza las claves y credenciales de mi base de datos de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDpAJ6PAMfIe-fZ5TSh1NO_bi3Gnkk5LWI",
    authDomain: "modtense.firebaseapp.com",
    projectId: "modtense",
    storageBucket: "modtense.appspot.com",
    messagingSenderId: "780787597404",
    appId: "1:780787597404:web:198f32a864505b22812699"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencia a la tabla de proyectos
const coleccionProyectos = collection(db, "proyectos");
const coleccionObjetivos = collection(db, "objetivos");

// Función para crear proyectos
async function NuevoProyecto() {
    const docRef = await addDoc(coleccionProyectos, PlantillaProyecto);
    verProyectos();
}

// Función para borrar proyectos por id
async function BorrarProyecto(id) {
    const docRef = await deleteDoc(doc(db, "proyectos", id));
}

// Función para guardar datos del proyecto
async function GuardarProyecto(keyActivo) {
    const nProyecto = document.getElementById("inputNProyecto").value;
    const objGProyecto = document.getElementById("inputObjGeneral").value;
    const admProyecto = document.getElementById("inputAdministrador").value;
    document.getElementById("tTitulo").textContent = nProyecto;

    const ref = doc(db, "proyectos", keyActivo);
    await updateDoc(ref, {
        nProyecto: nProyecto,
        objGProyecto: objGProyecto,
        admProyecto: admProyecto,
    });
}

// Función para guardar datos del objetivo
async function GuardarObjetivo(key) {
    const ref = doc(db, "objetivos", key);
    await updateDoc(ref, {
        Referencia: document.getElementById("ref|" + key).value,
        Titulo: document.getElementById("tit|" + key).value,
        pAvanceObjetivo: document.getElementById("ava|" + key).value,
    });
}

// Función para obtener todos los proyectos de la base de datos
async function verProyectos() {
    const proyectos = [];
    const querySnapshot = await getDocs(coleccionProyectos)
    querySnapshot.forEach((doc) => {
        proyectos.push({
            ...doc.data(),
            id: doc.id,
        });
    });
    CrearFichas(proyectos);
}

// Función para crear objetivos
async function NuevoObjetivo() {
    PlantillaObjetivo.idProyecto = KeyActivo;
    const docRef = await addDoc(coleccionObjetivos, PlantillaObjetivo);
    LoadObjetivos(KeyActivo);
}

// Función para borrar objetivos por id
async function borrarObjetivo(id) {
    const docRef = await deleteDoc(doc(db, "objetivos", id));
    LoadObjetivos(KeyActivo);
}

// Función para obtener los objetivos
async function LoadObjetivos(keyActivo) {
    const Objetivos = [];
    const todos = await getDocs(coleccionObjetivos).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            Objetivos.push({
                ...doc.data(),
                id: doc.id,
            });
        });
        return Objetivos;
    });

    const filtrado = Objetivos.filter(
        (proyecto) => proyecto.idProyecto == keyActivo
    );
    CrearFichasObjetivos(filtrado);
}

// Exponer las funciones globalmente
GLOBAL.LoadObjetivos = LoadObjetivos;
GLOBAL.NuevoProyecto = NuevoProyecto;
GLOBAL.BorrarProyecto = BorrarProyecto;
GLOBAL.GuardarProyecto = GuardarProyecto;
GLOBAL.borrarObjetivo = borrarObjetivo;
GLOBAL.NuevoObjetivo = NuevoObjetivo;
GLOBAL.verProyectos = verProyectos;
GLOBAL.GuardarObjetivo = GuardarObjetivo;