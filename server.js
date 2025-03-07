const http = require('http');

const server = http.createServer((req, res) => {
    // Sofortige Weiterleitung zur Firefox-Addonseite
    res.writeHead(302, { 'Location': 'about:debugging#/runtime/this-firefox/#/' });
    res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});