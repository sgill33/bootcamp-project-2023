import React from "react";
import style from "./resume.module.css";
import "../globals.css";

export default function Resume() {
  return (

    <body>
        <main>
            <h1 className={style.page_title}>Resume</h1>
            <div className = {style.resume}>
            <section className = {style.section}>
                    <h2 className={style.section_title}>Education</h2>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}>Bachelor of Science in Computer Science</h3>
                        <p className={style.entry_info}>California Polyechnic State University, San Luis Obispo | Expected Graduation June 2025</p>
                    </div>
                </section>
                <section className = {style.section}>
                    <h2 className={style.section_title}>Experience</h2>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}>Cashier</h3>
                        <p className={style.entry_info}>Taco Bell | June - September 2021</p>
                        <p className={style.entry_description}>-Completed transactions and handled money<br/>-Gained customer service experience</p>
                    </div>
                </section>
                <section className = {style.section}>
                    <h2 className={style.section_title}>Skills</h2>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}></h3>
                        <p className={style.entry_info}></p>
                        <ul className={style.skill_list}>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C</li>
                            <li>HTML/CSS</li>
                            <li>RISC-V Assembly</li>
                        </ul>
                    </div>
                </section>
                <section className = {style.section}>
                    <h2 className={style.section_title}>Projects</h2>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}> Personal Website</h3>
                        <p className={style.entry_info}> Created a personal portfolio website using HTML and CSS</p>
                        <p className={style.entry_description}>-Implemented a multi-page design<br/>-Focused on semantic HTML design<br/>-Practiced good version control</p>
                    </div>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}> GUI Calculator</h3>
                        <p className={style.entry_info}> Created a GUI calculator in Python</p>
                        <p className={style.entry_description}>-Learned to use TKinter library<br/>-Used infix and postfix equations<br/>-Used the stack data structure</p>
                    </div>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}> Pokemon Game</h3>
                        <p className={style.entry_info}> Created a interactive pokemon themed game using Java</p>
                        <p className={style.entry_description}>-Made a large, organized project<br/>-Implemented Dijkstra and A* pathing algorithms<br/>-Made different difficult options</p>
                    </div>
                </section>
                <section className = {style.section}>
                    <h2 className={style.section_title}>Coursework</h2>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}></h3>
                        <p className={style.entry_info}></p>
                        <ul className={style.course_list}>
                            <li>Systems Programming</li>
                            <li>Design & Analysis of Algorithms</li>
                            <li>Intro to Database Systems</li>
                            <li>Data Structure</li>
                            <li>Intro to Object Oriented Programming</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
        <footer className={style.footer}>&copy; 2023 Shawn's Personal Website | All Rights Reserved</footer>
    </body>
  );
}