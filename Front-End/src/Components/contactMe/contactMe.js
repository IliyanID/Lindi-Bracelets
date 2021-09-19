import React from 'react'
import emailjs from 'emailjs-com';

let contactMe = (props) =>{


    const submit = (e) =>{
        e.preventDefault();
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("content").value;

        let templateParams = {
            from_name: email,
            to_name: '<YOUR_EMAIL_ID>',
            subject: subject,
            message: message,
           }

        if(email !== "" && subject !== "" && message !== ""){
            emailjs.send('service_ocq50ip', 'template_ew0t8ol', templateParams, 'user_m0QGP3CClZeBUJkrNaonS')
            .then((result) => {
                alert("Email Sent Succesfully")
                console.log(result.text);
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("content").value = "";
            }, (error) => {
                alert("Email Not Sent");
                console.log(error.text);
            });
        }
        else{
            alert("Please fill in all Fields");
        }
    }

    return(
        <div ref={props.refs} className="contactMe">
          <h1>Contact Me</h1>
          <p>Got something different in mind? Send me an email and we can make it a realty</p>
          <form onSubmit={submit}className="contactMeForm">
            <input type="text" id="email" placeholder="Email"></input>
            <input type="text" id="subject" placeholder="Subject"></input>
            <textarea  className="formContent" id="content"></textarea >
            <button className="button" type="submit">Submit</button>
          </form>
        </div>
    )
};

export default contactMe;