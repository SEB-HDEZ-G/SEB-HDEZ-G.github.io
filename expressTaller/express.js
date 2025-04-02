import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(1984, () => {
   console.log('Up and up');
});

app.get('/bienvenida', (req, res) => {
   res.sendFile(path.join(__dirname, '/webcomponent2025.html'))
});

app.get('/otraBienvenida', (req, res) => {
   res.sendFile('bienvenida.html', { root: process.cwd() });
});

app.get('/escuelas', (req, res) => {
   res.send('Ingresa el ID de la escuela que quieras ver (1 o 2)');
});

app.get('/escuelas/1', (req, res) => {
   res.sendFile('escuela1.html', { root: process.cwd() });
});

app.get('/escuelas/2', (req, res) => {
   res.sendFile('escuela2.html', { root: process.cwd() });
});