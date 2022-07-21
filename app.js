const express = require("express");
// Creamos la aplicación servidor ejecutando express como una función
const app = express();

require("./config/hbs.config")

// Configuracion de la vista
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.use(express.static(`${__dirname}/public`));

// Router configuration
const routes = require("./config/routes.config.js");
app.use("/", routes);



app.listen(3000, () => console.log('on port 3000'))