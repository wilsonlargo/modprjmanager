
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
    const docRef = await coleccionProyectos.addDoc(coleccionProyectos, objetivo);
    const key = docRef.id;
    //alert(key)
}