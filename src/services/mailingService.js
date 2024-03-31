var AWS = require("aws-sdk");

AWS.config.update({ region: "ap-southeast-1" });

class MailingService {
    ses = new AWS.SES({ apiVersion: "2010-12-01" });

    sendEmail(to, cc, subject, message) {
        var ccList = [];
        if (cc != "") {
            ccList = cc.split(",");
        }

        var params = {
            Destination: {
                ToAddresses: to.split(","),
                CcAddresses: ccList,
            },
            Message: {
                Body: {
                    Text: {
                        Charset: "UTF-8",
                        Data: message,
                    },
                },
                Subject: {
                    Charset: "UTF-8",
                    Data: subject,
                },
            },
            Source: "noreply@odds.team",
            ReplyToAddresses: [],
        };

        this.ses.sendEmail(params, (err, data) => {
            if (err) {
                console.log("Error sending email:", err);
            } else {
                console.log("Email sent:", data);
            }
        });
    }
}

module.exports = MailingService;
