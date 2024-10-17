import nodemailer from "nodemailer";
import { mails } from "./mails.js";
import { config } from "dotenv";
config();

const email = process.env.EMAIL_ID;
const app_pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: app_pass,
  },
});

const mailHtml = `
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Get Set Py - Python Bootcamp</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Poppins", Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .outer-div {
        background-color: #f6f1e9;
        padding: 50px 0;
      }
      .container {
        max-width: 800px;
        margin: auto;
        color: #000000;
        background-color: white;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
      .header {
        padding: 30px 30px 0 30px;
        text-align: center;
      }
      .top-img {
        width: 100%;
        height: auto;
      }
      .h1-text {
        font-size: 2.5em;
        margin: 0;
      }
      .p-text {
        font-size: 1.2em;
        font-weight: 700;
        margin-top: 10px;
      }
      .content {
        padding: 0 30px 30px 20px;
      }
      .image {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
      }
      .reg-button {
        padding: 5px 10px;
        background-color: blue;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        display: inline-block;
        margin-top: 20px;
      }
      p {
        font-size: 1.1em;
        line-height: 1.6;
      }
      li {
        font-size: 1.1em;
      }

      @media screen and (max-width: 800px) {
        .container {
          border-radius: 0;
        }
        .outer-div {
          padding: 0;
        }
        .header {
          padding: 20px 20px 0 20px;
        }
        .content {
          padding: 0 20px 20px 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="outer-div">
      <div class="container">
        <img
          src="https://raw.githubusercontent.com/vjdataquesters/cdnstorage/refs/heads/main/dqqqq.jpg"
          alt=""
          class="top-img"
        />
        <div class="header">
          <h1 class="h1-text">Get Set Py</h1>
          <p class="p-text">A hands-on journey with Python</p>
        </div>
        <img
          src="https://raw.githubusercontent.com/vjdataquesters/cdnstorage/refs/heads/main/gsp.jpg"
          alt="Python Bootcamp"
          class="image"
        />
        <div class="content">
          <h3>Python Bootcamp for 2nd Year Students!</h3>
          <p>
            Looking to master the essential frameworks of Python and create
            machine learning applications? Join us for Get Set Py, a two-day
            immersive bootcamp where you'll learn to work with:
          </p>
          <ul>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Data Cleaning</li>
            <li>Preprocessing</li>
            <li>Data Visualization</li>
          </ul>
          <p>
            By the end of the bootcamp, you'll have built your very own Machine
            Learning project from scratch.
          </p>

          <p>
            ⚡ And that’s not all! There will be a competition where
            participants will team up to build
            <strong>machine learning projects</strong>. The best performers will
            win exciting gifts 🎁 and <strong>certificates</strong>!
          </p>

          <p>
            📜 Participation <strong>certificates</strong> will be provided to
            all attendees, so everyone walks away with recognition.
          </p>

          <p>
            ⚡ <strong>Limited Registrations</strong> Available! Don’t miss this
            hands-on workshop! <strong>Laptops are mandatory</strong> to work on
            the real-world projects.
          </p>

          <p>Event Details:</p>
          <ul>
            <li>
              🗓 <strong>Dates</strong>:
              <h3 style="color: rgb(13, 13, 144)">25th & 26th October 2024</h3>
            </li>
            <li>
              🏢 <strong>Venue</strong>:
              <h3 style="color: rgb(13, 13, 144)">
                APJ Abdul Kalam Auditorium, VNRVJIET
              </h3>
            </li>
            <li style="margin: 5px 0">
              ⏰ <strong>Timings</strong>: 10:00AM to 4:40PM
            </li>
            <li>
              🎤 <strong>Speaker</strong>: Sreeranjan Kumar Deverapalli, Senior
              Software Developer, NSIC
            </li>
            <li style="margin-top: 5px">
              💸 <strong>Registration Fee</strong>: ₹75 per person
            </li>
          </ul>

          <p>For more details, contact:</p>
          <p>📞 Bindu Sree Reddy : <strong>8309192576</strong></p>
          <p>📞 Akhileshwar : <strong>7993066097</strong></p>

          <a
            href="https://forms.gle/gSjQG1dBVGs7FYXE8"
            target="_blank"
            class="reg-button"
            >Click here to register
          </a>
        </div>
      </div>
    </div>
  </body>
</html>

`;

const mailOptions = {
  from: "karthikeyaveruturi2004@gmail.com",
  subject: "Get Set Py - Python Bootcamp",
  text: "A event by VJ Data Questers",
  html: mailHtml,
};

const sendBulkMails = async () => {
  try {
    for (const mail of mails) {
      mailOptions.to = mail;
      await transporter.sendMail(mailOptions);
      console.log(`Mail sent to ${mail}`);
    }
    console.log();
    console.log("All mails sent successfully");
  } catch (err) {
    console.log(err);
  } finally {
    transporter.close();
  }
};

sendBulkMails();
