import React, { useState } from "react";
import useStyles from "./styles";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact(){


const classes = useStyles();

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };



    return(

<div className={classes.section}>
        <h1>Contact Me</h1>


      <form onSubmit={handleSubmit}>
      <div>
      <TextField id="standard-basic" label="Name" variant="standard" className={classes.name}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
       </TextField>
      </div>
      <div>
      <TextField id="standard-basic" label="Email" variant="standard" className={classes.name}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        </TextField>
      </div>
      <div>
      <TextField id="standard-multiline-static" label="Message" rows={4} variant="standard" multiline className={classes.message}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
        </TextField>
      </div>
      <Button  type="submit" className={classes.submit}> {status}</Button>
    </form>

    <p>Note: This website is hosted using GitHub Pages, which only hosts static content. Therefore, this contact section will not work as expected.
      It is here for code demonstrating purposes only :) Please feel free to reach out to me using the email in my resume. Thank you.
    </p>

</div>
        
        
        );


}