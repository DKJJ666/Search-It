function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <div className="logo"><i className="bi bi-envelope"></i></div>

        <div>
          <h1>SEARCH/IT :)</h1>
          <p>Emissor de Recibo de Administrativos integrado ao ViaCEP</p>
        </div>
      </div>

      <div className="status">
        <span></span>
        ViaCEP API Online
      </div>
    </header>
  );
}

export default Header;