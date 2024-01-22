// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '965466288635-jen140lkpfuo74hvn1put856lbkhcg29.apps.googleusercontent.com';
const API_KEY = 'AIzaSyA7owurVh6Ev4GuK57d6n21NoEqeRcS8gg';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;

document.getElementById('authorize_button').style.visibility = 'hidden';


function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}

/**
     * Callback after Google Identity Services are loaded.
     */
function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById('authorize_button').style.visibility = 'visible';
  }
}

/**
     *  Sign in the user upon button click.
     */
function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    document.getElementById('signout_button').style.visibility = 'visible';
    document.getElementById('authorize_button').innerText = 'Actualizar';
    await listarDatos();
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: '' });
  }
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
    document.getElementById('content').innerText = '';
    document.getElementById('authorize_button').innerText = 'Ingresar';
    document.getElementById('signout_button').style.visibility = 'hidden';
  }
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
async function listarDatos() {
  let responseDB;
  try {
    // Fetch first 10 files
    responseDB = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '16Lxewlh-ryS6y5d6BPA_HVAqYS4aCuZjq2IaD10mDkk',
      range: 'CONCEPT!A2:E',
    });
  } catch (err) {
    alert(err)
    document.getElementById('content').innerText = err.message;
    return;
  }
  const range = responseDB.result;
  if (!range || !range.values || range.values.length == 0) {
    alert("No se encontraron valores")
    return;
  }
  //Crear uan tabla de meustra
  // Obtener la referencia del elemento dode se inserta la tabla
  var ContenedorTabla = document.getElementById("divTableModal");
  //Limpia el contenido dentro del formulario modal
  document.getElementById("divTableModal").innerHTML = "";

  //Agrega l atabla nueva a la página
  const tablabase = document.getElementById("tbResultados");
  if (tablabase) tablabase.remove();

  const tabla = document.createElement("table");
  const tablaHeader = document.createElement("thead");
  tabla.id = "tbResultados";

  //Creamos el cuerpo de la tabla
  const tablaBody = document.createElement("tbody");

  //Creamos los encabezados
  const Encabezados = document.createElement("tr");

  //Creamos la matriz de encabezados
  const titulos = [
    "ID",
    "CATEGORÍA",
    "SUBCATEGORIA",
    "CONCEPTO",
    "VARIABLE"
  ];

  titulos.forEach(titulo => {
    const elemento = document.createElement("td");
    elemento.textContent = titulo;
    Encabezados.appendChild(elemento);
  });

  //Agregamos los encabezados
  tablaHeader.appendChild(Encabezados);
  tabla.appendChild(tablaHeader);

  const Keys = [
    "ID",
    "CATEGORÍA",
    "SUBCATEGORIA",
    "CONCEPTO",
    "VARIABLE"
  ];


  let i = 1;

  (range.values).forEach(registro => {
    const fila = document.createElement("tr");

    for (var i = 0; i < 5; i++) {
      n += i;
      mifuncion(n);
      var DatoCelta = document.createElement("td");     
      DatoCelta.textContent = registro[i];
    }
    fila.appendChild(DatoCelta);

    //Agrego filas y columnas al cuerpo de la tabla
    tablaBody.appendChild(fila);
    i++;
});

tabla.appendChild(tablaBody);
ContenedorTabla.appendChild(tabla);
tabla.classList.add("table", "table-striped", "table-hover");
tablaHeader.classList.add("table-dark", "fw-bold");

}

