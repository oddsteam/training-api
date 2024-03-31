const EnrollmentService = require("../services/enrollment");
const ClassService = require("../services/class");
const MailingService = require("../services/mailingService");

export const enrollment = async (req, res) => {
  try {
    const { classId } = req.body;
    const result = await EnrollmentService.create(req.body);
    const classDetail = await ClassService.getClass(classId);
    const mailingService = new MailingService();

    const content = generateTemplate(
      result.fullName,
      classDetail.className,
      classDetail.place
    );
    mailingService.sendEmail(result.email, "", `${classDetail.className}-Registration`, content);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};

function generateTemplate(name, className, place) {
  return `Dear ${name},

  I hope this message finds you well. My name is Jane, and I'm excited to announce our upcoming class at ${place}, hosted by Odd-e Thailand.

  To simplify the registration process, kindly provide your full name, email, and phone number. Once received, I will promptly add you to the list. For those opting for company-sponsored registration requiring an official receipt, please provide your company address for quotation purposes. However, if you're self-sponsored, you will benefit from a 20% discount and won't need an official receipt.

  As you may already know, the regular price per person is 50,000 THB. Additionally, we're offering an early bird promotion known as the "Gang of Four" package, where four persons can enroll for a total of 150,000 THB.

  We look forward to your participation in this enriching class. Should you have any queries or require further assistance, please don't hesitate to reach out.

Warm regards,

Phonngsak Ritpitakphong`;
}
