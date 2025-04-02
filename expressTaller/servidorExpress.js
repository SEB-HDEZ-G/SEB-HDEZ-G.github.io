//servidor tranformado con express
import express from 'express';
import fs from 'fs/promises'; //se usa para un async/await más limpio

const app = express();
const port = 2000;

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const data = await fs.readFile('bienvenida.html', 'utf8');
    res.send(data);
  } catch (error) {
    res.status(500).send('Oh no!!!!');
  }
});

app.get('/api/escuelas', (req, res) => {
  const escuelas = [
    {
      nombre: "Escuela Benito Juárez",
      direccion: "Av. Principal 123, Ciudad de México",
    },
    {
      nombre: "Tec de Monterrey",
      direccion: "Av. General Ramón Corona 2514, Jalisco",
    },
  ];
  res.json(escuelas); //Content-Type es convertido a JSON por default en Express
});

app.get('/escuelas', async (req, res) => {
  try {
    const data = await fs.readFile('escuelas.html', 'utf8');
    res.send(data);
  } catch (error) {
    res.status(500).send('Oh no!!!!');
  }
});

app.get('/api/donantes', (req, res) => {
  const donantes = [
    { nombre: "Mike Tyson", tipo: "Persona física" },
    { nombre: "Tortas Toño", tipo: "Empresa" },
  ];
  res.json(donantes); //cambió de plain text a JSON
});

app.get('/donantes', async (req, res) => {
  try {
    const data = await fs.readFile('donantes.html', 'utf8');
    res.send(data);
  } catch (error) {
    res.status(500).send('Oh no!!!!');
  }
});

app.get('/equipo', async (req, res) => {
  try {
    const data = await fs.readFile('equipo.html', 'utf8');
    res.send(data);
  } catch (error) {
    res.status(500).send('Oh no!!!!');
  }
});

app.get('/opinion', async (req, res) => {
  try {
    const data = await fs.readFile('opinion.html', 'utf8');
    res.send(data);
  } catch (error) {
    res.status(500).send('Oh no!!!!');
  }
});

app.use((req, res) => {
  res.status(404).send('Zǎoshang hǎo zhōngguó xiànzài wǒ yǒu BING CHILLING 🥶🍦');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});