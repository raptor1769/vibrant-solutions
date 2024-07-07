const express = require("express");
const cors = require("cors");
const mailer = require("nodemailer");
const parser = require("body-parser");


const app = express(0);
const port = 5000;

app.use(parser.json());
app.use(cors());
app.post('/send-email',async(req,res)=>{

    const {name,phno,email,message} = req.body;
    console.log(message)
    const transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:'aladincreater@gmail.com',
            pass:'rcrm ohen xihd dinr'
        }
    });
    const mailOptions = ({
        from:email,
        to:'aladincreater@gmail.com',
        subject:'Message from Customer',
        text:`Name: ${name}\nContactNumber: ${phno}\nEmail: ${email}\nMessage: ${message}`
    });
    try{
        debugger;
        await transporter.sendMail(mailOptions);
        res.status(200).json({message:'Email sent successfully'});
    }
    catch(e){
        console.error('Error sending email',e);
        res.status(500).json({message:'Email not sent'});
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });