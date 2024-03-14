const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema para los colaboradores
const CollaboratorSchema = new Schema({
  id_colaborador: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  estado: { type: Number, required: true, default: 1 } // 1 para "activo", 0 para "inactivo"
});

// Crea el modelo para los colaboradores
const Collaborator = mongoose.model('Collaborator', CollaboratorSchema);

module.exports = Collaborator;
