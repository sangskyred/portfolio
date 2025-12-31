'use client'
import React from 'react';
import Image from 'next/image';
// Nhập thư viện react-typed
import { ReactTyped } from 'react-typed';
import Link from 'next/link';

export default function SectionHome() {
    return (
        <section id="hero" className="section-hero">
            <div className='row'>
                <div className='col-6'>
                    <div className='hero-content'>
                        <h1>Hi, I'm <span className='highlight'>Hoang Van Sang</span></h1>
                        <h2>
                            I'm a {' '}
                            <ReactTyped
                                strings={['Senior Full Stack Developer']} // Các vai trò sẽ chạy
                                typeSpeed={100} // Tốc độ gõ
                                backSpeed={50} // Tốc độ xóa
                                loop={true} // Lặp lại
                                backDelay={2500}
                            />
                        </h2>
                        <p>I am a Senior Full-Stack Developer with 6+ years of experience building scalable web applications using Java
                            Spring Boot, NodeJS, PostgreSQL, and frontend frameworks such as ReactJS and NextJS. I excel in designing
                            microservices, securing APIs, and optimizing backend and frontend performance.
                        </p>
                        <div className='button'>
                            <Link href='#contact'>Let's Connect</Link>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='desktop-image-banner'>
                        <Image
                            src="/assets/desktop/bg_1.jpg" // Đảm bảo đường dẫn chính xác
                            alt="a profile Hoang Van Sang"
                            width={500} // Bắt buộc trong phiên bản mới
                            height={500} // Bắt buộc trong phiên bản mới
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}