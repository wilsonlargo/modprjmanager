
function crear() {
    // Guardar un objeto e imprimir su id automatico despues de guardar
    const docRef = GLOBAL.addRegistro(TempProject);
    const docRef2 = GLOBAL.viewProyects()
}
var VarKey;


function borrar(Key) {
    // Guardar un objeto e imprimir su id automatico despues de guardar
    const docRef = GLOBAL.delRegistro(VarKey);
    const docRef2 = GLOBAL.viewProyects();
    document.getElementById("barBorrar").hidden = true;
}

function verProyectos() {
    document.getElementById("divProyectoGeneral").hidden = true;
    document.getElementById("VisorProyectosFicha").hidden = false;
    const docRef = GLOBAL.viewProyects();
}

function CrearFichas(datos) {
    document.getElementById("lstResGis").innerHTML = "";
    datos.forEach(proyecto => {
        //Crear un contenedor mayor/geneal por cada ficha.
        const divFicha = document.createElement("div");
        divFicha.classList.add("w-100", "mb-2");
        divFicha.setAttribute("style", "background-color:#AF7AC5;")

        //Creamos un contenedor/barra de los textos/botones de acciones
        const divBarFicha = document.createElement("div");
        divBarFicha.classList.add("d-flex", "w-100", "flex-row-reverse", "p-2");

        //Creamos el botón ver proyecto
        const bVer = document.createElement("small");
        bVer.classList.add("text-white", "ms-2");
        bVer.textContent = "Ver";
        bVer.onclick = () => verProyectoGen(proyecto)

        //Creamos el botón eliminar proyecto
        const bEliminar = document.createElement("small");
        bEliminar.classList.add("text-white");
        bEliminar.textContent = "Eliminar";
        bEliminar.onclick = () => verBarBorrarPrj(proyecto.id)

        //Agregamos los botones/texto la barra de botones
        divBarFicha.appendChild(bVer)
        divBarFicha.appendChild(bEliminar)

        //Agregamos los la barra de botones al contenedor ficha
        divFicha.appendChild(divBarFicha);
        divFicha.appendChild(divBarFicha);



        //Creamos un contendor del contenido de la ficha
        const divFichaTexto = document.createElement("div");
        divFichaTexto.classList.add("d-flex", "w-100");
        divFichaTexto.setAttribute("style", "background-color:#C39BD3;")

        //Creamos un texto para nombre del proyecto
        const tNombreProyecto = document.createElement("h6");
        tNombreProyecto.classList.add("text-white", "ms-3", "mb-3");
        const nomProyecto = proyecto.nProyecto;
        tNombreProyecto.textContent = nomProyecto;

        //Agregamos el texto 1 a la ficha
        divFichaTexto.appendChild(tNombreProyecto);
        //Agregamos el agregamos el contenedor a la ficha mayor
        divFicha.appendChild(divFichaTexto);




        // Agregar las fichas al contenedor de fichas
        document.getElementById("lstResGis").appendChild(divFicha);
    })
}

function verProyectoGen(datos) {
    document.getElementById("VisorProyectosFicha").hidden = true;
    document.getElementById("divProyectoGeneral").hidden = false;
    document.getElementById("divObjetivos").innerHTML="";

    //Guarda en variable la colección de objetivos específicos del
    // proyecto seleccionado.
    let iObjetivos_Especificos = datos.ObjetivosEspecificos

    //Inicio la lectura de objetivos especificos dentro de la colección
    //Identifica las claves dentro de esa colección.
    for (const keyObj in iObjetivos_Especificos) {
        //El valor encontrado por secuencia lo almacena en un
        // variable de objetivo individual
        const Objetivos = iObjetivos_Especificos[keyObj];

        //CREAR UN CONTENEDOR POR CADA OBJETIVO DEL PROYECTO

        //Primero creamos el contenedor general del objetivo
        const divObjetivo = document.createElement("div");
        divObjetivo.classList.add("mb-2","p-2");
        divObjetivo.setAttribute("style", "background-color:#AEB6BF;");

        //Ahora colocamos el objetivo dentro de un input
        const inputText = document.createElement("input");
        inputText.classList.add("text-white","form-control");
        inputText.setAttribute("style", "background-color:#AEB6BF;");
        inputText.value = Objetivos.Titulo;

        //Agregamos el texto a la barra
        divObjetivo.appendChild(inputText);

       
        let ContenedorObjetivos = document.getElementById("divObjetivos");

        ContenedorObjetivos.appendChild(divObjetivo)

        //El objetivo o elemento actual o activo + su propiedad actividad dentro del contador
        // se almacena en una variable de actividad. 
        let iActividades = Objetivos.Actividades;
        //Identificamos cuantos elementos están dentro de esa coleccion de actividades
        let Actividades = Object.keys(iActividades);

        for (const keyActiv of Actividades) {
            
            //Actividad por actividad se va mostrando en esta varaible
            const Actividad = iActividades[keyActiv].nActividad;
            alert(Actividad);

            //Almacenamos las estrategias que dependen de esta actividad
            let iEstrategias = iActividades[keyActiv].Estrategias;
            let Estrategias = Object.keys(iEstrategias);
            //Contamos o enumeramos las entretegias dentro de cada actividad
            for (const keyEstr of Estrategias) {
                const Estrategia = iEstrategias[keyEstr].nEstrategia;
                alert(Estrategia);


            }




        }



    }


    //alert(DataGlobal.id[0].especifico[0].textoobjetivo)
}

function verBarBorrarPrj(key) {
    document.getElementById("barBorrar").hidden = false;
    VarKey = key
}
function hideBarBorrarPrj() {
    document.getElementById("barBorrar").hidden = true;
    VarKey = ""
}



