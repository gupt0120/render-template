require('dotenv/config');
const express = require('express');

const { Shrenik_Gupta } = process.env;

const app = express();

app.get('/', (_req, res) => {
  if (!Shrenik_Gupta) {
    res.status(500).json({
      error: { message: 'Environment variable STUDENT_NAME not provided' }
    });
    return;
  }
  res.json({
    data: `Hello from ${Shrenik_Gupta}!`
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('App is listening!');
});
