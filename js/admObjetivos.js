function NuevoObjetivo() {
    // Creamos una nueva tabla de proyectos
    const funcionGlobal = GLOBAL.NuevoObjetivo();
    // Muestro los proyectos
    //const funcionGlobal2 = GLOBAL.verObjetivos()
}



function CrearFichasObjetivos(data) {

    document.getElementById("divObjetivos").innerHTML = "";
    data.forEach(objetivo => {
        //CREAR UN CONTENEDOR POR CADA OBJETIVO DEL PROYECTO

        //Primero creamos el contenedor general del objetivo
        const divObjetivo = document.createElement("div");
        divObjetivo.classList.add("mb-2", "p-2");
        divObjetivo.setAttribute("style", "background-color:#AEB6BF;");

        //Ahora colocamos el objetivo dentro de un input
        const inputTextRef = document.createElement("input");
        inputTextRef.classList.add("text-white", "form-control");
        inputTextRef.setAttribute("style", "background-color:#AEB6BF;");
        inputTextRef.value = objetivo.Referencia;

        //Ahora colocamos el objetivo dentro de un input
        const inputText = document.createElement("input");
        inputText.classList.add("text-white", "form-control");
        inputText.setAttribute("style", "background-color:#AEB6BF;");
        inputText.value = objetivo.Titulo;

        //Agregamos el texto a la barra
        divObjetivo.appendChild(inputTextRef);
        divObjetivo.appendChild(inputText);


        const nuevoObjetivo = document.createElement('div');
        nuevoObjetivo.innerHTML = `
        <div class="border rounded p-2 my-3 objetivo" style="background-color: #D7BDE2;">
            <div class="d-flex justify-content-end">
                <button class="btn btn-outline-danger mb-2 btn-sm" 
                    type="button" 
                    onclick="borrarObjetivo(${objetivo.id})">
                 <i class="bi bi-trash"></i>
                </button>
             </div>

            <form class="form-floating mb-2">
             <input type="text" class="form-control" value=${objetivo.Referencia}>
             <label for="floatingInputValue">Referencia</label>
            </form>

            <form class="form-floating mb-2">
            <input type="text" class="form-control" value=${objetivo.Titulo}>
            <label for="floatingInputValue">Objetivo</label>
           </form>
            
        </div>`;


        let ContenedorObjetivos = document.getElementById("divObjetivos");

        ContenedorObjetivos.appendChild(nuevoObjetivo)


    });
}


