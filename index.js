const nodemailer = require('nodemailer')
const schedule = require('node-schedule')

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
    to: 'joaombcerqueira@gmail.com', // email destinatário 
    subject: 'Teste Schedule', //assunto
    text: 'Oi, funcionou?' // conteúdo
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

schedule.scheduleJob('* * * * *', () => { // a cada minuto
    enviaEmail()
    console.log('email enviado :)')
})

