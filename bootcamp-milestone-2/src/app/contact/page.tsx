import React from 'react'
import styles from './home.module.css'


export default function Home() {
  return (
    <main>
            <h1 className="page-title">Shawn's Contact</h1>
            <form id="contact-form">    
                <label htmlFor="name">Name</label>
                <input type="text" id="name"  placeholder="Name" required/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" required/>
                <label htmlFor="Message">Message</label>
                <textarea placeholder="Message"  required></textarea>
                <input type="submit" required/>
            </form>
        </main>
  )
}