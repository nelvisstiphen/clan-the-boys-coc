/* // Importamos Express y Axios
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 3000;

// Configuramos Express para servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public"))); */

/* const COC_API_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJhYmMyMTU5LTRmMGMtNDc1ZS04ODE3LTRmMjA0ZjhhMmZmZiIsImlhdCI6MTczMjQxMzUzOSwic3ViIjoiZGV2ZWxvcGVyLzgyZmNjNmNkLTA5ZmYtZDNhMS1hNDdlLTJiNTcwYmZlMzA3NiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Mi4yMDIuOTQuMjI3Il0sInR5cGUiOiJjbGllbnQifV19.RjSP_76dzjbz6xYt9Sf_Zyau_qP4xBtsc9Fcm9YTJfC82FZ3IWdpcBp1wbAIrH5m3q_m-dMU9Pqhf-y4Jdzseg";

const clashApi = require("clash-of-clans-api");

let client = clashApi({
  token: COC_API_TOKEN, // Optional, can also use COC_API_TOKEN env variable
});

async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag);
    console.log("this is the player info:", playerInfo);
  } catch (error) {
    console.error(error);
  }
}

async function showClanByTag(tag) {
  try {
    const ClanByTag = await client.clanByTag(tag);
    console.log("this is the player info:", ClanByTag);
  } catch (error) {
    console.error(error);
  }
}

// Ruta para obtener los datos de la API
app.get("/api/data", async (req, res) => {
  try {
    // Realiza la solicitud a la API (sustituye con la URL de tu API)
     const response = await get(clashApi); // Ejemplo de API

    res.json(response); // Envía los datos como respuesta JSON
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los datos");
  }
});
//showPlayerInfo("#GQJC0UCG");
// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
 */

/* const express = require("express");
const clashApi = require("clash-of-clans-api");

const app = express();
const COC_API_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJhYmMyMTU5LTRmMGMtNDc1ZS04ODE3LTRmMjA0ZjhhMmZmZiIsImlhdCI6MTczMjQxMzUzOSwic3ViIjoiZGV2ZWxvcGVyLzgyZmNjNmNkLTA5ZmYtZDNhMS1hNDdlLTJiNTcwYmZlMzA3NiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Mi4yMDIuOTQuMjI3Il0sInR5cGUiOiJjbGllbnQifV19.RjSP_76dzjbz6xYt9Sf_Zyau_qP4xBtsc9Fcm9YTJfC82FZ3IWdpcBp1wbAIrH5m3q_m-dMU9Pqhf-y4Jdzseg";
const client = clashApi({ token: COC_API_TOKEN });

app.use(express.static("public"));

app.get("/api/player/:tag", async (req, res) => {
  const { tag } = req.params;
  try {
    const playerInfo = await client.playerByTag(tag);
    res.json(playerInfo);
    console.log(playerInfo);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo el jugador" });
  }
}); */

/* app.get("/api/clan/:tag", async (req, res) => {
  const { tag } = req.params;
  try {
    const clanInfo = await client.clanByTag(tag);
    res.json(clanInfo);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo el clan" });
  }
}); */

/* showPlayerInfo("#GQJC0UCG");

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
 */

const express = require("express");

const path = require("path");
const app = express();
const port = 5000;

// La URL de la API de Clash of Clans y tu API Key

const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIwYjFkMjlhLWNjNmQtNDU2Yy1hYTM1LTg0MjA0NThlYmFmYiIsImlhdCI6MTczMjczNzU5Miwic3ViIjoiZGV2ZWxvcGVyLzgyZmNjNmNkLTA5ZmYtZDNhMS1hNDdlLTJiNTcwYmZlMzA3NiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xMTMuNzYuMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.ZnD3ZQEsMDm36wXOs-J7Bmo02yfOlI6iCzazKHqcSWS-aYk3pG3SZuzf-xYSMGg0Azy9vMLwe7WsEAdTYPOKmw"; // Sustituye con tu propia clave

// Configura la cabecera de autorización

// Sirve archivos estáticos desde la carpeta 'public'
/* app.use(express.static(path.join(__dirname, "public")));

// Ruta para la raíz (servidor devuelve el archivo HTML)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
 */
// Endpoint para obtener los datos de un clan
/* app.get("/clan/:tag", async (req, res) => {
  const clanTag = req.params.tag;
  try {
    const response = await axios.get(
      `${API_URL}clans/${encodeURIComponent(clanTag)}`,
      { headers }
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching clan data:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to fetch clan data" });
  }
}); */

// Endpoint para obtener los detalles de un jugador
/* app.get("/player/:tag", async (req, res) => {
  const playerTag = req.params.tag;
  try {
    const response = await axios.get(
      `${API_URL}players/${encodeURIComponent(playerTag)}`,
      { headers }
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching player data:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to fetch player data" });
  }
}); */

const clashApi = require("clash-of-clans-api");

let client = clashApi({
  token: API_KEY, // Optional, can also use COC_API_TOKEN env variable
});

async function showPlayerInfo(tag) {
  try {
    const playerInfo = await client.playerByTag(tag);
    //console.log("this is the player info:", playerInfo.name);

    //console.log(playerInfo);
    app.get("/player", (req, res) => {
      res.send(playerInfo);
    });
  } catch (error) {
    console.error(error);
  }
}

async function showClanByTag(tag) {
  try {
    const ClanByTag = await client.clanByTag(tag);
    //console.log("this is the player info:", ClanByTag);
    app.get("/clan", (req, res) => {
      res.send(ClanByTag);
    });
  } catch (error) {
    console.error(error);
  }
}

app.use(express.static(path.join(__dirname, "public")));

setInterval(() => {
  showClanByTag("#2R2GRGLGQ");
  console.log("Se reinició la api");
}, 1800000);

showPlayerInfo("#GQR2UPLQO");
showClanByTag("#2R2GRGLGQ");

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
