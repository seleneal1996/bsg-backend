const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema para los tipos de contrato
const ContractTypeSchema = new Schema({
  name: { type: String, required: true },
  eps: { type: Boolean, default: false },
  insurance: { type: Boolean, default: false },
  active: { type: Boolean, default: false }
});

// Crea el modelo para los tipos de contrato
const ContractType = mongoose.model('ContractType', ContractTypeSchema);

module.exports = ContractType;
