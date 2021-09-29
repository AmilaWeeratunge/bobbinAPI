const Attendance = require("../modules/Attendance.module");


// Retrieve all Attendance from the database.
exports.findAll = (req, res) => {
    Attendance.getAll((err,data)=>{
        if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Attendances Data."
      });
    else res.send(data);
    
    })
  
};

// Find a single Employee with a EmployeeId
exports.findOne = (req, res) => {
  Attendance.findById(req.params.empid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found employee with id ${req.params.empid}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving employee with id " + req.params.empid
        });
      }
    } else res.send(data);
  });
  
};

// find employee with date
exports.findDate = (req, res) => {
  Attendance.findByDate(req.params.recdate,  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found employee with date ${req.params.recdate}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving employee with date " + req.params.recdate
        });
      }
    } else res.send(data);
  });
  
};

// Update a Employee identified by the EmployeeId in the request
exports.save = (req, res) => {
  
};

