const express = require('express'); //calling the module
const app = express();
const port = 1000; //can change to any port

// api route to get two numbers 
app.get('/api/sum', (req, res) => {

  const { num1, num2 } = req.query;

  // Convert the numbers to integers if the input is string
  const firstNumber = parseInt(num1);
  const secondNumber = parseInt(num2);

  // Check if the numbers are valid integers
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return res.status(400).send('Invalid numbers. Please provide valid integers.');
  }

  //sum
  const sum = firstNumber + secondNumber;

  // Return as a json object
  res.json({ sum });
});

// calling the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
