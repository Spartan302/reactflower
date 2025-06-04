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
          <div className="carousel" id="carousel">
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
            <h2 id="slideText" className="caption">Rumianki – Cudowne Kwiaty Natury</h2>
            <p
              id="slideText2"
              className="caption"
              dangerouslySetInnerHTML={{
                __html: `
                  Rumianek (łac. Matricaria chamomilla) to jedna z najbardziej rozpoznawalnych i cenionych roślin leczniczych w
                  Europie oraz na całym świecie. Od wieków znany jest nie tylko ze swojego delikatnego, przyjemnego zapachu i
                  pięknych, białych płatków z żółtym środkiem, ale przede wszystkim ze swoich niezwykłych właściwości
                  zdrowotnych, kosmetycznych i uspokajających. Rumianek jest symbolem łagodności, naturalnego ukojenia oraz siły
                  płynącej z natury.
                  <br><br>
                  W ziołolecznictwie rumianek odgrywa istotną rolę jako roślina wspomagająca trawienie, działająca
                  przeciwzapalnie, przeciwbakteryjnie oraz przeciwskurczowo. Napary z rumianku wykorzystywane są przy problemach
                  żołądkowych, wzdęciach, a także jako środek łagodzący stres i napięcie nerwowe. Jego kojące działanie sprawia,
                  że często znajduje się w herbatach relaksacyjnych oraz preparatach na bezsenność.
                  <br><br>
                  Rumianek jest również popularnym składnikiem kosmetyków – toników, kremów, szamponów i maseczek. Działa
                  łagodząco na skórę, zmniejsza podrażnienia, a także wspomaga regenerację naskórka. Dzięki zawartości
                  naturalnych olejków eterycznych, flawonoidów i kumaryn, rumianek posiada silne działanie antyoksydacyjne i
                  przeciwstarzeniowe.
                  <br><br>
                  Roślina ta rośnie dziko na łąkach, polach i przy drogach, ale równie często uprawiana jest w ogrodach i na
                  plantacjach. Kwitnie od maja do września, a jej delikatne kwiaty przyciągają nie tylko ludzi, ale i pszczoły
                  oraz inne owady zapylające.
                  <br><br>
                  Rumianek to także roślina, która odgrywała ważną rolę w kulturze ludowej – był używany w rytuałach ochronnych,
                  jako symbol czystości oraz miłości. W wielu regionach Polski mówi się, że rumianek przynosi spokój, równowagę
                  i zdrowie – zarówno ciału, jak i duszy.
                  <br><br>
                  Podsumowując – rumianek to nie tylko piękny kwiat, ale prawdziwy skarb natury, który pomaga zachować zdrowie,
                  urodę i wewnętrzny spokój. Jego uniwersalne właściwości sprawiają, że jest nieodzownym elementem naturalnej
                  apteczki każdego domu.
                `,
              }}
            ></p>
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
        <div className="play-music2">
            <button className="flower-img">
                <img src="flower3.svg" alt="Flower" />
            </button>
            <div className="flower-about">
                <span className="flower-name">Rumianki – Cudowne Kwiaty Natury</span>
                <span className="flower-characters">Jedna z najbardziej rozpoznawalnych i cenionych roślin</span>
                <span className="flower-time">2025</span>
            </div>
        </div>
        <div className="play-music2">
            <button className="flower-img">
                <img src="flower2.svg" alt="Flower" />
            </button>
            <div className="flower-about">
                <span className="flower-name">Tulipany Białe</span>
                <span className="flower-characters">Ich elegancka forma, śnieżnobiała barwa</span>
                <span className="flower-time">2022</span>
            </div>
        </div>
        <div className="play-music2">
            <button className="flower-img">
                <img src="flower1.svg" alt="Flower" />
            </button>
            <div className="flower-about">
                <span className="flower-name">Białe Róże – Królewskie Kwiaty</span>
                <span className="flower-characters">Od wieków fascynują ludzi</span>
                <span className="flower-time">2023</span>
            </div>
        </div>
        <div className="play-music2">
            <button className="flower-img">
                <img src="flower4.svg" alt="Flower" />
            </button>
            <div className="flower-about">
                <span className="flower-name">Białe Azalie – Elegancja, Czystość</span>
                <span className="flower-characters">Nowe kwiaty ktory dodali sie do tego</span>
                <span className="flower-time">2025</span>
            </div>
        </div>
      </div>

      <div className="information">
        <h2 className="information-texth2">Kwiaty – piękno natury zaklęte w płatkach</h2>
      <p
        className="information-text"
        dangerouslySetInnerHTML={{
          __html: `
            Kwiaty od wieków fascynują ludzi swoją urodą, zapachem i różnorodnością form. Są nie tylko ozdobą ogrodów, łąk czy wnętrz domów, ale również ważnym elementem kultury, sztuki i symboliki w wielu cywilizacjach. Od delikatnych stokrotek po egzotyczne orchidee – każda roślina kwitnąca opowiada swoją historię, niesie określone znaczenie i wpływa na nasze zmysły.
            <br><br>
            W przyrodzie kwiaty odgrywają niezwykle istotną rolę – są nie tylko narzędziem rozmnażania roślin, ale również kluczowym elementem ekosystemu, przyciągając owady zapylające, takie jak pszczoły, motyle czy trzmiele. Dzięki nim możliwy jest rozwój owoców i nasion, co z kolei zapewnia przetrwanie wielu gatunków.
            <br><br>
            Kwiaty mają również ogromne znaczenie dla człowieka. Używamy ich jako wyraz uczuć – miłości, wdzięczności, smutku czy radości. W kulturze ludowej i religijnej symbolika kwiatów jest niezwykle bogata – róża często oznacza miłość, lilia czystość, a chryzantema żałobę. Kwiaty inspirują poetów, malarzy i muzyków, stanowiąc wieczny temat natchnienia i zachwytu.
            <br><br>
            Nie można zapomnieć także o florystyce – sztuce układania kompozycji kwiatowych, która łączy estetykę z wiedzą botaniczną. Bukiety, wiązanki czy dekoracje kwiatowe to nieodłączny element wielu ceremonii, takich jak śluby, chrzciny, uroczystości rodzinne czy święta.
            <br><br>
            W dzisiejszych czasach, gdy coraz częściej powracamy do natury i poszukujemy piękna w prostych rzeczach, kwiaty odzyskują swoje należne miejsce w naszej codzienności. Coraz więcej osób zakłada ogrody, uprawia rośliny na balkonach i parapetach, dbając o kontakt z przyrodą i harmonię w otoczeniu.
            <br><br>
            Kwiaty to nie tylko dekoracja. To język natury, który mówi do nas kolorami, zapachem i delikatnością. To przypomnienie o kruchości życia, ale też o jego nieustannej odnowie. Patrząc na kwitnący pąk, dostrzegamy piękno, które trwa tylko chwilę, ale zostawia trwały ślad w sercu.
          `,
        }}
      ></p>
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
