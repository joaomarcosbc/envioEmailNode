const nodemailer = require('nodemailer')
require('dotenv').config()

var auth = {
    user: process.env.EMAILFROM,
    pass: process.env.PASSWORD
}

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: auth
})


var mailOptions = {
    from: process.env.EMAILFROM,
    to: '', // email destinatário 
    subject: 'Teste envio automatizado',
    text: 'Te amo, bu'
}

function enviaEmail() {
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
        }else {
            console.log(`Email sent: ${info.response}`)
        }
    })
}

enviaEmail()