const apiUrl = `https://criptoya.com/api?key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Procesar los datos de la API
    console.log(data);
  })
  .catch(error => {
    console.error('Error al recuperar datos de la API:', error);
  });
  Endpoint: /api/{coin}/{fiat}/{volumen}

"coin":{str} Cripto a operar.
"fiat":{str} Moneda contra la que se opera, puede ser fiat o stablecoin.
"volumen":{float} Volumen a operar, utilizar el punto como separador decimal.
Valores posibles:
{coin}: BTC , DAI , ETH , USDT , USDC , BNB , AAVE , ADA , AXS , BAT , CAKE , DOGE , DOT , EOS , LINK , LTC , MANA , PAXG , SAND , SHIB , SLP , SOL , TRX , UNI , XLM , XRP , AVAX , BCH , BUSD , CHZ , FTM , MATIC , ALGO , NUARS , DOC , USDP , UXD
{fiat}: ARS , MXN , BRL , PEN , CLP , COP , USD , UYU , VES
