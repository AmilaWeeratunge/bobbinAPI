
module.exports = app => {
    const Attendance = require("../controllers/Attendance.controllers");
  
    
  
    // Retrieve all Attendance
    app.get("/Attendance",Attendance.findAll);
    app.get("/Attendance/:empid", Attendance.findOne);
    app.get("/Attendance/date/:recdate", Attendance.findDate);
  
    
  };