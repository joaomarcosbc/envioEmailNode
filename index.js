const nodemailer = require('nodemailer')
const schedule = require('node-schedule')

require('dotenv').config()

var auth = {
    user: process.env.EMAILFROM,
    pass: process.env.PASSWORD
}

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // configuração para servidor de envio outlook
    port: 587,
    secure: false,
    auth: auth
})


var mailOptions = {
    from: process.env.EMAILFROM,
    to: '', // email destinatário 
    subject: '', //assunto
    text: '' // conteúdo
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

schedule.scheduleJob('30 7 1 1-12 *', () => { // início de mês as 07:30
    enviaEmail()
    console.log('email enviado :)')
})

