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
  listarDatos();
}


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

  document.getElementById("divTableModal").innerHTML = "";

  
  CrearFichas(range.values)

}

async function CrearFichas(datos) {

  (datos).forEach(registro => {

//Crea un párrafo
const inP = document.createElement("input");
inP.classList.add("form-control");
inP.textContent = registro[0];


//Crea un entorno vinvulo
const a = document.createElement("a");
a.href = "#";
//a.onclick = () => verCaso(registro);
a.classList.add("list-group-item", "list-group-item-action");

//Crea un encabezado a la ficha
const h6 = document.createElement("h6");
h6.textContent = "ID de la ficha";
h6.classList.add("mb-1");

const sm = document.createElement("small");
sm.classList.add("text-muted");
sm.textContent = "Texto ad";

const divA = document.createElement("div");
divA.classList.add("d-flex", "w-100", "justify-content-between");

divA.appendChild(h6);
divA.appendChild(sm);
a.appendChild(divA);

a.appendChild(p);

// Agregar a la lista de resultados
document.getElementById("lstResGis").appendChild(a);

  });


  


}

