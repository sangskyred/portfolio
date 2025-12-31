import React from "react";
import NavDesktop from "../nav/NavDesktop";
import SectionHome from "../section/SectionHome";
import SectionContact from "../section/SectionContact";
import SectionSkill from "../section/SectionSkill";
import SectionResume from "../section/SectionResume";

const HomeDesktop = () => {
    return (
        <div className="container">
            <header id="header">
                <NavDesktop />
            </header>
            <main className="main">
                <SectionHome />
                <SectionSkill />
                <SectionResume/>
                <SectionContact />

            </main>
        </div>
    )
}

export default HomeDesktop;
