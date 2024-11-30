const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfessorSchema = new Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true }
},
{
  versionKey: false 
}
);

const Professor = mongoose.model("Professor", ProfessorSchema);

module.exports = Professor;