const vue = new Vue({
    el: '#app',
    data: {
        listaDatos: []
    },
    created() {
        this.getLista()
    },
    methods: {
        recargar() {
            console.log("recargando");
            this.getLista()
        },
        getLista() {
            // id de la hoja de calculo
            idSheets = '16Lxewlh-ryS6y5d6BPA_HVAqYS4aCuZjq2IaD10mDkk';
            //// nuestra      APIKey
            apiKey = 'AIzaSyB929NDkpYyz0bc0qYzUZ9Gx-zQsnNbsmc';
            // rango de la hoja de calculo que queremos leer
            values = 'A2:E20';
            // fetch es un método nativo para hacer peticiones http
            // en el navegador 
            fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" + idSheets + "/values/A2:AZ100?access_token=" + apiKey + "&key=" + apiKey)
                .then((lista) => {
                    return lista.json()
                }).then((valores) => {
                    this.listaDatos = valores.values
                }).catch(err => {
                    console.log(err);
                })
        } // fin funcion getLista()
    } // fin methods
}) // fin instancia