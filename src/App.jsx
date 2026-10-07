import React, { useState } from 'react';
import Section from './components/Section';
import HobbyCard from './components/HobbyCard';
import Display from './components/Display';
import Button from './components/Button';

// Dữ liệu sở thích đặt trong mảng theo yêu cầu đề bài
const hobbiesData = [
  { id: 1, icon: "📖", title: "Đọc truyện", desc: "Thư giãn và khám phá những câu chuyện thú vị." },
  { id: 2, icon: "🎮", title: "Chơi game", desc: "Giải trí cùng bạn bè." },
  { id: 3, icon: "🎧", title: "Nghe nhạc", desc: "Thư giãn và tận hưởng những bài hát yêu thích." },
  { id: 4, icon: "🧩", title: "Giải toán logic", desc: "Rèn luyện tư duy và khả năng giải quyết vấn đề." }
];

export default function App() {
  // State cho phần Máy tính (Virtual Calculator)
  const [expression, setExpression] = useState("");

  const handleClick = (val) => setExpression(prev => prev + val);
  const handleClear = () => setExpression("");
  const handleDelete = () => setExpression(prev => prev.slice(0, -1));

  const handleCalculate = () => {
    try {
      const result = Function(`'use strict'; return (${expression})`)();
      setExpression(String(result));
    } catch (err) {
      setExpression("Error");
    }
  };

  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="container">
          <p className="school">HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</p>
          <h1>Kiều Việt Hưng</h1>
          <p className="subtitle">Sinh viên PTIT - Trang giới thiệu cá nhân</p>
        </div>
      </header>

      {/* NAV */}
      <nav>
        <div className="container nav-content">
          <a href="#home">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#hobbies">Sở thích</a>
          <a href="#calculator">Máy tính</a>
        </div>
      </nav>

      {/* MAIN */}
      <main className="container" id="home">

        {/* Thông tin cá nhân (Dùng Section với children) */}
        <Section title="👨‍🎓 Thông tin cá nhân" id="about">
          <div style={{ display: "grid", gap: "10px" }}>
            <p style={{ background: "#f4f7fb", padding: "12px", borderRadius: "8px" }}><strong>Họ và tên:</strong> Kiều Việt Hưng</p>
            <p style={{ background: "#f4f7fb", padding: "12px", borderRadius: "8px" }}><strong>Trường:</strong> Học viện Công nghệ Bưu chính Viễn thông</p>
            <p style={{ background: "#f4f7fb", padding: "12px", borderRadius: "8px" }}><strong>Đối tượng:</strong> Sinh viên</p>
          </div>
        </Section>

        {/* Sở thích (Render mảng qua props/HobbyCard) */}
        <Section title="❤️ Sở thích của tôi" id="hobbies">
          <div className="hobbies-grid">
            {hobbiesData.map(item => (
              <HobbyCard 
                key={item.id} 
                icon={item.icon} 
                title={item.title} 
                description={item.desc} 
              />
            ))}
          </div>
        </Section>

        {/* Mục tiêu */}
        <Section title="🎯 Mục tiêu">
          <p>Tôi muốn không ngừng học hỏi về công nghệ, lập trình React và rèn luyện tư duy logic để phát triển bản thân trong tương lai.</p>
        </Section>

        {/* BÀI 1: VIRTUAL CALCULATOR */}
        <Section title="🧮 Bài 1: Virtual Calculator (Máy tính ảo)" id="calculator">
          <div style={{ width: "330px", background: "#ffffff", padding: "20px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", margin: "0 auto" }}>
            <Display value={expression} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
              <Button label="AC" onClick={handleClear} />
              <Button label="DEL" onClick={handleDelete} />
              <Button label="÷" onClick={() => handleClick("/")} />
              <Button label="×" onClick={() => handleClick("*")} />

              <Button label="7" onClick={() => handleClick("7")} />
              <Button label="8" onClick={() => handleClick("8")} />
              <Button label="9" onClick={() => handleClick("9")} />
              <Button label="-" onClick={() => handleClick("-")} />

              <Button label="4" onClick={() => handleClick("4")} />
              <Button label="5" onClick={() => handleClick("5")} />
              <Button label="6" onClick={() => handleClick("6")} />
              <Button label="+" onClick={() => handleClick("+")} />

              <Button label="1" onClick={() => handleClick("1")} />
              <Button label="2" onClick={() => handleClick("2")} />
              <Button label="3" onClick={() => handleClick("3")} />
              <Button label="=" onClick={handleCalculate} />

              <Button label="0" onClick={() => handleClick("0")} />
              <Button label="." onClick={() => handleClick(".")} />
            </div>
          </div>
        </Section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Kiều Việt Hưng - Học viện Công nghệ Bưu chính Viễn thông</p>
      </footer>
    </div>
  );
}