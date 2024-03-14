const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema para los horarios
const ScheduleSchema = new Schema({
  id_collaborator: { type: mongoose.Schema.Types.ObjectId, ref: 'Collaborator', required: true },
  day_of_week: { type: String, enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], required: true },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true }
});

// Crea el modelo para los horarios
const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
