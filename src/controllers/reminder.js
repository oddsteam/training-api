const { getClasses } = require('../controllers/class');
const enrollmentService = require('../services/enrollment');
const mailingService = require('../services/mailingService')

const setEmailClassReminder = async function (req, res) {
  try {
    const classesData = getClasses()
    for (let cls in classesData) {
      const enrollmentData = enrollmentService.getEnrollmentByClassId(cls.classId)
      const startDate = new Date(cls.startDate)
      var today = new Date();
      var fiveDays = Math.floor((startDate - today) / 1000 / 60 / 60 / 24)
      const carbonCopy = cls.intructure.map(value => value.email).join(',');
      if (fiveDays === 5) {
        await mailingService.sendEmail(enrollmentData.email, carbonCopy, cls.className, cls.preClassContent);
      }
    }
    res.send("success");
  } catch (error) {
    console.log(error);
  }
}

exports.setEmailClassReminder = setEmailClassReminder;