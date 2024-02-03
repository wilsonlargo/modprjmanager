const GLOBAL = {};
let KeyActivo = "";
const TempProject = {
    nProyecto: "Nombre proyecto",
    objGProyecto: "Objetivo general del proyecto",
    admProyecto: "Administrador del proyecto",
    vTotalProyecto: "",
    pAvanceGeneral: 0,
    ObjetivosEspecificos: {
        "1":
        {
            Referencia: "O.1",
            Titulo: "Un objetivo específico",
            pAvanceObjetivo: 0,
            Actividades: {
                "1": {
                    Referencia: "A.1.1",
                    nActividad: "nombre actividad 1",
                    Estrategias: {
                        "1": {
                            Referencia: "E.1.1",
                            nEstrategia: "Nombre de la estrategia",
                            indEstrategia: "Nombre de indicador",
                            metaEstrategia: 1,
                            porcEnObjetivo: 0.1,
                            porcCumplimiento: 0,
                            avance: 0
                        },
                    }

                },
            }
        },
    }
};

const PlantillaProyecto = {
    nProyecto: "Nombre proyecto",
    objGProyecto: "Objetivo general del proyecto",
    admProyecto: "Administrador del proyecto",
    vTotalProyecto: "",
    pAvanceGeneral: 0
}

const PlantillaObjetivo = {
    idProyecto: "",
    Referencia: "O.#",
    Titulo: "Un objetivo específico",
    pAvanceObjetivo: 0
}


var DataGlobal = [];