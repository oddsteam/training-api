const createContent = function (class_detail, enrollmentInfo) {
    return `Hello ${enrollmentInfo.fullName} <br> Welcome! Also looking forward to joining with you for 3 days of Certified LeSS Practitioner: Principles to Practices by Bas Vodde.<br>`
}

const setEmailClassReminder = function (req, res){ 

    const classes = [{
        id: 1,
        description: `ตอนผู้สอนทั้ง 2 มาเป็น ScrumMaster ใหม่ ๆ เราพบช่วงเวลายากลำบากหลายครั้ง`,
        place:"Geeky Base All Star",
        googleMapUrl: "https://maps.app.goo.gl/UQKuNzejJNNwVB2K9",
        startDate: "2024-03-22T04:51:16.100Z",
        endDate: "31/3/2024",
        instructor: [{name: 'Jane'}]
      },
      {
        id: 2,
        description: `ตอนผู้สอนทั้ง 2 มาเป็น ScrumMaster ใหม่ ๆ เราพบช่วงเวลายากลำบากหลายครั้ง`,
        place:"Geeky Base All Star",
        googleMapUrl: "https://maps.app.goo.gl/UQKuNzejJNNwVB2K9",
        startDate: "2024-03-22T04:51:16.100Z",
        endDate: "31/3/2024",
        instructor: [{name: 'Jane'}]
      }]
    
      for (let cls in classes) {
        const enrollmentInfo = {
          classId: 1,
          email: 1,
          fullName: "Roofimon",
        }
        const content = createContent(cls, enrollmentInfo);
        console.log(content)
        const startDate = new Date(cls.startDate)
        console.log("ss", startDate)
        const dateNow = Date.now()
        // if (startDate.getDate() - 5 === dateNow) {
        //   // sendEmail(enrollmentInfo.email, cls.name, content);
        //   console.log("Send email")
        // } 
      }

      res.send("Success")
}

exports.setEmailClassReminder = setEmailClassReminder;