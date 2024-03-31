const classService = require('../services/class');
const enrollmentService = require('../services/enrollment');
const mailingService = require('../services/mailingService')

const setEmailClassReminder = function (req, res) {
  try {
    const classesData = classService.getClasses();
    for (let cls in classesData) {
      const enrollmentData = enrollmentService.getEnrollmentByClassId(cls.classId);
      const startDate = new Date(cls.startDate);
      const dateNow = Date.now();
      const carbonCopy = cls.intructure.map(value => value.email).join(',');
      if (startDate.getDate() - 5 === dateNow) {
        mailingService.sendEmail(enrollmentData.email, carbonCopy, cls.name, cls.preClassContent);
      }
    }
    res.send("success");
  } catch (error) {
    console.log(error);
  }
}

exports.setEmailClassReminder = setEmailClassReminder;