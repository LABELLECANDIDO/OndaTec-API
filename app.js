const express = require('express');
const app = express(); 
const mongoose = require('./database');
require('dotenv').config();

const port = process.env.PORT || 3002;

app.use(express.json());
const alunosRoute = require("./routes/aluno");
 const professoresRoute = require("./routes/professor");

//rotas 
app.use('/alunos', alunosRoute);
app.use('/professores', professoresRoute);


//servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
mongoose.connection.on('error', (err) => {
    console.error('Erro na conexão com o MongoDB:', err);
});
