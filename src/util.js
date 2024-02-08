const GLOBAL = {
    state: {
        proyecto: null,
        proyectos: [],
    },
    firestore: {},
};

function calcPorcenaje(cumplido, meta) {
    return meta === 0 ? 0 : (cumplido / meta) * 100;
}

const CONSTANTS = {
    indicadores: [
        "DOCUMENTO",
        "JORNADA",
        "PERSONAS",
        "UNIDAD",
        "PESOS",
        "ORGANIZACIÓN",
        "REPORTE",
        "INFORME",
        "ACTA",
        "PORCENTAJE",
    ],
    meses: {
        ENERO: "Enero",
        FEBRERO: "Febrero",
        MARZO: "Marzo",
        ABRIL: "Abril",
        MAYO: "Mayo",
        JUNIO: "Junio",
        JULIO: "Julio",
        AGOSTO: "Agosto",
        SEPTIEMBRE: "Septiembre",
        OCTUBRE: "Octubre",
        NOVIEMBRE: "Noviembre",
        DICIEMBRE: "Diciembre"
    }
}

function addOptions(select, options) {
    options.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}