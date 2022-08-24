const express = require('express');
const app = express();
// import cors from 'cors';
// const cors = require('cors');
// app.use(cors);
app.use(express.json());
const data = require('./data');

app.get('/api/product', (req, res) => {
  console.log('Hle');
  res.json({ message: data.product });
});
app.get('/api/product/:slug', (req, res) => {
  console.log(req.params.slug);
  const datas = data.product.find((x) => x.slug === req.params.slug);
  if (datas) {
    res.send(datas);
  } else {
    res.send('user is not found');
  }
});
app.get('/api/product/id/:_id', async (req, res) => {
  try {
    console.log(req.params._id);
    const datas = await data.product.find((ele) => ele._id === req.params._id);
    console.log(datas);
    if (datas) {
      res.send(datas);
    } else {
      res.send('user is not found');
    }
  } catch (error) {
    console.log(error);
  }
});
const port = 5000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
