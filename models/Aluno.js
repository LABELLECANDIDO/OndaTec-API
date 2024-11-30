const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlunoSchema = new Schema({    
    email: { type: String, required: true },
    senha: { type: String, required: true }
},
{
    versionKey: false 
}
);

module.exports = mongoose.model('Aluno', AlunoSchema);