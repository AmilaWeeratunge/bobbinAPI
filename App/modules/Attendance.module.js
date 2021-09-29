
const { format } = require("./db.js");
const sql = require("./db.js")




const Attendance = function(attendance) {
    this.userId = attendance.userId;
    this.date = attendance.date;
    this.dayType = attendance.dayType;
    this.shiftNo = attendance.shiftNo;
    this.attIn = attendance.attIn;
    this.attOut = attendance.attOut;
  };

    Attendance.getAll = result => {
    sql.query("SELECT * FROM ingress.attendance", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      //console.log("ingress.attendance: ", res);
      result(null, res);
      
    });

    //----------------------------------------------------------------------------------------------------//
    Attendance.findById = (empid, result) => {
      sql.query(`SELECT * FROM ingress.attendance WHERE userid = ${empid}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found employee Attendances : ", res[0]);
          result(null, res[0]);
          return;
        }
    
        // not found employee Attendances with the id
        result({ kind: "not_found" }, null);
      });
    };
    //-----------------------------------------------------------------------------------------------------//

    Attendance.findByDate = (recdate, result) => {
      var dt = dateFormat(recdate,"yyyy-mm-dd")
      sql.query(`SELECT * FROM ingress.attendance WHERE date > ${dt}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found employee Attendances : ", res[0]);
          result(null, res[0]);
          return;
        }
    
        // not found employee Attendances with the id
        result({ kind: "not_found" }, null);
      });
    };
  };
  module.exports = Attendance