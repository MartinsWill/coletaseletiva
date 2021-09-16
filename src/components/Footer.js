import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="section">
        <div className="container-grid">
          <div className="footer">
            <a href="/" className="text-style">
              <span>Coleta Seletiva.</span>
            </a>
            <p className="p-style">©2021 ColetaSeletiva.</p>
            <p className="p-style">Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
