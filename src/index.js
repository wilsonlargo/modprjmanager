const HTMLf = {
    labelControl(ind,text){
        const controlHTML = document.createElement("div");
        

        controlHTML.innerHTML = `
        <div class="input-group">
            <span class="input-group-text text-white bg-secondary">${ind}</span>
            <input type="text" class="form-control"
            value="${text}" disabled style="background-color: white;">
        </div>
        `

        return controlHTML;
    },
    TextControl(ind,text){
        const controlHTML = document.createElement("div");
        

        controlHTML.innerHTML = `
        <div class="input-group">
            <span class="input-group-text text-white bg-secondary">${ind}</span>
            <textarea type="text" class="form-control"
            disabled style="background-color: white;">${text}</textarea>
        </div>
        `

        return controlHTML;
    }, 


}


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
            <div class="col-2">% EN PROYECTO</div>
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
        colTitulo.appendChild(HTMLf.TextControl(objetivo.enumerador,objetivo.titulo))
        rowObjetivo.appendChild(colTitulo)

        //Creo y agrego una columna con el porcentaje del objetivo
        let colPorcentaje = document.createElement("div");
        colPorcentaje.className = "col-2";
        colPorcentaje.appendChild(HTMLf.labelControl("%",objetivo.porcentaje))
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
            divActividades.className = "";

            //Creo una fila para colocar la actividad y el porcentaje
            let rowActividad = document.createElement("div");
            rowActividad.className = "row align-items-start mt-2 ms-3";

            //Creo y agrego una columna con el nombre de la actividad
            let colNombre = document.createElement("div");
            colNombre.className = "col";
            colNombre.appendChild(HTMLf.TextControl(actividad.enumerador,actividad.nombre))
            rowActividad.appendChild(colNombre)

            //Creo y agrego una columna con el porcentaje de la actividad
            let colPorcentajeAC = document.createElement("div");
            colPorcentajeAC.className = "col-2";
            //colPorcentajeAC.appendChild(HTMLf.TextControl(actividad.enumerador,actividad.nombre))
            //rowActividad.appendChild(colPorcentajeAC)

            //Ahora contamos cuantas evidencias hay
            let objetEvidencias = actividad.evidencias;

            objetEvidencias.forEach(evidencia => {
                //Encabezado para la actividad
                let headEvidencias = document.createElement("div")
                headEvidencias.innerHTML = `
                <div class="row align-items-start ms-3 mt-2 fw-medium text-secondary">
                    <div class="col-7">EVIDENCIA/ESTRATEGIA</div>
                    <div class="col-2">META</div>
                    <div class="col-2">INDICADOR</div>
                    <div class="col-1">%/A</div>
                </div>
                `

                let divEvidencias = document.createElement("div");
                divActividades.className = "ms-3 mt-3";
                //Creo una fila para colocar la evidencia y su información
                let rowEvidencia = document.createElement("div");
                rowEvidencia.className = "row align-items-start mt-3 ms-3 border";

                //Creo y agrego una columna con el nombre de la actividad
                let colEvidencia = document.createElement("div");
                colEvidencia.className = "col-7";
                colEvidencia.textContent = evidencia.enumerador + ". " + evidencia.descripcion;
                rowEvidencia.appendChild(colEvidencia)

                let colMetaEvi = document.createElement("div");
                colMetaEvi.className = "col-2";
                colMetaEvi.textContent = evidencia.meta;
                rowEvidencia.appendChild(colMetaEvi)

                let colIndicadorEvi = document.createElement("div");
                colIndicadorEvi.className = "col-2";
                colIndicadorEvi.textContent = evidencia.indicador;
                rowEvidencia.appendChild(colIndicadorEvi)

                let colPorcentajeEvi = document.createElement("div");
                colPorcentajeEvi.className = "col-1";
                colPorcentajeEvi.textContent = "% " + evidencia.porcentaje;
                rowEvidencia.appendChild(colPorcentajeEvi)


                //Ahora contamos cuantas meses hay
                let objetMeses = evidencia.meses;


                //Creamos encabezados para los meses
                let headMeses = document.createElement("div")
                headMeses.className="row align-items-start mt-2 fw-medium text-secondary ms-2"

                //Creamos una fila larga para colocar meses enlinea
                let rowMeses = document.createElement("div")
                rowMeses.className = "row mt-2 ms-2"

                let rowMetas = document.createElement("div")
                rowMetas.className = "row mt-2 ms-2"

                let rowCumplido = document.createElement("div")
                rowCumplido.className = "row mt-2 ms-2"

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