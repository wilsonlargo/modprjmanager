function NuevoObjetivo() {
    // Creamos una nueva tabla de proyectos
    const funcionGlobal = GLOBAL.NuevoObjetivo();
}

function borrarObjetivo(id) {
    const funcionGlobal = GLOBAL.borrarObjetivo(id);
}




function CrearFichasObjetivos(data) {

    document.getElementById("divObjetivos").innerHTML = "";
    data.forEach(objetivo => {
        //CREAR UN CONTENEDOR POR CADA OBJETIVO DEL PROYECTO

        const nuevoObjetivo = document.createElement('div');
        nuevoObjetivo.innerHTML = `
        <div class="border rounded p-2 my-3 objetivo">
            <div class="d-flex justify-content-end p-2 border rounded mb-1 bg-danger">
                <button class="btn btn-outline-danger mb-1 btn-sm text-white" 
                    type="button" 
                    onclick="borrarObjetivo('${objetivo.id}')">
                 <i class="bi bi-trash"></i>
                </button>
             </div>

             <div class="row">
             <div class="col-md-2">
             <form class="form-floating mb-2">
             <input type="text" class="form-control" value='${objetivo.Referencia}'>
             <label for="floatingInputValue">Referencia</label>
            </form>
             </div>
             <div class="col-md-9">
             <form class="form-floating mb-2">
             <input type="text" class="form-control" value='${objetivo.Titulo}'>
             <label for="floatingInputValue">Objetivo</label>
            </form>
             </div>
           </div>




            
        </div>`;


        let ContenedorObjetivos = document.getElementById("divObjetivos");

        ContenedorObjetivos.appendChild(nuevoObjetivo)


    });
}


