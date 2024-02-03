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
    const tObjetivo = "T" + objetivo.id
    nuevoObjetivoHtml.innerHTML = `
<p class="d-inline-flex">
  <div class="d-flex 
      justify-content-end p-2 border rounded"
      data-bs-toggle="collapse"
      data-bs-target="#${a}" 
      aria-expanded="false"
      style="background-color: #D7BDE2;">

      <h5 id="${tObjetivo}" class="" style="color:#8E44AD";>${objetivo.Referencia + ". " + objetivo.Titulo}</h5>

      <button class="btn btn-sm"
      style="color:#884EA0"
        type="button" 
        onclick="borrarObjetivo('${objetivo.id}')">
        <i class="bi bi-trash"></i>
    </button>
  </div>
</p>

<div class="collapse" id='${a}'>
  <div class="card card-body" style="background-color: #FEF9E7;">
  <div class="row" ">
  <div class="col-md-2">
      <form class="form-floating mb-2">
          <input
            id="${"ref|" + objetivo.id}"
            onchange="readControl('${"ref|" + objetivo.id}')"
            type="text" class="form-control" value='${objetivo.Referencia}'>
          <label for="floatingInputValue">Referencia</label>
      </form>
  </div>
  <div class="col-md-8">
      <form class="form-floating mb-2">
          <textarea 
            id="${"tit|" + objetivo.id}"
            onchange="readControl('${"tit|" + objetivo.id}')"
            class="form-control" 
            style="height: 90px">${objetivo.Titulo}</textarea>

          <label for="floatingInputValue">Objetivo</label>
      </form>
  </div>  
  <div class="col-md-2">
  <form class="form-floating mb-2">
      <input 
        id="${"ava|" + objetivo.id}"
        onchange="readControl('${"ava|" + objetivo.id}')"
        type="text" 
        class="fs-1 form-control" value='${objetivo.pAvanceObjetivo}'
        style="height: 90px">
      <label for="floatingInputValue">% Avance</label>
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

function readControl(id) {
  const Listas = id.split('|');
  document.getElementById("T"+Listas[1])
  .textContent=
  document.getElementById("ref|"+ Listas[1]).value + ". " +
  document.getElementById("tit|"+ Listas[1]).value

  const funcionGlobal = GLOBAL.GuardarObjetivo(Listas[1])
}

