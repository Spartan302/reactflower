'use client'

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    let idx = 0;
    const track = document.getElementById("carousel") as HTMLElement;
    const slides = track?.querySelectorAll(".carousel-item") || [];
    const caption = document.getElementById("slideText");
    const caption2 = document.getElementById("slideText2");

    const captions = [
      "Rumianki – Cudowne Kwiaty Natury",
      "Tulipany Białe – Symbol Czystości, Pokoju i Elegancji",
      "Białe Róże – Królewskie Kwiaty Czystości, Miłości i Duchowej Harmonii",
      "Białe Azalie – Elegancja, Czystość i Urok Ukryty w Ciszy Natury"
    ];

    const captions2 = [
        "Rumianek (łac. Matricaria chamomilla) to jedna z najbardziej rozpoznawalnych i cenionych roślin leczniczych w Europie oraz na całym świecie. Od wieków znany jest nie tylko ze swojego delikatnego, przyjemnego zapachu i pięknych, białych płatków z żółtym środkiem, ale przede wszystkim ze swoich niezwykłych właściwości zdrowotnych, kosmetycznych i uspokajających. Rumianek jest symbolem łagodności, naturalnego ukojenia oraz siły płynącej z natury.<br><br>W ziołolecznictwie rumianek odgrywa istotną rolę jako roślina wspomagająca trawienie, działająca przeciwzapalnie, przeciwbakteryjnie oraz przeciwskurczowo. Napary z rumianku wykorzystywane są przy problemach żołądkowych, wzdęciach, a także jako środek łagodzący stres i napięcie nerwowe. Jego kojące działanie sprawia, że często znajduje się w herbatach relaksacyjnych oraz preparatach na bezsenność.<br><br>Rumianek jest również popularnym składnikiem kosmetyków – toników, kremów, szamponów i maseczek. Działa łagodząco na skórę, zmniejsza podrażnienia, a także wspomaga regenerację naskórka. Dzięki zawartości naturalnych olejków eterycznych, flawonoidów i kumaryn, rumianek posiada silne działanie antyoksydacyjne i przeciwstarzeniowe.<br><br>Roślina ta rośnie dziko na łąkach, polach i przy drogach, ale równie często uprawiana jest w ogrodach i na plantacjach. Kwitnie od maja do września, a jej delikatne kwiaty przyciągają nie tylko ludzi, ale i pszczoły oraz inne owady zapylające.<br><br>Rumianek to także roślina, która odgrywała ważną rolę w kulturze ludowej – był używany w rytuałach ochronnych, jako   symbol czystości oraz miłości. W wielu regionach Polski mówi się, że rumianek przynosi spokój, równowagę i zdrowie – zarówno ciału, jak i duszy.",
        "Tulipany białe to jedne z najbardziej zachwycających i delikatnych kwiatów, jakie stworzyła natura. Ich elegancka forma, śnieżnobiała barwa i subtelny zapach sprawiają, że są one nie tylko ozdobą ogrodów, ale także silnym symbolem czystości, niewinności, pokoju i duchowej harmonii. W kulturze europejskiej białe tulipany od wieków były wykorzystywane podczas ważnych ceremonii, takich jak śluby, chrzty czy uroczystości upamiętniające. Ich obecność zawsze niesie ze sobą poczucie świeżości, nowego początku oraz delikatnego piękna.<br><br>W przeciwieństwie do innych kolorów tulipanów, które wyrażają pasję, przyjaźń czy podziw, białe tulipany niosą przesłanie subtelniejsze i głębsze. To kwiaty, które nie krzyczą barwą, lecz emanują spokojem, klasą i wewnętrzną równowagą. Są częstym wyborem osób ceniących prostotę i estetykę w najczystszej postaci.<br><br>Z botanicznego punktu widzenia tulipan należy do rodziny liliowatych (Liliaceae) i pochodzi z obszarów Azji Środkowej, jednak największą sławę zdobył w Holandii, gdzie stał się narodowym symbolem. Białe odmiany tulipanów są efektem wieloletnich prac hodowlanych i dzisiaj można wybierać spośród setek pięknych wariantów, różniących się wysokością, kształtem płatków czy czasem kwitnienia.<br><br>Białe tulipany znakomicie komponują się z innymi kwiatami w bukietach, nadając im lekkości i harmonii. Często łączy się je z różami, eustomami, frezjami czy zielonymi dodatkami. Ich uniwersalność sprawia, że pasują zarówno do klasycznych, jak i nowoczesnych aranżacji florystycznych. Co więcej, są znakomitym wyborem do dekoracji wnętrz – zarówno mieszkań, jak i miejsc pracy – nadając przestrzeniom atmosferę spokoju i czystości.",
        "Białe róże od wieków fascynują ludzi na całym świecie swoją niezwykłą urodą, symboliką i uniwersalnością. Są kwiatami szlachetnymi, pełnymi klasy i subtelności. W przeciwieństwie do czerwonych, które symbolizują namiętną miłość, białe róże reprezentują czystość, niewinność, duchową miłość oraz pokój. Ich obecność w ogrodach, bukietach i dekoracjach wnosi spokój, elegancję i ponadczasowe piękno.<br><br>W wielu kulturach biała róża uznawana jest za symbol doskonałości i boskiego piękna. Jest kwiatem anielskim – delikatnym, ale jednocześnie silnym i trwałym. W tradycjach ślubnych to właśnie białe róże najczęściej zdobią bukiety panny młodej – jako znak nowego początku, wierności oraz szczerości uczuć. Ich uniwersalność sprawia, że są też wykorzystywane podczas uroczystości religijnych, chrzcin, komunii, a także w chwilach pożegnań – niosąc przesłanie wiecznego spokoju i nadziei.<br><br>Botanicznie rzecz biorąc, róża (Rosa) to roślina należąca do rodziny różowatych (Rosaceae). Białe odmiany są wynikiem starannej selekcji i hodowli, dzięki czemu dzisiaj możemy podziwiać setki różnych gatunków i hybryd. Istnieją zarówno róże pnące, wielkokwiatowe, jak i miniaturowe – każda z nich może mieć biały kolor, różniący się odcieniem od śnieżnobiałego po lekko kremowy czy perłowy.<br><br>Uprawa białych róż wymaga nieco troski, ale nagrodą są ich przepiękne kwiaty o intensywnym, lecz delikatnym zapachu. Róże najlepiej rosną w miejscach słonecznych, z żyzną i dobrze przepuszczalną glebą. Regularne przycinanie i podlewanie to klucz do zdrowych i bujnie kwitnących roślin. Dobrze zadbane róże mogą cieszyć oko przez wiele lat, stając się ozdobą ogrodu lub tarasu.",
        "Białe azalie to jedne z najbardziej czarujących i subtelnych kwiatów, które od wieków urzekają ludzi na całym świecie. Ich delikatne płatki, niemal przejrzyste w świetle poranka, niosą w sobie spokój, wdzięk oraz ponadczasową klasę. Nie bez powodu nazywane są kwiatami ciszy i duchowej równowagi – ich obecność koi zmysły i dodaje przestrzeniom elegancji oraz harmonii.<br><br>Azalie należą do rodziny wrzosowatych (Ericaceae), a ich piękno objawia się najpełniej wiosną, gdy krzewy pokrywają się setkami drobnych, ale zachwycających kwiatów. Białe odmiany azalii symbolizują czystość intencji, niewinność, szlachetność i pokój. To kwiaty idealne do ogrodów japońskich, medytacyjnych przestrzeni oraz miejsc, gdzie człowiek pragnie odnaleźć balans między naturą a sobą.<br><br>W kulturze Dalekiego Wschodu azalia uznawana jest za symbol kobiecości, łagodności i piękna skrywanego wewnątrz. Biała wersja tej rośliny ma dodatkowo znaczenie duchowe – często sadzona jest w miejscach refleksji, przy świątyniach lub jako ozdoba domowych altan.<br><br>Azalie są również roślinami wymagającymi, ale odwdzięczają się spektakularnym kwitnieniem. Lubią kwaśną glebę, półcień oraz umiarkowane podlewanie. Ich pielęgnacja uczy cierpliwości i szacunku do rytmu natury. Białe kwiaty, gdy zakwitną, wyglądają jak zawieszone w powietrzu motyle – lekkie, eteryczne, niemal nierzeczywiste.<br><br>W florystyce białe azalie wykorzystywane są w kompozycjach ślubnych, romantycznych oraz żałobnych. Ich neutralna, a jednocześnie elegancka barwa sprawia, że idealnie komponują się zarówno z innymi kwiatami, jak i jako samodzielna dekoracja. Są symbolem czystej miłości, wdzięczności i wiecznego piękna."
    ];

    function to(i: number) {
      idx = (i + slides.length) % slides.length;
      slides[idx]?.scrollIntoView({ behavior: "smooth", inline: "center" });
      if (caption) caption.innerHTML = captions[idx];
      if (caption2) caption2.innerHTML = captions2[idx];
    }

    (window as any).scrollNext = () => to(idx + 1);
    (window as any).scrollPrev = () => to(idx - 1);
  }, []);

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
          <button className="arrow-btn left" onClick={() => (window as any).scrollPrev()}>
            <img src="/arrow-left.svg" alt="←" />
          </button>
          <button className="arrow-btn right" onClick={() => (window as any).scrollNext()}>
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
        {[1, 2, 3, 4].map((n) => (
          <div className="play-music2" key={n}>
            <button className="flower-img">
              <img src={`/flower${n}.svg`} alt="Flower" />
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
