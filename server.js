require('dotenv').config();
const express = require('express');
const next = require('next');
const path = require('path');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app);
const PORT = process.env.NODE_ENV !== 'production' ? 3009 : 3009;

app.prepare()
  .then(() => {
    const server = express();
    //server.use(bodyParser.json());

    server.get('/robots.txt', (_req, res) => {
      res.sendFile(path.join(__dirname, '/static/sitemap/', 'robots.txt'));
    });

    server.get('/service-worker.js', (_req, res) => {
      res.sendFile(path.join(__dirname, '/static/js/', 'service-worker.js'));
    });

    server.get('/manifest.json', (_req, res) => {
      res.sendFile(path.join(__dirname, '/static/js/', 'manifest.json'));
    });

    server.get('/favicon.ico', (_req, res) => {
      res.sendFile(path.join(__dirname, '/static/', 'favicon.ico'));
    });

    server.get('/favicon.png', (_req, res) => {
      res.sendFile(path.join(__dirname, '/static/', 'favicon.png'));
    });

    server.get('/sitemap.xml', (_req, res) => {
      res.sendFile(path.join(__dirname, '/static/sitemap/', 'sitemap.xml'));
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(
      PORT,
      error => {
        if (error) throw error;
        console.log(`Ready http://localhost:${PORT} Environment: ` + process.env.NODE_ENV);
      },
    );

  })
  .catch(error => {
    console.error(error.stack);
    process.exit(1);
  });
