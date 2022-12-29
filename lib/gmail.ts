import {google} from "googleapis"
import MailComposer from "nodemailer/lib/mail-composer"
import serverPath from "./server-path"
import credentials from "./credentials.json"
import tokens from "./token.json"
import fs from "fs"

function getGmailService(){
      const { client_secret, client_id, redirect_uris } = credentials.installed;
      const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
      oAuth2Client.setCredentials(tokens);
      const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
      return gmail;
}

function encodeMessage(message: Buffer){
  return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const createMail = async (options: any) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const sendMail = async (options: any) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  const response = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {raw: rawMessage}
  });
  return response.data.id
};


/*
async function base64Encode(file: string){
    const bitmap = await fs.readFile(file)
    return "data:image/png;base64," + new Buffer(bitmap).toString('base64');
}
*/
async function sendVerificationMail (recipient: String, inviteCode: String, recipientName: String){

   const firstName = recipientName.split(" ")[0]
   const discordLink = "https://discord.gg/" + inviteCode
   /*
   const attachments = [
       {
           filename: 'logo.png',
           content: fs.createReadStream(serverPath("public/static/img/logo.png"))
       }
   ]
   */
   const html = `
      <html>
      <head>
        <style>
          body {
            font-family: "Helvetica Neue", sans-serif;
            color: #5e3417;
          }
          .banner {
            background-color: #fcf8e3;
            text-align: center;
            padding: 20px;
          }
          .logo {
            height: 50px;
            width: 50px;
            display: inline-block;
          }
          .main-content {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
          }
          .button {
            background-color: #f0ad4e;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
          }
          .disclaimer {
            font-size: 12px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="banner">
          <img class="logo" src="https://i.imgur.com/4ihwUEw.png" alt="logo">
          <h1>AutoHacks Hackathon</h1>
        </div>
        <div class="main-content">
          <p>Dear ${firstName},</p>
          <p>You're receiving this email because you signed up for the AutoHacks hackathon.</p>
          <p>In order to finish signing up, please join the discord server by clicking the button below:</p>
          <a href="${discordLink}" target="_blank">
            <button class="button">Join Discord</button>
          </a>
          <p class="disclaimer">You can safely ignore this email if you did not sign up.</p>
        </div>
      </body>
    </html>
`
   const options = {
    to: recipient,
    subject: 'Join the AutoHacks discord server',
    text: `${firstName}, You're recieving this email because you signed up for the AutoHacks hackathon. In order to finish signing up, please join the discord server using the following link: ${discordLink}. You can safely ignore this email if you did not sign up.`,
    textEncoding: 'base64',
    html,
    headers: [
    ],

    };
   return await sendMail(options)
}
export default sendVerificationMail

