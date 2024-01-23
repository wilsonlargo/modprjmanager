// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '965466288635-jen140lkpfuo74hvn1put856lbkhcg29.apps.googleusercontent.com';
const API_KEY = 'AIzaSyA7owurVh6Ev4GuK57d6n21NoEqeRcS8gg';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';


let tokenClient;
let gapiInited = false;
let gisInited = false;


function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
}


function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
}

function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    listarDatos();
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

let Fichas;

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

  document.getElementById("lstResGis").innerHTML = "";

  Fichas = [];

  range.values.forEach((concepto) => {
    const nuevaFicha = {
      id: concepto[0],
      categoria: concepto[1],
      subcategoria: concepto[2],
      concepto: concepto[3],
      variable: concepto[4]
    };
    Fichas.push(nuevaFicha);
  });

  CrearFichas(Fichas)

}

async function CrearFichas(datos) {

  (datos).forEach(concepto => {

    //Crea un párrafo
    const inP = document.createElement("input");
    inP.classList.add("form-control");
    inP.value = concepto.categoria;


    //Crea un entorno vinvulo
    const a = document.createElement("a");
    a.href = "#";
    //a.onclick = () => verCaso(registro);
    a.classList.add("list-group-item", "list-group-item-action", "bg-primary", "text-white", "mb-1");

    //Crea un encabezado a la ficha
    const h6 = document.createElement("h6");
    h6.textContent = "ID de la ficha";
    h6.classList.add("mb-1");


    const divA = document.createElement("div");
    divA.classList.add("d-flex", "w-100", "justify-content-between");

    divA.appendChild(h6);
    a.appendChild(divA);

    a.appendChild(inP);

    // Agregar a la lista de resultados
    document.getElementById("lstResGis").appendChild(a);

  });





}

async function editTurno() {
  const nuevaFicha = {
    id: "concepto[0]",
    categoria: "concepto[1]",
    subcategoria: "concepto[2]",
    concepto: "concepto[3]",
    variable: "concepto[4]"
  };
  //Hola
  const filaAEditar = 1;
  let responseA = await gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: '16Lxewlh-ryS6y5d6BPA_HVAqYS4aCuZjq2IaD10mDkk',
    range: 'CONCEPT!A8:E8',
    values: [nuevaFicha],
    valueInputOption:"USER_ENTERED"
  });
  return responseA;
}
