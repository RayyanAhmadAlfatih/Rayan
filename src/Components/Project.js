import React from 'react';
import styled from 'styled-components';

// Button Style Component
const StyledButton = styled.a`
  display: block;
  width: 100%;
  max-width: 400px; /* Mengatur lebar maksimum tombol */
  padding: 15px;
  text-align: center;
  border-radius: 32px;
  color: #ffffff;
  background-color: #ff8000;
  border: 1px solid #ff8000;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 10px 0;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    color: #fff;
    background-color: #ce4414;
    border-color: #c34113;
  }

  i {
    margin-right: 0.5rem;
  }
`;

// Container for buttons
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 100%; /* Memastikan container mengambil lebar penuh */
  max-width: 500px; /* Lebar maksimum container */
`;

// List of button data
const buttons = [
  { href: "https://rayyandatakedua.bek.link/syukurku-hari-ini", text: "SYUKURKU", icon: "fa-solid fa-globe" },
  { href: "https://rayyandatakedua.bek.link/link-penting", text: "LINK PENTING", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/daftar-tugas", text: "DAFTAR TUGAS", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/tebak-bendera", text: "TEBAK BENDERA UNTUK ANAK TK", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/kuis-perkalian-2-sampai-11", text: "KUIS PERKALIAN 2 SAMPAI 11", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/kalkulator-rab-kitchen-set-1", text: "KALKULATOR RAB KITCHEN SET", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/quiz-harian-matematika-1", text: "QUIZ HARIAN MATEMATIKA", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/mau-hitung-kata", text: "MAU-HITUNG-KATA?", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/statisktik-menghitung-kata-dr-rayyan", text: "STATISKTIK-MENGHITUNG-KATA", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/plain-text-dr-rayyan", text: "PLAIN-TEXT", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/rab-bikin-rumah-dr-pak-rayyan", text: "RAB-BIKIN-RUMAH", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/article-writer", text: "ARTICLE WRITER", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/sisip-kata-depat-dan-belang", text: "SISIP-PREFIX-DAN-SUFFIX", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/keywords-generator-2", text: "KEYWORDS GENERATOR", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/artikel-generator", text: "ARTIKEL GENERATOR", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/whatsapp-message-generator", text: "WHATSAPP MESSAGE GENERATOR", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/sitemap-generator-dr-pak-rayyan", text: "SITEMAP GENERATOR", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/html-previewer-1", text: "HTML PREVIEWER 1", icon: "fa-solid fa-globe" },
  { href: "https://rayyan.bek.link/ganti-kata-dalam-artikel", text: "GANTI KATA DALAM ARTIKEL", icon: "fa-solid fa-globe" }
];

// Main Component
const ButtonList = () => {
  return (
    <ButtonContainer>
      {buttons.map((button, index) => (
        <StyledButton key={index} href={button.href} target="_blank">
          <i className={button.icon}></i> {button.text}
        </StyledButton>
      ))}
    </ButtonContainer>
  );
};

export default ButtonList;
