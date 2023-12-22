'use client';
import React from 'react'
import styles from './home.module.css'
import emailjs from '@emailjs/browser';

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  
  e.preventDefault();
  try {
    //get form submission event
    const formElement = e.target as HTMLFormElement;

      // Access values directly from the form elements
      const nameInput =
        formElement.querySelector<HTMLInputElement>(
          'input[name="name"]'
        );
      const emailInput = 
        formElement.querySelector<HTMLInputElement>(
          'input[name="email"]'
        );
      const messageInput = 
        formElement.querySelector<HTMLInputElement>(
          'textarea[name="message"]'
        );

    const data = {
    service_id: 'service_3p6m5ef',
    template_id: 'contact_form',
    user_id: '50PrgwvUpl9mVWp5g',
    template_params: {
        'name': nameInput?.value || "",
        'email': emailInput?.value || "",
        'message': messageInput?.value || ""
      }
    };
    
    console.log(data);

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': "application/json" }
    }).then(function() {
      alert('Your mail is sent!');
    })

    
    //clear form data
    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (messageInput) messageInput.value = "";
    

  } catch (err) {
    alert('Oops... ' + JSON.stringify(err));
  }
}


export default function Contact() {
  return (
    
    
    <main>
        <h1 className="page-title">Shawn's Contact</h1>
        <form id="contact-form" onSubmit={handleSubmit}>    
            <label htmlFor="name">Name</label>
            <input type="text" id="name"  placeholder="Name" name = "name" required/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" name = "email" required/>
            <label htmlFor="Message">Message</label>
            <textarea placeholder="Message"  name = "message" required></textarea>
            <input type="submit" required/>
        </form>
    </main>
  )
}