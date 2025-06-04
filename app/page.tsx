'use client'

export default function Page() {
  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <img src="/logo.svg" alt="Logo" className="logo" />
          <nav className="nav-menu">
            <a href="#">Główna</a>
            <a href="#">Katalog</a>
            <a href="#">Aktualności</a>
          </nav>
        </div>
      </header>

      <div className="bottom-header">
        <div className="header-item">
          <img src="/search.svg" alt="Search" className="header-icon" />
          <span className="header-text">Szukaj</span>
        </div>
        <div className="header-group">
          <img src="/catalog.svg" alt="Catalog" className="header-icon header-group-icons" />
          <img src="/book.svg" alt="Book" className="header-icon header-group-icons" />
          <img src="/settings.svg" alt="Settings" className="header-icon header-group-icons" />
          <img src="/profile.svg" alt="Пошук" className="header-icon header-group-icons" />
        </div>
      </div>

      <div className="layout">
        <div className="carousel-box">
          <div className="carousel">
            <img src="/image1.svg" className="carousel-item" alt="1" />
            <img src="/image2.svg" className="carousel-item" alt="2" />
            <img src="/image3.svg" className="carousel-item" alt="3" />
            <img src="/image4.svg" className="carousel-item" alt="4" />
          </div>
          <button className="arrow-btn left">
            <img src="/arrow-left.svg" alt="←" />
          </button>
          <button className="arrow-btn right">
            <img src="/arrow-right.svg" alt="→" />
          </button>
        </div>

        <div className="text-box">
          <div className="text-box2">
            <div className="profile-box">
              <img src="/profile-logo.svg" alt="Logo" />
              <div className="profile-info">
                <span className="profile-name">Leshchyshena Karina</span>
                <span className="profile-nickname">123809@student.san.edu.pl</span>
              </div>
            </div>
            <h2 className="caption">Rumianki – Cudowne Kwiaty Natury</h2>
            <p className="caption">
              {}
              Rumianek (łac. Matricaria chamomilla) to jedna z najbardziej rozpoznawalnych i cenionych roślin leczniczych...
            </p>
          </div>

          <div className="buy-container">
            <div className="buttons">
              <button className="buy-button button3">Kup kwiaty</button>
              <button className="buy-button button2">
                <img src="/share.svg" alt="Share" />
                Podzielić się
              </button>
            </div>

            <div className="play-music3">
              <button className="image-play-music">
                <img src="/play.svg" alt="Play" />
              </button>
              <div className="cont-music">
                <div className="music-info">
                  <span className="music-name">Posłuchaj tej wiadomości</span>
                  <span className="music-ai">SI</span>
                </div>
                <div className="music-line">
                  <span className="music-time">0:00</span>
                  <div className="music-line2">
                    <span className="fill" style={{ width: '40%' }}></span>
                  </div>
                  <span className="music-time">1:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="play-music">
        {[1, 2, 3, 4].map((n) => (
          <div className="play-music2" key={n}>
            <button className="flower-img">
              <img src={`/flower${n}.svg`} alt={`Flower ${n}`} />
            </button>
            <div className="flower-about">
              <span className="flower-name">Kwiat {n}</span>
              <span className="flower-characters">Opis {n}</span>
              <span className="flower-time">{2020 + n}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="information">
        <h2 className="information-texth2">Kwiaty – piękno natury zaklęte w płatkach</h2>
        <p className="information-text">
          Kwiaty od wieków fascynują ludzi swoją urodą, zapachem i różnorodnością form. Są nie tylko ozdobą ogrodów, łąk czy wnętrz domów...
        </p>
      </div>

      <footer className="footer">
        <div className="footer-container">
          {[
            {
              title: "Linki",
              links: ["Strona główna", "Sklep", "Kontakt", "Wsparcie"]
            },
            {
              title: "Profil",
              links: ["Moje konto", "Zamówienia", "Ulubione", "Ustawienia"]
            },
            {
              title: "Polityka Cookies",
              links: ["Zobacz politykę"]
            },
            {
              title: "Zwroty",
              links: ["Polityka zwrotów", "Jak zwrócić"]
            },
            {
              title: "Katalog",
              links: ["Mężczyźni", "Kobiety", "Akcesoria"]
            }
          ].map((section, idx) => (
            <div className="footer-section" key={idx}>
              <h3>{section.title}</h3>
              {section.links.map((link, i) => (
                <a key={i} href="#">{link}</a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
