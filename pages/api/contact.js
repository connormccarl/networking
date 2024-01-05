import sendMail from "@/lib/email/gmail"
import processData from "@/lib/handleFormData"

import { render } from "@react-email/render";
import ContactEmail from "@/emails/ContactTemplate";

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req, res) {
    const { fields, files } = await processData(req, res)
    //console.log(JSON.stringify(fields))

    // convert email template to raw html
    const plainText = render(ContactEmail(fields), {
        plainText: true
    })
    const htmlContent = render(ContactEmail(fields))

    const options = {
        to: 'connormccarl@gmail.com',
        replyTo: fields.email[0],
        subject: 'New Message from Networking Site 🚀',
        text: plainText,
        html: htmlContent,
        textEncoding: 'base64',
        headers: [
            { key: 'X-Application-Developer', value: 'Connor McCarl' },
            { key: 'X-Application-Version', value: 'v1.0.0.2' },
        ],
    }

    try {
        const messageId = await sendMail(options)
        res.status(200).json({ success: 'true' })
    } catch (e) {
        console.error(e)
    }
  }
  