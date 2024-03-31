
const classService = require('../services/class');
const enrollmentService = require('../services/enrollment');

const setEmailClassReminder = function (req, res){ 
  const classesData = classService.getClasses();
    for (let cls in classesData) {
      const enrollmentData = enrollmentService.getEnrollmentByClassId(cls.classId)
      const startDate = new Date(cls.startDate)
      const dateNow = Date.now()
      if (startDate.getDate() - 5 === dateNow) {
        sendEmail(enrollmentData.email, cls.name, cls.preClassContent);
      } 
    }
  res.send("Success")
}

exports.setEmailClassReminder = setEmailClassReminder;