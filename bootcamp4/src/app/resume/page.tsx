import React from "react";
import style from "./resume.module.css";
import "../globals.css";

export default function Resume() {
  return (
    <div className={style.resumebody}>
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
                        <h3 className={style.entry_title}>Full-Stack Software Developer</h3>
                        <p className={style.entry_info}>Hack4Impact | Oct. 2023 - Present</p>
                        <p className={style.entry_description}>-Worked with a small team of developers to create a web application for the SLO Beaver Brigade
<br/>-Used React.js, Node.js, and MongoDB to create both frontend and backend</p>
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
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Postegres SQL</li>
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
                        <p className={style.entry_info}> Built a full-stack personal website using React.js for the frontend and MongoDB for the backend</p>
                        <p className={style.entry_description}>-Configured dynamic routes and components to make code reusable<br/>-Added ability for users to comment under blogs and projects<br/>-Linked contact page to my email so I see messages in my inbox</p>
                    </div>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}> GUI Calculator</h3>
                        <p className={style.entry_info}> Created a GUI calculator in Python</p>
                        <p className={style.entry_description}>-Learned to use TKinter library<br/>-Used infix and postfix equations<br/>-Used the stack data structure</p>
                    </div>
                    <div className={style.entry}>
                        <h3 className={style.entry_title}> Pokemon Game</h3>
                        <p className={style.entry_info}> Developed a fully functional 2D Pok ́emon maze game with customizable gameplay options and multiple difficulty
options, providing a dynamic player experience</p>
                        <p className={style.entry_description}>-Implemented Factory and Strategy design patterns to manage Pok ́emon, Enemies, and Obstacles
<br/>-Utilized Dijkstra’s and A* pathfinding algorithms to create intelligent movement mechanics for non-player
characters<br/>-Managed the complete development lifecycle, resulting in a well-organized project</p>
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
                            <li>Intro to Computer Security</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    </div>
  );
}