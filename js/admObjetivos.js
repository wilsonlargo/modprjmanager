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
        const nuevoObjetivoHtml = document.createElement('div');
        //Asigna un id a cada contenedor para usar la propiedad de collapse
        const a = "C" + objetivo.id
        nuevoObjetivoHtml.innerHTML = `
<p class="d-inline-flex gap-1">
  <div class="d-flex justify-content-end p-2 border rounded mb-1 bg-danger"
  data-bs-toggle="collapse" 
    data-bs-target="#${a}" 
    aria-expanded="false">
  <button class="btn btn-outline-danger mb-1 btn-sm text-white" 
      type="button" 
      onclick="borrarObjetivo('${objetivo.id}')">
   <i class="bi bi-trash"></i>
  </button>
</div>
</p>
<div class="collapse" id='${a}'>
  <div class="card card-body">
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
  </div>
</div>
`;
        let ContenedorObjetivos = document.getElementById("divObjetivos");
        ContenedorObjetivos.appendChild(nuevoObjetivoHtml)
    });
}


