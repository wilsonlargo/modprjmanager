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
        //Agregar un encabezado por cada objetivo, para identificar las partes

        let headObjetivos = document.createElement("div")
        headObjetivos.innerHTML = `
        <div class="row align-items-start ms-3 mb-2 fw-medium text-secondary">
            <div class="col">OBJETIVO</div>
            <div class="col">PONDERADO EN EL PROYECTO</div>
        </div>
        `


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
        colPorcentaje.className = "col";
        colPorcentaje.textContent = " % " + objetivo.porcentaje;
        rowObjetivo.appendChild(colPorcentaje)

        //Contar cuantas actividades hay en este objetivo
        let objetActividades = objetivo.actividades;
        objetActividades.forEach(actividad => {
            //Encabezado para la actividad
            let headActividades = document.createElement("div")
            headActividades.innerHTML = `
            <div class="row align-items-start ms-3 mt-2 fw-medium text-secondary">
                <div class="col">ACTIVIDADES</div>
            </div>
            `


            let divActividades = document.createElement("div");
            divActividades.className = "ms-3";

            //Creo una fila para colocar la actividad y el porcentaje
            let rowActividad = document.createElement("div");
            rowActividad.className = "row align-items-start mt-2 ms-3";

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
            let objetEvidencias = actividad.evidencias;

            objetEvidencias.forEach(evidencia => {
                //Encabezado para la actividad
                let headEvidencias = document.createElement("div")
                headEvidencias.innerHTML = `
                <div class="row align-items-start ms-3 mt-2 fw-medium text-secondary">
                    <div class="col">EVIDENCIA/ESTRATEGIA</div>
                    <div class="col">META</div>
                    <div class="col">INDICADOR</div>
                    <div class="col">PONDERADO EN LA ACTIVIDAD</div>
                </div>
                `

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
                colPorcentajeEvi.textContent = "Ponderado en el objetivo %" + evidencia.porcentaje;
                rowEvidencia.appendChild(colPorcentajeEvi)


                //Ahora contamos cuantas meses hay
                let objetMeses = evidencia.meses;


                //Creamos encabezados para los meses
                let headMeses = document.createElement("div")
                headMeses.className="row align-items-start mt-2 fw-medium text-secondary ms-4"

                //Creamos una fila larga para colocar meses enlinea
                let rowMeses = document.createElement("div")
                rowMeses.className = "row mt-2 ms-4"

                let rowMetas = document.createElement("div")
                rowMetas.className = "row mt-2 ms-4"

                let rowCumplido = document.createElement("div")
                rowCumplido.className = "row mt-2 ms-4"

                objetMeses.forEach(mes => {
                    let dt = new Date(mes.fecha)
                    let cHMes = document.createElement("div")
                    cHMes.className = "col"
                    cHMes.textContent = dt.toLocaleString('default', { month: 'long' })
                    headMeses.appendChild(cHMes)


                    //Creamos las columnas pormes para agreagr a la fila
                    let cMes = document.createElement("div")
                    cMes.className = "col"
                    cMes.textContent = "Fecha: " + mes.fecha
                    rowMeses.appendChild(cMes)

                    let cMeta = document.createElement("div")
                    cMeta.className = "col"
                    cMeta.textContent = "Meta: " + mes.meta
                    rowMetas.appendChild(cMeta)

                    let cCumpl = document.createElement("div")
                    cCumpl.className = "col"
                    cCumpl.textContent = "Cumplimiento: " + mes.cumplido
                    rowCumplido.appendChild(cCumpl)



                    
                });



                
                rowActividad.appendChild(headEvidencias)
                rowActividad.appendChild(rowEvidencia)
                
                rowEvidencia.appendChild(headMeses)
                rowEvidencia.appendChild(rowMeses)
                rowEvidencia.appendChild(rowMetas)
                rowEvidencia.appendChild(rowCumplido)
                

                



            });


            rowObjetivo.appendChild(headActividades)
            rowObjetivo.appendChild(rowActividad)
        })

        docDiv.appendChild(headObjetivos)
        docDiv.appendChild(rowObjetivo)

    });

}