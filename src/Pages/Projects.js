import React from 'react';
import styled from 'styled-components';

// Container for centering the card
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align to the top */
  height: calc(100vh - 60px); /* Full viewport height minus header height */
  background-color: #f5f5f5; /* Optional: background color for better visibility */
  margin-top: 60px; /* Adjust based on the height of your header */
  padding-top: 20px; /* Small padding at the top */
`;

// Styled card component
const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 180px; /* Sedikit lebih lebar untuk keterbacaan */
  padding: 15px; /* Padding lebih besar */
  text-align: center;
`;

// Styled button inside the card
const StyledButton = styled.a`
  display: block;
  padding: 10px 12px; /* Padding lebih besar untuk keterbacaan */
  text-align: center;
  border-radius: 8px;
  color: #ffffff;
  background-color: #ff8000;
  border: 1px solid #ff8000;
  text-decoration: none;
  font-size: 0.8rem; /* Ukuran font lebih besar */
  font-weight: bold;
  margin-top: 0.5rem; /* Ruang antara tombol */
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    color: #fff;
    background-color: #ce4414;
    border-color: #c34113;
  }

  i {
    margin-right: 0.4rem;
    font-size: 0.8rem; /* Ukuran ikon lebih besar */
  }
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
const SingleCard = () => {
  return (
    <CenteredContainer>
      <Card>
        <h3>Tools</h3>
        {buttons.map((button, index) => (
          <StyledButton key={index} href={button.href} target="_blank">
            <i className={button.icon}></i> {button.text}
          </StyledButton>
        ))}
      </Card>
    </CenteredContainer>
  );
};

export default SingleCard;
