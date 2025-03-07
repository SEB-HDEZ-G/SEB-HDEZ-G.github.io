//Hypertext Transfer Protocol: sirve para transferir datos a través del internet
import http from 'http';
//File System: proporciona un set de APIs para interactuar con el sistema de archivos de la computadora
import fs from 'fs';

    //Esta función deberá mostrar una página HTML con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
          //500 es un status code, Internal Server Error (el request falló)
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //200 también es un status code, OK (el request fue exitoso)
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }

    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        const escuelas = 
        [{
            "nombre": "Escuela Benito Juárez",
            "direccion": "Av. Principal 123, Ciudad de México",
          },
          {
            "nombre": "Tec de Monterrey",
            "direccion": "Av. General Ramón Corona 2514, Jalisco"
          }
        ];  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //stringify convierte un valor de JavaScript a un string de JSON, se necesita porque al enviar datos a un servidor mediante un request HTTP, los datos tienen que estar en formato 'string'
      res.end(JSON.stringify(escuelas));
    }

    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
      const donantes = [
      {
        "nombre": "Mike Tyson",
        "tipo": "Persona física"
      },
      {
        "nombre": "Tortas Toño",
        "tipo": "Empresa"
      }];
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Aquí van los datos de los donantes');
    }

    function mostrarDonantes(req, res) {
      fs.readFile('donantes.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      });
    }

    function mostrarEquipo(req, res) {
      fs.readFile('equipo.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      });
    }

    function mostrarOpinion(req, res) {
      fs.readFile('opinion.html', 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Oh no!!!!');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      });
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Zǎoshang hǎo zhōngguó xiànzài wǒ yǒu BING CHILLING 🥶🍦 wǒ hěn xǐhuān BING CHILLING 🥶🍦 dànshì sùdù yǔ jīqíng 9 bǐ BING CHILLING 🥶🍦');
    }

    //documentación de createServer
    //https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      }
      else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      }
      else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      }
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      }
      else if (url === '/opinion') {
        mostrarOpinion(req, res);
      }      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });