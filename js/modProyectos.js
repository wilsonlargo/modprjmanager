//Administra acciones en un proyecto específico
function verProyectoGen(datos) {
    document.getElementById("VisorProyectosFicha").hidden = true;
    document.getElementById("divProyectoGeneral").hidden = false;
    document.getElementById("divObjetivos").innerHTML="";

    //Cargamos los datos iniciales del proyecto en los input
    const inpNombreProyecto = document.getElementById("inputNProyecto")
    inpNombreProyecto.value=datos.nProyecto;
    inpNombreProyecto.onchange= () => ChangeData(inpNombreProyecto,datos);

    const inpObjetivoGProyecto = document.getElementById("inputObjGeneral")
    inpObjetivoGProyecto.value=datos.objGProyecto;

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
            //alert(Actividad);

            //Almacenamos las estrategias que dependen de esta actividad
            let iEstrategias = iActividades[keyActiv].Estrategias;
            let Estrategias = Object.keys(iEstrategias);
            //Contamos o enumeramos las entretegias dentro de cada actividad
            for (const keyEstr of Estrategias) {
                const Estrategia = iEstrategias[keyEstr].nEstrategia;
                //alert(Estrategia);
            }
        }
    }


    //alert(DataGlobal.id[0].especifico[0].textoobjetivo)
}
//Debe modificar el campo en la base de datos caundo hay cambios en el input
async function ChangeData(cInput,data){
data.nProyecto="hola este lo cambie"

//alert(cInput.value)

}