function mostrarPlano() {
    document.getElementById("contenedor-proyecto").hidden = true;
    let docDiv = document.getElementById("docPlain");
    docDiv.innerHTML = "";

    docDiv.hidden = false;

    let titulo = document.createElement("div");
    titulo.textContent = GLOBAL.state.proyecto.titulo;
    titulo.className = "h5 text-center mb-4";
    docDiv.appendChild(titulo)

    let objetObjetivos = GLOBAL.state.proyecto.objetivos;

    objetObjetivos.forEach(objetivo => {
        //Creo div por cada objetivo
        let divObjetivo = document.createElement("div");

        //Creo uan fila para colocar el objetivo y el porcentaje
        let rowObjetivo = document.createElement("div");
        rowObjetivo.className = "row align-items-start ms-3 mb-2";

        //Creo y agrego una columna con el titulo del objetivo
        let colTitulo = document.createElement("div");
        colTitulo.className = "col";
        colTitulo.textContent = objetivo.enumerador + " " + objetivo.titulo;
        rowObjetivo.appendChild(colTitulo)

        //Creo y agrego una columna con el porcentaje del objetivo
        let colPorcentaje = document.createElement("div");
        colPorcentaje.className = "col fs-3";
        colPorcentaje.textContent = " % " + objetivo.porcentaje;
        rowObjetivo.appendChild(colPorcentaje)

        //Contar cuantas actividades hay en este objetivo
        let objetActividades = objetivo.actividades;;
        objetActividades.forEach(actividad => {
            let divActividades = document.createElement("div");
            divActividades.className = "ms-3";

            //Creo una fila para colocar la actividad y el porcentaje
            let rowActividad = document.createElement("div");
            rowActividad.className = "row align-items-start mt-2";

            //Creo y agrego una columna con el nombre de la actividad
            let colNombre = document.createElement("div");
            colNombre.className = "col";
            colNombre.textContent = actividad.enumerador + " " + actividad.nombre;
            rowActividad.appendChild(colNombre)

            //Creo y agrego una columna con el porcentaje de la actividad
            let colPorcentajeAC = document.createElement("div");
            colPorcentajeAC.className = "col fs-3 text-success";
            colPorcentajeAC.textContent = "";
            rowActividad.appendChild(colPorcentajeAC)

            //Ahora contamos cuantas evidencias hay
            let objetEvidencias = actividad.evidencias;;

            objetEvidencias.forEach(evidencia => {
                let divEvidencias = document.createElement("div");
                divActividades.className = "ms-3 mt-3";
                //Creo una fila para colocar la evidencia y su información
                let rowEvidencia = document.createElement("div");
                rowEvidencia.className = "row align-items-start mt-3 ms-3";

                //Creo y agrego una columna con el nombre de la actividad
                let colEvidencia = document.createElement("div");
                colEvidencia.className = "col";
                colEvidencia.textContent = evidencia.enumerador + ". " + evidencia.descripcion;
                rowEvidencia.appendChild(colEvidencia)

                let colMetaEvi = document.createElement("div");
                colMetaEvi.className = "col";
                colMetaEvi.textContent = evidencia.meta;
                rowEvidencia.appendChild(colMetaEvi)

                let colIndicadorEvi = document.createElement("div");
                colIndicadorEvi.className = "col";
                colIndicadorEvi.textContent = evidencia.indicador;
                rowEvidencia.appendChild(colIndicadorEvi)

                let colPorcentajeEvi = document.createElement("div");
                colPorcentajeEvi.className = "col";
                colPorcentajeEvi.textContent = "Avance del %" + evidencia.porcentaje;
                rowEvidencia.appendChild(colPorcentajeEvi)

                rowActividad.appendChild(rowEvidencia)

            });

            rowObjetivo.appendChild(rowActividad)
        })

        docDiv.appendChild(rowObjetivo)

    });

}