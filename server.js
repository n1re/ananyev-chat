const express = require('express');

const app = express();
const PORT = 3000;

const API_PREFIX = '/api/v1';

app.use(express.static(__dirname));

// Если мы сделаем POST-запрос сюда, то получим верный ответ
// Если отправим GET-запрос, то получим либо 405 HTTP ошибку, либо 404
app.post(`${API_PREFIX}/test`, (req, res) => {
  res.status(201).send('my text');
});

app.delete(`${API_PREFIX}/delete`, (req, res) => {
	res.setHeader('Content-Type', 'application/json');
  res.status(200).send({deleted: true});
});

app.get(`${API_PREFIX}/text`, (req, res) => {
  res.status(200).send('Hello, world!');
});

app.put(`${API_PREFIX}/json`, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send({ data: { items: [1, 2, 3 ]} });
});

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});