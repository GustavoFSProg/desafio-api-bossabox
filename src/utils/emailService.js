import sendgrid from '@sendgrid/mail'
import dotenv from 'dotenv'

dotenv.config()

async function send(req) {
  await sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: req.body.email,
    from: 'gustavosohne38@gmail.com',
    subject: 'Email institucional!',
    text: 'Cadastro Api',
    html:
      `${'<strong>Olá '}${req.body.name}, ` +
      ` obrigado por se cadastrar no nosso site!</strong>`,
  }
  sendgrid.send(msg)
  return sendgrid
}

export default send
