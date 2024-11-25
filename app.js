const express = require('express');
const app = express(); 
const port = 3001;

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