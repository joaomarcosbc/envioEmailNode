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
    subject: 'teste', //assunto
    text: 'teste' // conteúdo
}

async function enviaEmail() {
    let enviaEmail = await transporter.sendMail(mailOptions)
    console.log('Email sent: ', enviaEmail.response)
}

schedule.scheduleJob('30 7 1 * *', async () => { // início de mês as 07:30
    await enviaEmail()
    console.log('email enviado')    
})
