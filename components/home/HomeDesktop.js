import React from "react";
import NavDesktop from "../nav/NavDesktop";
import Image from 'next/image'

const HomeDesktop = () => {
    return (
        <div>
            <header>
                <NavDesktop />
            </header>
            <section id="section-home" className="section-home">
                <Image
                    src="https://bootstrapmade.com/content/demo/EasyFolio/assets/img/profile/profile-1.webp"
                    alt="Profile Background"
                    layout="responsive"
                    width={500}
                    height={500}
                />
                <div className="row text-center">
                    <div className="infor text-center">
                        <h2>Hi, I'm Hoang Van Sang</h2>
                        <p>I'm a <span className="typed" data-typed-items="Developer">Developer</span>
                        </p>
                    </div>
                </div>
            </section>

            <section id="section-about" className="section-about">
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <span className="subtitle">About Me</span>
                    <h2>About Me</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
                </div>
            </section>

             <section id="section-services" className="section-services">
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <span className="subtitle">About Me</span>
                    <h2>About Me</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
                </div>
            </section>
        </div>
    )
}

export default HomeDesktop;