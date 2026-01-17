const http = require('http');
const fs = require('fs');  

const serveur = http.createServer((req, res) => {
  if (req.url === '/') {
    // On lit le fichier EN STREAM (pas tout d'un coup !)
    const streamFichier = fs.createReadStream('exemple.txt', { encoding: null });  // null = binaire, donc buffer

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Écoute les chunks qui arrivent
    streamFichier.on('data', (chunk) => {
      // chunk est un BUFFER automatique !
      console.log(`Reçu un chunk de ${chunk.length} octets`);
      
      // Envoie le chunk directement au client
      res.write(chunk);  // res.write accepte les buffers
    });

    streamFichier.on('end', () => {
      console.log('Fichier envoyé complètement !');
      res.end();  // Fin de la réponse
    });

    streamFichier.on('error', (err) => {
      console.error('Erreur lecture:', err);
      res.end('Erreur !');
    });
  }
});



serveur.listen(3000, () => {
  console.log('Serveur sur http://localhost:3000');
});