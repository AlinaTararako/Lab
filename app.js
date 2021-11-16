const express = require('express');

//const PORT = process.env.PORT || 3306

const app = express();
app.listen(3000, () => console.log('App is listening on port 3000!'));

/*app.listen(PORT, () =>{                               // listen aloow to start server
  console.log('Server has been started')
})*/

const Sequelize = require('sequelize');