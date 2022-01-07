const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'praveensakthi001@gmail.com',
        subject: 'Thanks for Joining In..!',
        text: `Welcome to the Task Application, ${name}. 
        Let me know how you get along with the app.`
    })
    console.log('Welcome Mail sent')
} 

const sendDeleteEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'praveensakthi001@gmail.com',
        subject: 'Thanks for using Task Application...!',
        text: `Thanks for using Task Application, ${name}.`
    })
    console.log('Releving Mail sent')
}


module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}

//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









// sgMail.send(msg).then(() => {
//     console.log('Message sent') 
// }).catch((error) => {
//     console.log(error.response.body)
//     // console.log(error.response.body.errors[0].message)
// })