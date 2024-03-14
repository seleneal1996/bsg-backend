const express = require('express');
const app = express();
const schedulesRoute = express.Router();

let ScheduleModel = require('../model/Schedules');

// Add Schedules
schedulesRoute.route('/create-schedule').post((req, res, next) => {
  ScheduleModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all schedules
schedulesRoute.route('/get-schedules').get((req, res) => {
  ScheduleModel.find((error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single schedule 
schedulesRoute.route('/get-schedule/:id').get((req, res) => {
  ScheduleModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update schedule
schedulesRoute.route('/update-schedule/:id').put((req, res, next) => {
  ScheduleModel.findByIdAndUpdate(
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
        console.log('Schedule successfully updated!');
      }
    }
  );
});

// Delete schedule
schedulesRoute.route('/delete-schedule/:id').delete((req, res, next) => {
  ScheduleModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = schedulesRoute;
