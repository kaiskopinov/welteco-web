function HomeHero() {
  const { t, go } = useL();
  const h = t.hero;
  const wide = useWide(900);
  return (
    <section id="top" style={{ position: "relative", minHeight: "max(760px, 100vh)", marginTop: -76, display: "flex", flexDirection: "column", overflow: "hidden", background: wc.white }}>
      <div style={{ position: "absolute", inset: 0, background: `url("${C.IMG.heroPoster}") 50% 50% / cover no-repeat` }}>
        <video onError={(e) => {e.currentTarget.style.display = "none";}} autoPlay muted loop playsInline poster={C.IMG.heroPoster} src={C.IMG.heroVideo} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}></video>
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,245,245,0.45)" }}></div>
      </div>
      <Container style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", padding: "100px 20px 48px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 72 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px 24px", flexWrap: "wrap", fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.black }}>
              {h.cats.map((c, i) => <a key={c} href="#" onClick={(e) => {e.preventDefault();go(i === 0 ? "machines" : "home#offers");}} style={{ color: wc.black, textDecoration: "none" }}>{c}</a>)}
            </div>
            <div style={{ height: 1, opacity: 0.3, background: wc.black }}></div>
          </div>
          <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", gap: 24 }}>
            <h1 style={{ margin: 0, fontSize: "clamp(44px, 6.2vw, 90px)", lineHeight: 1, fontWeight: 500, color: wc.black, textTransform: "uppercase", textWrap: "balance" }}>{h.title}</h1>
            <p style={{ margin: 0, maxWidth: 520, fontSize: 18, lineHeight: "26px", color: wc.black }}>{h.sub}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
              <WButton onClick={() => go("home#offers")}>{h.cta}</WButton>
              <WButton variant="outline" onClick={() => go("contacts")}>{t.nav.contact}</WButton>
            </div>
          </div>
        </div>
      </Container>
    </section>);

}

function HomeAbout() {
  const { t, go } = useL();
  const a = t.about;
  return (
    <section style={{ padding: "128px 0 96px", background: wc.white }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignContent: "flex-start" }}><Eyebrow>{a.eyebrow}</Eyebrow><Eyebrow tone="yellow">{a.why}</Eyebrow></div>
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 32, minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, fontWeight: 500, color: wc.black, textWrap: "balance" }}>{a.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {a.p.map((p) => <p key={p} style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{p}</p>)}
            </div>
            <div><WButton variant="dark" onClick={() => go("about")}>{a.cta}</WButton></div>
          </div>
        </div>
        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 6 }}>
          {a.features.map((f, i) =>
          <div key={f} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48, minHeight: 200, padding: 24, borderRadius: 4, background: wc.black }}>
              <img src={C.FEATURE_ICONS[i]} alt="" style={{ width: 44, height: 54, objectFit: "contain", alignSelf: "flex-start" }} />
              <div style={{ fontSize: 20, lineHeight: "26px", fontWeight: 500, color: wc.white, textTransform: "uppercase" }}>{f}</div>
            </div>
          )}
        </div>
      </Container>
    </section>);

}

function HomePartners() {
  const { t, go } = useL();
  const p = t.partners;
  return (
    <section style={{ padding: "96px 0", background: wc.grey }}>
      <Container>
        <SectionTitle eyebrow={p.eyebrow} title={p.text} size={32} right={<WButton variant="dark" onClick={() => go("partners")}>{p.cta}</WButton>} />
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 6 }}>
          {C.PARTNER_LOGOS.map((src, i) =>
          <button key={i} onClick={() => go("partners")} style={{ all: "unset", cursor: "pointer", height: 200, borderRadius: 4, background: wc.pure, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <LogoTile src={src} alt={["partners logo", "logo of partmer cgm", "logo of partner - witech"][i]} />
            </button>
          )}
        </div>
      </Container>
    </section>);

}

function OfferCard({ title, image, onClick, featured }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ all: "unset", cursor: "pointer", position: "relative", minHeight: featured ? 560 : 420, borderRadius: 4, overflow: "hidden", display: "flex", alignItems: "flex-end", padding: 24, boxSizing: "border-box", background: featured ? wc.grey : wc.black, gridColumn: featured ? "1 / -1" : undefined }}>
      <div style={{ position: "absolute", inset: 0, background: `url("${image}") 50% 50% / ${featured ? "contain" : "cover"} no-repeat`, transform: h ? "scale(1.04)" : "scale(1)", transition: "transform 600ms ease" }}></div>
      {!featured && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 100%)" }}></div>}
      <img src={C.IMG.arrow} alt="" style={{ position: "absolute", top: 24, right: 24, width: 28, height: 28, transform: h ? "translate(3px,-3px)" : "none", transition: "transform 200ms ease" }} />
      <h3 style={{ position: "relative", margin: 0, maxWidth: 560, fontSize: featured ? 40 : 24, lineHeight: featured ? "46px" : "30px", fontWeight: 500, textTransform: "uppercase", color: featured ? wc.black : wc.white, textWrap: "balance" }}>{title}</h3>
    </button>);

}

function HomeOffers() {
  const { t, go } = useL();
  const o = t.offers;
  return (
    <section id="offers" style={{ padding: "128px 0 144px", background: wc.white }}>
      <Container>
        <SectionTitle eyebrow={o.eyebrow} right={<WButton variant="dark" onClick={() => go("contacts")}>{o.cta}</WButton>} />
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 6 }}>
          <OfferCard featured title={o.featured} image={C.IMG.vibroMachine} onClick={() => go("machines")} />
          {o.items.map((it, i) => <OfferCard key={it} title={it} image={C.OFFER_IMAGES[i]} onClick={() => go(i === 0 ? "machines" : "contacts")} />)}
        </div>
      </Container>
    </section>);

}

function HomeStrip() {
  const { t, go } = useL();
  const imgs = [...C.STRIP, ...C.STRIP];
  return (
    <section style={{ padding: "96px 0", background: wc.grey, overflow: "hidden" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <h3 style={{ margin: 0, maxWidth: 900, fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.2, fontWeight: 500, textTransform: "uppercase", color: wc.black, textWrap: "balance" }}>{t.strip.title}</h3>
          <WButton variant="dark" onClick={() => go("products")}>{t.strip.cta}</WButton>
        </div>
      </Container>
      <div style={{ marginTop: 48, display: "flex", gap: 6, width: "max-content", animation: "wMarquee 60s linear infinite" }}>
        {imgs.map((src, i) =>
        <div key={i} style={{ width: 260, height: 260, flexShrink: 0, borderRadius: 4, background: wc.white, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={src} alt="concrete product" style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }} />
          </div>
        )}
      </div>
    </section>);

}

function HomePage() {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeAbout />
      <HomePartners />
      <HomeOffers />
      <HomeStrip />
      <ContactSection />
    </React.Fragment>);

}

Object.assign(window, { HomePage });