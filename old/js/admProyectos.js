
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
        const nuevoProyectoHtml = document.createElement('div');
        nuevoProyectoHtml.classList.add("rounded", "mt-2", "p-2");
        nuevoProyectoHtml.setAttribute("style", "background-color:#AF7AC5;")
        nuevoProyectoHtml.innerHTML = `
        <div class="">
        <div class="row">
            <div class="col-auto me-auto text-white">
            </div>
            <div class="col-auto"">
                <a href=" #" class="nav-link text-white me-3" onclick="verBarBorrarPrj('${proyecto.id}')">
                <i class="bi bi-trash"></i></a>
            </div>
        </div>
        </div>
        `
        const cProyectoNombre = document.createElement("div");
        const cNombre = document.createElement("p")
        cNombre.classList.add("text-white","rounded", "p-2");
        cNombre.onclick = () => verProyectoGen(proyecto);
        cNombre.setAttribute("style", "background-color:#C39BD3;")
        cNombre.textContent = proyecto.nProyecto;
        cProyectoNombre.appendChild(cNombre)
        nuevoProyectoHtml.appendChild(cProyectoNombre)
        document.getElementById("lstResGis").appendChild(nuevoProyectoHtml);
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

    document.getElementById("tTitulo").textContent=datos.nProyecto;

}



