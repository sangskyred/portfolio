import React from "react";
import NavDesktop from "../nav/NavDesktop";
import SectionHome from "../section/SectionHome";

const HomeDesktop = () => {
    return (
        <div className="relative flex flex-col">
            <header id="header">
                <NavDesktop />
            </header>
            <main className="main">
                <SectionHome />

                <section id="about" className="section-about">
                    <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                        <span className="subtitle">About Me</span>
                        <h2>About Me</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
                    </div>
                </section>

             
            </main>
        </div>
    )
}

export default HomeDesktop;
