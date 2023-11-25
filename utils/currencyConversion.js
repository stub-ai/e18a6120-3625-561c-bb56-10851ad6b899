const fetch = require('node-fetch');

async function convertEuroToDollar(amount) {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
  const data = await response.json();
  const rate = data.rates.USD;
  return amount * rate;
}

module.exports = convertEuroToDollar;