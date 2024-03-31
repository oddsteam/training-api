const classService = require('../services/class');
const enrollmentService = require('../services/enrollment');
const mailingService = require('../services/mailingService')

const setEmailClassReminder = function (req, res) {
  try {
    const classesData = classService.getClasses();
    for (let cls in classesData) {
      const enrollmentData = enrollmentService.getEnrollmentByClassId(cls.classId)
      const startDate = new Date(cls)
      var today = new Date();
      var fiveDays = Math.floor((startDate - today) / 1000 / 60 / 60 / 24)
      if (fiveDays === 5) {
        sendEmail(enrollmentData.email, cls.name, cls.preClassContent);
      }
    }
    res.send("success");
  } catch (error) {
    console.log(error);
  }
}

exports.setEmailClassReminder = setEmailClassReminder;