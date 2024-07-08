const nodemailer = require("nodemailer")
const sendEmail = ({ to, subject, message }) => new Promise((resolve, reject) => {
    const mailer = nodemailer.createTransport({
        auth: {
            user: process.env.FROM_MAIL,
            pass: process.env.MAIL_PASS
        },
        service: "gmail"
    })
    mailer.sendMail({
        to: to,
        subject: subject,
        text: message,
        html: message
    }, (err) => {
        if (err) {
            console.log(err)
            reject(err.message || "Unable To Send Email")
        }
        console.log("Email Send SuccessFully")
        resolve("Email Send SuccessFully")
    })
})
module.exports = sendEmail