const express = require('express');
const app = express();
const collaboratorRoute = express.Router();

let CollaboratorModel = require('../model/Collaborators');

// Add Collaborator
collaboratorRoute.route('/create-collaborator').post((req, res, next) => {
  CollaboratorModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all collaborators
collaboratorRoute.route('/get-collaborators').get((req, res) => {
  CollaboratorModel.find((error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single collaborator
collaboratorRoute.route('/get-collaborator/:id').get((req, res) => {
  CollaboratorModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update collaborator
collaboratorRoute.route('/update-collaborator/:id').put((req, res, next) => {
    const {nombre, apellido, estado } = req.body;
  
    // Verificar si el estado es un número
    if (typeof estado !== 'undefined' && !isNaN(estado)) {
      // Actualizar el colaborador solo con el estado proporcionado
      CollaboratorModel.findByIdAndUpdate(
        req.params.id,
        { estado: estado, nombre: nombre,apellido: apellido },
        { new: true }, // Para devolver el colaborador actualizado
        (error, updatedCollaborator) => {
          if (error) {
            return next(error);
          } else {
            res.json(updatedCollaborator);
            console.log('Collaborator successfully updated!');
          }
        }
      );
    } else {
      // Si el estado no es un número válido, devolver un error
      const error = new Error('The provided state is invalid');
      error.status = 400; // Bad Request
      return next(error);
    }
  });
  

// Delete collaborator
collaboratorRoute.route('/delete-collaborator/:id').delete((req, res, next) => {
  CollaboratorModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = collaboratorRoute;
