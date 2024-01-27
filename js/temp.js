


//Creamos una función [addRegistro] interna, que se accede desde el archivo utils
async function addRegistro(Plantilla) {

    //Usa las propiedades importadas en la linea 8  
    const docRef = await addDoc(coleccionProyectos, Plantilla);
}

async function delRegistro(key) {
    //Usa las propiedades importadas en la linea 8
    const docRef = await deleteDoc(doc(db, "proyectos", key));
}




async function viewProyects() {
    const Proyectos = [];
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
    DataGlobal = Proyectos;
}

//Agregamos en UTILS, a la variable global, las funciones que estan aquí

GLOBAL.viewProyects = viewProyects;
GLOBAL.delRegistro = delRegistro;
GLOBAL.updateRegistro = updateRegistro;