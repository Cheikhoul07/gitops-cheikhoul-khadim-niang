const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>cheikhoul-khadim-niang</h1><p>GitOps Platform on Kubernetes</p>');
});

app.get('/healthz', (req, res) => res.send('ok'));

app.listen(3000, () => console.log('App listening on port 3000'));