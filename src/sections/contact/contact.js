import React, { useState } from "react";
import useStyles from "./styles";
import styled from "styled-components";
import { HashLink, NavHashLink } from 'react-router-hash-link';


export default function Contact(){


const classes = useStyles();

const Wrapper = styled.section`
  padding: 1px 150px 140px;
  background: #E0F8D1;
`;

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

        <Wrapper id="contact">
        <h1>Contact Me</h1>


        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>

        </Wrapper>
        
        
        );


}