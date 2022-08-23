import express from 'express';
const app = express();
app.get('/api/product', (req, res) => {
  res.json({
    message: 'server is runnig',
  });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
