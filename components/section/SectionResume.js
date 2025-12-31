import React from "react";
import Image from "next/image";

const SectionResume = () => {
    let listExperience = [
        {
            position: 'Senior Frontend Developer',
            time: 'Jan 2023 - Present',
            company: 'Tech Solutions Inc.',
            listReponsitose: [
                'Designed and architected a large-scale Hospital Management System (HMS) using Java Spring Boot, transitioning from a monolithic to a microservices architecture to improve scalability and maintainability.',
                'Lead a team of 5 developers to build a scalable SaaS platform using React and TypeScript.',
                'Optimized application performance, reducing initial load time by 40%.',
                'Collaborated with UI/UX designers to implement responsive and accessible design patterns.'
            ]
        },
        {
            position: 'Junior Web Developer',
            time: 'June 2021 - Dec 2022',
            company: 'Digital Creative Agency',
            listReponsitose: [
                'Developed and maintained client websites using HTML, CSS, and JavaScript.',
                'Integrated RESTful APIs and third-party services into web applications.',
                'Participated in daily stand-ups and code reviews to ensure high-quality delivery.'
            ]
        }
    ];


    return (
        <section id="resume" className="resume">
            <div className="title">
                <h2>Resume</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="title">
                        <div className="icon">

                        </div>
                        <h3>Work Experience</h3>
                    </div>
                    <div className="timelines">
                        {listExperience.map((item, key) =>
                            <div className="timeline-item" key={key}>
                                <h4>{item.position}</h4>
                                <h5>{item.time}</h5>
                                <p className="company"><em>{item.company}</em></p>
                                <ul>
                                    {item.listReponsitose.map((itemS, keyS) =>
                                        <li key={keyS}>{itemS}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="education">
                        <div className="title">
                            <div className="icon">

                            </div>
                            <h3>Education</h3>
                        </div>
                        <div className="detail">
                            <h4>Ho Chi Minh City University of Industry</h4>
                            <h5>09/2015 - 06/2019</h5>
                            <p>Bachelor of Information Technology</p>
                            <p>GPA: 3.0/4</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionResume;