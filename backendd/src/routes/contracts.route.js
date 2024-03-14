const express = require('express');
const app = express();
const contractsRoute = express.Router();

let ContractModel = require('../model/Contracts');

// Add Contract
contractsRoute.route('/create-contract').post((req, res, next) => {
  ContractModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all contracts
contractsRoute.route('/get-contracts').get((req, res) => {
  ContractModel.find((error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single contract
contractsRoute.route('/get-contract/:id').get((req, res) => {
  ContractModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update contract
contractsRoute.route('/update-contract/:id').put((req, res, next) => {
  ContractModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log('Contract successfully updated!');
      }
    }
  );
});

// Delete contract
contractsRoute.route('/delete-contract/:id').delete((req, res, next) => {
  ContractModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = contractsRoute;
