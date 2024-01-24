import { getFirestore, collection, doc, addDoc, setDoc, getDocs, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

async function crear() {

    const objetivo = {
        nombre: "Nombre objetivo",
        actividad: {
            "1": {
                actividad: "nombre actvidad",
                evidencias: [
                    "UNO",
                    "DOS",
                ]
            }
        }
    }

    // Guardar un objeto e imprimir su id automatico despues de guardar
    const docRef = await addDoc(coleccionProyectos, objetivo);
    const key = docRef.id;
    alert(key)
}