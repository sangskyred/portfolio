'use client'
import React from 'react';
import Image from 'next/image';
// Nhập thư viện react-typed
import { ReactTyped } from 'react-typed';

export default function SectionHome() {
    return (
        <section id="home" className="section-home">
            <Image
                src="/assets/desktop/bg_1.jpg" // Đảm bảo đường dẫn chính xác
                alt="A professional profile background featuring Hoang Van Sang"
                width={500} // Bắt buộc trong phiên bản mới
                height={500} // Bắt buộc trong phiên bản mới
                style={{ objectFit: 'cover' }} // Dùng để định kiểu hình ảnh
            />
            <div className="row text-center">
                <div className="info">
                    <h2>Hi, I'm Hoang Van Sang</h2>
                    <p>
                        I'm a {' '}
                        <ReactTyped
                            strings={['Senior Full Stack Developer']} // Các vai trò sẽ chạy
                            typeSpeed={100} // Tốc độ gõ
                            backSpeed={50} // Tốc độ xóa
                            loop={true} // Lặp lại
                            backDelay={2500}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}