const fs = require('fs');
const path = require('path');
const sendMail = require('./gmail');

const main = async () => {
  const fileAttachments = [
    {
      filename: 'attachment1.txt',
      content: 'This is a plain text file sent as an attachment',
    },
    {
      path: path.join(__dirname, './attachments/attachment2.txt'),
    },
    {
      filename: 'websites.pdf',
      path: 'https://www.labnol.org/files/cool-websites.pdf',
    },

    {
      filename: 'image.jpg',
      content: fs.createReadStream(path.join(__dirname, './attachments/profile_florida.jpg')),
    },
  ];

  const options = {
    to: 'connormccarl@gmail.com',
    cc: 'connormccarl+1, connormccarl+2@gmail.com',
    replyTo: 'connormccarl@gmail.com',
    subject: 'Hello Connor 2 🚀',
    text: 'This email is sent from the command line',
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
    attachments: fileAttachments,
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Connor McCarl' },
      { key: 'X-Application-Version', value: 'v1.0.0.2' },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log('Message sent successfully:', messageId))
  .catch((err) => console.error(err));