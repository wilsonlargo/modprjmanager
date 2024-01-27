
function NuevoProyecto() {
    // Creamos una nueva tabla de proyectos
    const funcionGlobal = GLOBAL.NuevoProyecto();
}
var VarKey;

function BorrarProyecto(id) {
// Borramos la tabla de proyectos activa
    const funcionGlobal = GLOBAL.BorrarProyecto(VarKey);
    // Muestro los proyectos
    const funcionGlobal2 = GLOBAL.verProyectos();
    document.getElementById("barBorrar").hidden = true;
    verProyectos()
}

function verProyectos() {
    document.getElementById("divProyectoGeneral").hidden = true;
    document.getElementById("VisorProyectosFicha").hidden = false;
    const docRef = GLOBAL.verProyectos();
}

function CrearFichas(datos) {
    document.getElementById("lstResGis").innerHTML = "";
    datos.forEach(proyecto => {
        //Crear un contenedor mayor/geneal por cada ficha.
        const divFicha = document.createElement("div");
        divFicha.classList.add("w-100", "mb-2", "rounded");
        divFicha.setAttribute("style", "background-color:#AF7AC5;")

        //Creamos un contenedor/barra de los textos/botones de acciones
        const divBarFicha = document.createElement("div");
        divBarFicha.classList.add("d-flex", "w-100", "flex-row-reverse", "p-2");

        //Creamos el botón ver proyecto
        const bVer = document.createElement("small");
        bVer.classList.add("text-white", "ms-2");
        bVer.textContent = "Ver";
        bVer.onclick = () => verProyectoGen(proyecto);

        //Creamos el botón eliminar proyecto
        const bEliminar = document.createElement("small");
        bEliminar.classList.add("text-white");
        bEliminar.textContent = "Eliminar";
        bEliminar.onclick = () => verBarBorrarPrj(proyecto.id);

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


function verBarBorrarPrj(id) {
    document.getElementById("barBorrar").hidden = false;
    VarKey = id
}
function hideBarBorrarPrj() {
    document.getElementById("barBorrar").hidden = true;
    VarKey = ""
}

function verProyectoGen(datos) {
    KeyActivo=datos.id;
    document.getElementById("VisorProyectosFicha").hidden = true;
    document.getElementById("divProyectoGeneral").hidden = false;
    document.getElementById("divObjetivos").innerHTML="";

    //Cargamos los datos iniciales del proyecto en los input
    const inpNombreProyecto = document.getElementById("inputNProyecto")
    inpNombreProyecto.value=datos.nProyecto;

    const inpObjetivoGProyecto = document.getElementById("inputObjGeneral")
    inpObjetivoGProyecto.value=datos.objGProyecto;

    const inpAdministradorProyecto = document.getElementById("inputAdministrador")
    inpAdministradorProyecto.value=datos.admProyecto;

    //Carga los objetivos del proyecto activo
    const docRef=GLOBAL.LoadObjetivos(KeyActivo)

}



