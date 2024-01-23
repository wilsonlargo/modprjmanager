async function crear() {
        // Guardar un objeto e imprimir su id automatico despues de guardar
        const docRef = await addDoc(coleccionProyectos, objetivo);
        const key = docRef.id;
        console.log(key);
    alert("hola")
}